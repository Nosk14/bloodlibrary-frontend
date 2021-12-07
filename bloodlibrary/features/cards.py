import requests

BLOODLIBRARY_SETS_ENDPOINT = "https://api.bloodlibrary.info/api/sets"

rs = requests.get(BLOODLIBRARY_SETS_ENDPOINT)
all_sets_data = rs.json()
