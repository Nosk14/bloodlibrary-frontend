import requests

BLOODLIBRARY_SETS_ENDPOINT = "https://api.bloodlibrary.info/api/sets"

rs = requests.get(BLOODLIBRARY_SETS_ENDPOINT)
all_sets_data = rs.json()

for zet in all_sets_data:
    if zet['name'] == 'Promo':
        added_cards = dict()
        for card in zet['cards']:
            if card['id'] not in added_cards or added_cards[card['id']]['image'] is None and card['image'] is not None:
                added_cards[card['id']] = card
        zet['cards'] = list(added_cards.values())

    zet['cards'].sort(key=lambda c: c['id'])
