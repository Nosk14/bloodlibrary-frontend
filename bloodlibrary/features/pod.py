import re
import html

import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

DISCIPLINES = ["abombwe", "animalism", "auspex", "celerity", "chimerstry", "daimoinon", "dementation", "dominate",
               "fortitude", "melpominee", "mytherceria", "necromancy", "obeah", "obfuscate", "obtenebration", "potence",
               "presence", "protean", "quietus", "sanguinus", "serpentis", "spiritus", "temporis", "thanatosis",
               "thaumaturgy", "valeren", "vicissitude", "visceratika", "chimerstry"]

BLOODLIBRARY_POD = "https://api.bloodlibrary.info/pod/cards"
BLOODLIBRARY_CRYPT = "https://api.bloodlibrary.info/api/crypt/{0}"
BLOODLIBRARY_LIBRARY = "https://api.bloodlibrary.info/api/library/{0}"


HTML_TABLE = {k: '&{};'.format(v) for k, v in html.entities.codepoint2name.items()}


class PODReader:

    def __init__(self):
        self.__session = requests.Session()
        retry = Retry(connect=3, backoff_factor=0.5)
        adapter = HTTPAdapter(max_retries=retry)
        self.__session.mount('http://', adapter)
        self.__session.mount('https://', adapter)

    def get_cards(self):
        cards_in_pod = self.__session.get(BLOODLIBRARY_POD).json()
        cards = self.__parse_raw_cards(cards_in_pod)

        return sorted(cards, key=lambda item: item['id'])

    def __parse_raw_cards(self, raw_cards):
        return [self.__parse_raw_card(x) for x in raw_cards]

    def __parse_raw_card(self, card_pod_data):
        card_data = self.__get_card_data(card_pod_data['id'])
        dtc_link = ""
        gamepod_link = ""

        for shop_data in card_pod_data['shops']:
            if shop_data['shop'] == "DTC":
                dtc_link = shop_data['link']
            elif shop_data['shop'] == "Gamepod":
                gamepod_link = shop_data['link']

        return {
            'name': card_data['name'],
            'id': card_data['id'],
            'link': card_pod_data['shops'][0]['link'],
            'links': {
                'dtc': dtc_link,
                'gamepod': gamepod_link
            },
            'type': card_data['card_type'].split("/"),
            'clan': card_data['clan'].split("/"),
            'disciplines': card_data['disciplines'],
            'release_date': card_pod_data['shops'][0]['release_date'],
        }

    def __get_card_data(self, card_id):
        if card_id[0] == '1':
            full_data = self.__session.get(BLOODLIBRARY_LIBRARY.format(card_id)).json()
            full_data['disciplines'] = re.split('/| & ', full_data['discipline']) if full_data['discipline'] else [""]
        else:
            full_data = self.__session.get(BLOODLIBRARY_CRYPT.format(card_id)).json()
            full_data['disciplines'] = [d.capitalize() for d in DISCIPLINES if full_data[d] > 0]
            if len(full_data['disciplines']) == 0:
                full_data['disciplines'] = [""]

        return full_data


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

    def generate(self):
        return self.__process_data()

class JSData:

    def __init__(self, cards):
        self.cards = cards

    def __get_clans(self):
        available_clans = set()
        for card in self.cards:
            available_clans.update(card['clan'])

        return available_clans

    def __get_disciplines(self):
        available_disciplines = set()
        for card in self.cards:
            available_disciplines.update(card['disciplines'])
        return available_disciplines

    def __get_cards(self):
        return self.cards

    def __process_data(self):
        data = {
            'types': ["Vampire", "Master", "Action", "Ally", "Retainer", "Equipment", "Political Action", "Action Modifier", "Reaction", "Combat", "Event"],
            'clans': list(self.__get_clans()),
            'disciplines': list(self.__get_disciplines()),
            'cards': list(self.__get_cards()),
        }
        return data

    def generate(self):
        return self.__process_data()


def build_js_data():
    _cards = PODReader().get_cards()
    return JSData(_cards).generate()


js_data = build_js_data()
