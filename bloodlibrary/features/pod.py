import logging
import re
import html
from html.parser import HTMLParser
from multiprocessing import Pool

import requests

DISCIPLINES = ["abombwe", "animalism", "auspex", "celerity", "chimerstry", "daimoinon", "dementation", "dominate",
               "fortitude", "melpominee", "mytherceria", "necromancy", "obeah", "obfuscate", "obtenebration", "potence",
               "presence", "protean", "quietus", "sanguinus", "serpentis", "spiritus", "temporis", "thanatosis",
               "thaumaturgy", "valeren", "vicissitude", "visceratika", "chimerstry"]

BLOODLIBRARY_ENDPOINT = "https://api.bloodlibrary.info/api/search/?name={0}"
BLOODLIBRARY_CRYPT = "https://api.bloodlibrary.info/api/crypt/{0}"
BLOODLIBRARY_LIBRARY = "https://api.bloodlibrary.info/api/library/{0}"

CONCURRENCY_LEVEL = 24

HTML_TABLE = {k: '&{};'.format(v) for k, v in html.entities.codepoint2name.items()}


class DriveThruCards:
    WEB_URL = "https://www.drivethrucards.com/browse/pub/12056/Black-Chantry-Productions/subcategory/30619_34256/VTES-Legacy-Card-Singles?sort=4a&pfrom=0.35&pto=0.35&page={0}"

    def __init__(self):
        pass

    def get_cards(self):
        raw_cards = self.__get_cards_from_web()
        cards = DriveThruCards.__parse_raw_cards(raw_cards)
        return sorted(cards, key=lambda item: item['id'])

    def __get_cards_from_web(self):
        raw_cards = []
        for page in range(1, 13):
            html = self.__get_html(DriveThruCards.WEB_URL.format(page))
            parser = DriveThruParser()
            parser.feed(html)
            raw_cards.extend(parser.cards)
        return raw_cards

    def __get_html(self, url):
        rs = requests.get(url, headers={'User-Agent': "Mozilla/5.0"})
        return rs.text

    @staticmethod
    def get_card_data(card_name):
        rs = requests.get(BLOODLIBRARY_ENDPOINT.format(card_name))
        basic_data = rs.json()[0]
        card_id = basic_data['id']
        if card_id[0] == '1':
            full_data = requests.get(BLOODLIBRARY_LIBRARY.format(card_id)).json()
            full_data['disciplines'] = re.split('/| & ', full_data['discipline']) if full_data['discipline'] else [""]
        else:
            full_data = requests.get(BLOODLIBRARY_CRYPT.format(card_id)).json()
            full_data['disciplines'] = [d.capitalize() for d in DISCIPLINES if full_data[d] > 0]
            if len(full_data['disciplines']) == 0:
                full_data['disciplines'] = [""]

        return full_data

    @staticmethod
    def parse_raw_card(raw_card):
        raw_name = raw_card['name'].split("-", 1)[1].rsplit("-", 1)[0]
        link = raw_card['link'].rsplit('?')[0].rsplit('/', 1)[0]
        card_data = DriveThruCards.get_card_data(raw_name)

        return {
            'name': card_data['name'],
            'id': card_data['id'],
            'link': link,
            'type': card_data['card_type'].split("/"),
            'clan': card_data['clan'].split("/"),
            'disciplines': card_data['disciplines'],
            'release_date': raw_card['release_date'],
        }

    @staticmethod
    def __parse_raw_cards(raw_cards):
        pool = Pool(CONCURRENCY_LEVEL)
        results = pool.map(DriveThruCards.parse_raw_card, raw_cards)
        pool.close()
        pool.join()

        return results  # return [self.__parse_raw_card(c) for c in raw_cards]


class DriveThruParser(HTMLParser):

    def __init__(self):
        super().__init__()
        self.cards = []
        self.__is_parsing_card = False
        self.__card_link = None
        self.__card_name = None
        self.__release_date = None

    def error(self, message):
        logging.error(message)

    def handle_starttag(self, tag, attrs):
        if tag == 'tr' and ('class', 'dtrpgListing-row') in attrs:
            self.__is_parsing_card = True
        elif self.__is_parsing_card and tag == 'td' and ('class', 'main') in attrs:
            pass
        elif self.__is_parsing_card:
            if tag == 'a' and self.__card_link is None:
                self.__card_link = list(filter(lambda att: att[0] == 'href', attrs))[0][1]
            elif tag == 'img' and self.__card_name is None:
                self.__card_name = list(filter(lambda att: att[0] == 'alt', attrs))[0][1]

    def handle_endtag(self, tag):
        if tag == 'tr' and self.__is_parsing_card:
            self.__is_parsing_card = False
            self.cards.append({'name': self.__card_name, 'link': self.__card_link, 'release_date': self.__release_date})
            self.__card_name = None
            self.__card_link = None
            self.__release_date = None

    def handle_data(self, data):
        if self.__is_parsing_card and data.startswith("Date Added:"):
            self.__release_date = data.split(':')[1].strip()


class DataFile:

    def __init__(self, cards):
        self.cards = cards

    def __get_clans(self):
        available_clans = set()
        for card in self.cards:
            available_clans.update(card['clan'])

        ret = 'var cardClans = ['
        for clan in available_clans:
            ret += f'\t"{clan}",\n'
        ret += "];\n"

        return ret

    def __get_disciplines(self):
        available_disciplines = set()
        for card in self.cards:
            available_disciplines.update(card['disciplines'])

        ret = 'var cardDisciplines = ['
        for disc in available_disciplines:
            ret += f'\t"{disc}",\n'
        ret += "];\n"

        return ret

    def __get_cards(self):
        ret = "var cards = [\n"
        for card in self.cards:
            card_name = card['name'].translate(HTML_TABLE) #.replace('"', '\\"')
            ret += f"""
                {{
                  "name":"{card_name}",
                  "id":"{card['id']}",
                  "link":"{card['link']}",
                  "type":{card['type']},
                  "clan":{card['clan']},
                  "disciplines":{card['disciplines']},
                  "release_date":"{card['release_date']}",
                }},
            """

        ret += "];\n"
        return ret

    def __process_data(self):
        return 'var cardTypes = ["Vampire", "Master", "Action", "Ally", "Retainer", "Equipment", "Political Action", "Action Modifier", "Reaction", "Combat", "Event"];\n' \
               + self.__get_clans() \
               + self.__get_disciplines() \
               + self.__get_cards()

    def generate(self, path):
        string_data = self.__process_data()
        with open(path, 'w') as f:
            f.write(string_data)


if __name__ == '__main__':
    dtc = DriveThruCards()
    cards = dtc.get_cards()

    print(f"Found {len(cards)} cards")
    DataFile(cards).generate("prova.js")
    print("Done!")
