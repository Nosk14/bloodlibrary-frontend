var cardTypes = ["Vampire", "Master", "Action", "Ally", "Retainer", "Equipment", "Political Action", "Action Modifier", "Reaction", "Combat"];
var cardClans = ["", "Assamite", "Giovanni", "Follower of Set", "Lasombra", "Tzimisce", "Toreador antitribu", "Harbinger of Skulls", "Tremere", "Samedi"];

var cards = [
            {
              "name":"Abyssal Hunter",
              "id":"100014",
              "link":"https://www.drivethrucards.com/product/339307",
              "type":['Ally'],
              "clan":['Lasombra'],
              "twda":1
            },
        
            {
              "name":"Acheron Vortex",
              "id":"100016",
              "link":"https://www.drivethrucards.com/product/339308",
              "type":['Action Modifier'],
              "clan":['Harbinger of Skulls'],
              "twda":40
            },
        
            {
              "name":"Acquired Ventrue Assets",
              "id":"100019",
              "link":"https://www.drivethrucards.com/product/339309",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":147
            },
        
            {
              "name":"Ahriman's Demesne",
              "id":"100027",
              "link":"https://www.drivethrucards.com/product/339310",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Akhenaten, The Sun Pharaoh",
              "id":"100033",
              "link":"https://www.drivethrucards.com/product/339311",
              "type":['Ally'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Alamut",
              "id":"100037",
              "link":"https://www.drivethrucards.com/product/297268",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":89
            },
        
            {
              "name":"Amam the Devourer",
              "id":"100042",
              "link":"https://www.drivethrucards.com/product/339312",
              "type":['Ally'],
              "clan":['Follower of Set'],
              "twda":11
            },
        
            {
              "name":"Ambrosius, The Ferryman",
              "id":"100044",
              "link":"https://www.drivethrucards.com/product/339313",
              "type":['Ally'],
              "clan":['Giovanni'],
              "twda":36
            },
        
            {
              "name":"Ancestor's Talisman, The",
              "id":"100063",
              "link":"https://www.drivethrucards.com/product/297295",
              "type":['Equipment'],
              "clan":['Assamite'],
              "twda":0
            },
        
            {
              "name":"Arms of the Abyss",
              "id":"100091",
              "link":"https://www.drivethrucards.com/product/339314",
              "type":['Combat'],
              "clan":[''],
              "twda":260
            },
        
            {
              "name":"Asanbonsam Ghoul",
              "id":"100103",
              "link":"https://www.drivethrucards.com/product/339977",
              "type":['Ally'],
              "clan":['Tzimisce'],
              "twda":86
            },
        
            {
              "name":"Atonement",
              "id":"100109",
              "link":"https://www.drivethrucards.com/product/339315",
              "type":['Action'],
              "clan":[''],
              "twda":60
            },
        
            {
              "name":"Baal's Bloody Talons",
              "id":"100121",
              "link":"https://www.drivethrucards.com/product/297288",
              "type":['Combat'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Baleful Doll",
              "id":"100127",
              "link":"https://www.drivethrucards.com/product/339316",
              "type":['Equipment'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Baltimore Purge",
              "id":"100128",
              "link":"https://www.drivethrucards.com/product/339317",
              "type":['Action'],
              "clan":[''],
              "twda":78
            },
        
            {
              "name":"Bima",
              "id":"100160",
              "link":"https://www.drivethrucards.com/product/339318",
              "type":['Ally'],
              "clan":['Follower of Set'],
              "twda":21
            },
        
            {
              "name":"Black Metamorphosis",
              "id":"100169",
              "link":"https://www.drivethrucards.com/product/339319",
              "type":['Action'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Black Sunrise",
              "id":"100171",
              "link":"https://www.drivethrucards.com/product/297275",
              "type":['Reaction'],
              "clan":[''],
              "twda":110
            },
        
            {
              "name":"Black Throne, The",
              "id":"100172",
              "link":"https://www.drivethrucards.com/product/297282",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":22
            },
        
            {
              "name":"Blanket of Night",
              "id":"100177",
              "link":"https://www.drivethrucards.com/product/339320",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":152
            },
        
            {
              "name":"Blessed Resilience",
              "id":"100181",
              "link":"https://www.drivethrucards.com/product/339321",
              "type":['Master'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Blood Agony",
              "id":"100192",
              "link":"https://www.drivethrucards.com/product/297317",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Blood Awakening",
              "id":"100193",
              "link":"https://www.drivethrucards.com/product/297302",
              "type":['Action Modifier', 'Reaction'],
              "clan":[''],
              "twda":30
            },
        
            {
              "name":"Blood Clots",
              "id":"100197",
              "link":"https://www.drivethrucards.com/product/297310",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Blood Sweat",
              "id":"100211",
              "link":"https://www.drivethrucards.com/product/297303",
              "type":['Combat'],
              "clan":[''],
              "twda":13
            },
        
            {
              "name":"Blood Tempering",
              "id":"100213",
              "link":"https://www.drivethrucards.com/product/297289",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Book of Going Forth by Night, The",
              "id":"100239",
              "link":"https://www.drivethrucards.com/product/339322",
              "type":['Equipment'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Breath of Thanatos",
              "id":"100249",
              "link":"https://www.drivethrucards.com/product/339323",
              "type":['Action Modifier', 'Combat'],
              "clan":[''],
              "twda":101
            },
        
            {
              "name":"Brigitte Gebauer",
              "id":"100254",
              "link":"https://www.drivethrucards.com/product/339324",
              "type":['Ally'],
              "clan":['Giovanni'],
              "twda":4
            },
        
            {
              "name":"Call of the Hungry Dead",
              "id":"100279",
              "link":"https://www.drivethrucards.com/product/339325",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":789
            },
        
            {
              "name":"Camarilla Vitae Slave",
              "id":"100286",
              "link":"https://www.drivethrucards.com/product/339326",
              "type":['Retainer'],
              "clan":['Lasombra'],
              "twda":17
            },
        
            {
              "name":"Canopic Jar",
              "id":"100291",
              "link":"https://www.drivethrucards.com/product/339327",
              "type":['Equipment'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Cave of Apples",
              "id":"100311",
              "link":"https://www.drivethrucards.com/product/339328",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":7
            },
        
            {
              "name":"Chair of Hades",
              "id":"100318",
              "link":"https://www.drivethrucards.com/product/339329",
              "type":['Action'],
              "clan":[''],
              "twda":23
            },
        
            {
              "name":"Charigger, The Axe",
              "id":"100331",
              "link":"https://www.drivethrucards.com/product/339330",
              "type":['Retainer'],
              "clan":['Giovanni'],
              "twda":3
            },
        
            {
              "name":"Chill of Oblivion",
              "id":"100341",
              "link":"https://www.drivethrucards.com/product/339331",
              "type":['Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Clandestine Contract",
              "id":"100355",
              "link":"https://www.drivethrucards.com/product/297296",
              "type":['Action'],
              "clan":['Assamite'],
              "twda":25
            },
        
            {
              "name":"Coagulate Blood",
              "id":"100368",
              "link":"https://www.drivethrucards.com/product/297269",
              "type":['Combat'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Cobra Fangs",
              "id":"100370",
              "link":"https://www.drivethrucards.com/product/339332",
              "type":['Combat'],
              "clan":[''],
              "twda":5
            },
        
            {
              "name":"Cold Aura",
              "id":"100376",
              "link":"https://www.drivethrucards.com/product/339333",
              "type":['Combat'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Compel the Spirit",
              "id":"100388",
              "link":"https://www.drivethrucards.com/product/339334",
              "type":['Action'],
              "clan":[''],
              "twda":7
            },
        
            {
              "name":"Concordance",
              "id":"100395",
              "link":"https://www.drivethrucards.com/product/339335",
              "type":['Action'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Condemn the Sins of the Father",
              "id":"100396",
              "link":"https://www.drivethrucards.com/product/297283",
              "type":['Action'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Condemnation: Betrayed",
              "id":"100397",
              "link":"https://www.drivethrucards.com/product/339336",
              "type":['Action'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Consignment to Duat",
              "id":"100415",
              "link":"https://www.drivethrucards.com/product/339337",
              "type":['Action'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Contract",
              "id":"100420",
              "link":"https://www.drivethrucards.com/product/339338",
              "type":['Master'],
              "clan":[''],
              "twda":10
            },
        
            {
              "name":"Corruption",
              "id":"100430",
              "link":"https://www.drivethrucards.com/product/339339",
              "type":['Action'],
              "clan":['Follower of Set'],
              "twda":20
            },
        
            {
              "name":"CrimethInc.",
              "id":"100446",
              "link":"https://www.drivethrucards.com/product/339340",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":61
            },
        
            {
              "name":"Crocodile Temple, The",
              "id":"100449",
              "link":"https://www.drivethrucards.com/product/339341",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":9
            },
        
            {
              "name":"Crusade: Berlin",
              "id":"100455",
              "link":"https://www.drivethrucards.com/product/339342",
              "type":['Political Action'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Daemonic Possession",
              "id":"100486",
              "link":"https://www.drivethrucards.com/product/339343",
              "type":['Action'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Dagon's Call",
              "id":"100488",
              "link":"https://www.drivethrucards.com/product/297276",
              "type":['Combat'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Darkling Trickery",
              "id":"100496",
              "link":"https://www.drivethrucards.com/product/339344",
              "type":['Combat'],
              "clan":[''],
              "twda":49
            },
        
            {
              "name":"Darkness Within",
              "id":"100497",
              "link":"https://www.drivethrucards.com/product/339345",
              "type":['Combat'],
              "clan":[''],
              "twda":18
            },
        
            {
              "name":"Darksight",
              "id":"100498",
              "link":"https://www.drivethrucards.com/product/339346",
              "type":['Reaction'],
              "clan":[''],
              "twda":23
            },
        
            {
              "name":"Dead Hand",
              "id":"100503",
              "link":"https://www.drivethrucards.com/product/339347",
              "type":['Combat'],
              "clan":[''],
              "twda":20
            },
        
            {
              "name":"Deed the Heart's Desire",
              "id":"100513",
              "link":"https://www.drivethrucards.com/product/297318",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":36
            },
        
            {
              "name":"Descent into Darkness",
              "id":"100528",
              "link":"https://www.drivethrucards.com/product/339348",
              "type":['Action'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Detect Authority",
              "id":"100532",
              "link":"https://www.drivethrucards.com/product/339349",
              "type":['Reaction'],
              "clan":[''],
              "twda":16
            },
        
            {
              "name":"Deviki Prasanta",
              "id":"100536",
              "link":"https://www.drivethrucards.com/product/297311",
              "type":['Ally'],
              "clan":['Assamite'],
              "twda":6
            },
        
            {
              "name":"Direct Intervention",
              "id":"100545",
              "link":"https://www.drivethrucards.com/product/346890",
              "type":['Master'],
              "clan":[''],
              "twda":1412
            },
        
            {
              "name":"Dirty Contract",
              "id":"100546",
              "link":"https://www.drivethrucards.com/product/339350",
              "type":['Master'],
              "clan":['Samedi'],
              "twda":92
            },
        
            {
              "name":"Dis Pater",
              "id":"100548",
              "link":"https://www.drivethrucards.com/product/339351",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":39
            },
        
            {
              "name":"Disease",
              "id":"100553",
              "link":"https://www.drivethrucards.com/product/297304",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Dismemberment of Osiris",
              "id":"100556",
              "link":"https://www.drivethrucards.com/product/339352",
              "type":['Action'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Divine Image",
              "id":"100565",
              "link":"https://www.drivethrucards.com/product/339353",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":7
            },
        
            {
              "name":"Divine Sign",
              "id":"100566",
              "link":"https://www.drivethrucards.com/product/339354",
              "type":['Action'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Draught of the Soul",
              "id":"100584",
              "link":"https://www.drivethrucards.com/product/297270",
              "type":['Action Modifier', 'Combat'],
              "clan":[''],
              "twda":15
            },
        
            {
              "name":"Drink the Blood of Ahriman",
              "id":"100589",
              "link":"https://www.drivethrucards.com/product/339355",
              "type":['Action'],
              "clan":['Lasombra'],
              "twda":0
            },
        
            {
              "name":"Ecstasy",
              "id":"100610",
              "link":"https://www.drivethrucards.com/product/339356",
              "type":['Reaction'],
              "clan":[''],
              "twda":35
            },
        
            {
              "name":"Edge Vitiation",
              "id":"100614",
              "link":"https://www.drivethrucards.com/product/339357",
              "type":['Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Elysian Fields",
              "id":"100629",
              "link":"https://www.drivethrucards.com/product/339358",
              "type":['Master'],
              "clan":['Lasombra'],
              "twda":110
            },
        
            {
              "name":"Enticement",
              "id":"100650",
              "link":"https://www.drivethrucards.com/product/339359",
              "type":['Action'],
              "clan":[''],
              "twda":151
            },
        
            {
              "name":"Entombment",
              "id":"100651",
              "link":"https://www.drivethrucards.com/product/339360",
              "type":['Combat'],
              "clan":[''],
              "twda":105
            },
        
            {
              "name":"Erosion",
              "id":"100658",
              "link":"https://www.drivethrucards.com/product/297312",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Eruption of Vitae",
              "id":"100659",
              "link":"https://www.drivethrucards.com/product/297277",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Eternal Mask, The",
              "id":"100665",
              "link":"https://www.drivethrucards.com/product/339361",
              "type":['Action'],
              "clan":[''],
              "twda":60
            },
        
            {
              "name":"Eternals of Sirius, The",
              "id":"100667",
              "link":"https://www.drivethrucards.com/product/339362",
              "type":['Master'],
              "clan":[''],
              "twda":202
            },
        
            {
              "name":"Ex Nihilo",
              "id":"100669",
              "link":"https://www.drivethrucards.com/product/339363",
              "type":['Action'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Extortion",
              "id":"100675",
              "link":"https://www.drivethrucards.com/product/339364",
              "type":['Reaction'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Exuding Blood",
              "id":"100677",
              "link":"https://www.drivethrucards.com/product/297297",
              "type":['Combat'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Eyes of the Night",
              "id":"100685",
              "link":"https://www.drivethrucards.com/product/339365",
              "type":['Reaction'],
              "clan":[''],
              "twda":92
            },
        
            {
              "name":"Fae Contortion",
              "id":"100689",
              "link":"https://www.drivethrucards.com/product/339366",
              "type":['Action Modifier', 'Combat'],
              "clan":[''],
              "twda":169
            },
        
            {
              "name":"Felix \"Fix\" Hessian",
              "id":"100719",
              "link":"https://www.drivethrucards.com/product/339367",
              "type":['Ally'],
              "clan":['Giovanni'],
              "twda":25
            },
        
            {
              "name":"Ferraille",
              "id":"100722",
              "link":"https://www.drivethrucards.com/product/339368",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":22
            },
        
            {
              "name":"Form of Corruption",
              "id":"100770",
              "link":"https://www.drivethrucards.com/product/339369",
              "type":['Action'],
              "clan":[''],
              "twda":100
            },
        
            {
              "name":"Form of the Serpent",
              "id":"100773",
              "link":"https://www.drivethrucards.com/product/339370",
              "type":['Action Modifier', 'Combat'],
              "clan":[''],
              "twda":36
            },
        
            {
              "name":"Foul Blood",
              "id":"100778",
              "link":"https://www.drivethrucards.com/product/297319",
              "type":['Reaction'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Friend of Mine",
              "id":"100792",
              "link":"https://www.drivethrucards.com/product/339371",
              "type":['Reaction'],
              "clan":[''],
              "twda":10
            },
        
            {
              "name":"Frozen Object",
              "id":"100795",
              "link":"https://www.drivethrucards.com/product/339372",
              "type":['Action'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Gear Up",
              "id":"100813",
              "link":"https://www.drivethrucards.com/product/339373",
              "type":['Action'],
              "clan":[''],
              "twda":26
            },
        
            {
              "name":"Ghouls of Plaza Morería, The",
              "id":"100822",
              "link":"https://www.drivethrucards.com/product/297284",
              "type":['Ally'],
              "clan":['Assamite'],
              "twda":6
            },
        
            {
              "name":"Giovanni Acceptance",
              "id":"100829",
              "link":"https://www.drivethrucards.com/product/339374",
              "type":['Political Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Giuseppe, Gravedigger",
              "id":"100833",
              "link":"https://www.drivethrucards.com/product/339375",
              "type":['Retainer'],
              "clan":['Giovanni'],
              "twda":5
            },
        
            {
              "name":"Glass Walker Pact",
              "id":"100837",
              "link":"https://www.drivethrucards.com/product/339376",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":2
            },
        
            {
              "name":"Grand Temple of Set",
              "id":"100848",
              "link":"https://www.drivethrucards.com/product/339377",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":2
            },
        
            {
              "name":"Grasp of the Python",
              "id":"100850",
              "link":"https://www.drivethrucards.com/product/339378",
              "type":['Combat'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Grasp the Ghostly",
              "id":"100851",
              "link":"https://www.drivethrucards.com/product/339379",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Haqim's Law: Judgment",
              "id":"100884",
              "link":"https://www.drivethrucards.com/product/297290",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":0
            },
        
            {
              "name":"Haqim's Law: Leadership",
              "id":"100885",
              "link":"https://www.drivethrucards.com/product/297305",
              "type":['Action'],
              "clan":['Assamite'],
              "twda":173
            },
        
            {
              "name":"Hatch the Viper",
              "id":"100891",
              "link":"https://www.drivethrucards.com/product/339380",
              "type":['Retainer'],
              "clan":[''],
              "twda":10
            },
        
            {
              "name":"Haunt",
              "id":"100893",
              "link":"https://www.drivethrucards.com/product/339381",
              "type":['Action'],
              "clan":[''],
              "twda":13
            },
        
            {
              "name":"Heart of Darkness",
              "id":"100902",
              "link":"https://www.drivethrucards.com/product/339382",
              "type":['Action'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Heartblood of the Clan",
              "id":"100906",
              "link":"https://www.drivethrucards.com/product/297271",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":6
            },
        
            {
              "name":"Heaven's Gate",
              "id":"100907",
              "link":"https://www.drivethrucards.com/product/339383",
              "type":['Combat'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Hell-for-Leather",
              "id":"100910",
              "link":"https://www.drivethrucards.com/product/339384",
              "type":['Combat'],
              "clan":[''],
              "twda":42
            },
        
            {
              "name":"Hierophant",
              "id":"100923",
              "link":"https://www.drivethrucards.com/product/339385",
              "type":['Political Action'],
              "clan":['Follower of Set'],
              "twda":1
            },
        
            {
              "name":"Ignore the Searing Flames",
              "id":"100949",
              "link":"https://www.drivethrucards.com/product/339386",
              "type":['Combat'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Inevitability of the Void",
              "id":"100974",
              "link":"https://www.drivethrucards.com/product/339387",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":32
            },
        
            {
              "name":"Invitation Accepted",
              "id":"101004",
              "link":"https://www.drivethrucards.com/product/339388",
              "type":['Political Action'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Jar the Soul",
              "id":"101021",
              "link":"https://www.drivethrucards.com/product/339389",
              "type":['Action'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Jones, The",
              "id":"101023",
              "link":"https://www.drivethrucards.com/product/339390",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Kali's Fang",
              "id":"101032",
              "link":"https://www.drivethrucards.com/product/297298",
              "type":['Equipment'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Keystone Kine",
              "id":"101041",
              "link":"https://www.drivethrucards.com/product/339391",
              "type":['Action'],
              "clan":[''],
              "twda":5
            },
        
            {
              "name":"Khabar: Community, The",
              "id":"101042",
              "link":"https://www.drivethrucards.com/product/297291",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":18
            },
        
            {
              "name":"Khabar: Glory",
              "id":"101043",
              "link":"https://www.drivethrucards.com/product/297278",
              "type":['Action'],
              "clan":['Assamite'],
              "twda":69
            },
        
            {
              "name":"Khabar: Honor, The",
              "id":"101044",
              "link":"https://www.drivethrucards.com/product/297320",
              "type":['Combat'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Khabar: Loyalty",
              "id":"101045",
              "link":"https://www.drivethrucards.com/product/297306",
              "type":['Action'],
              "clan":['Assamite'],
              "twda":8
            },
        
            {
              "name":"Khazar's Diary (Endless Night)",
              "id":"101046",
              "link":"https://www.drivethrucards.com/product/339392",
              "type":['Action'],
              "clan":['Giovanni'],
              "twda":215
            },
        
            {
              "name":"Khobar Towers, Al-Khubar",
              "id":"101048",
              "link":"https://www.drivethrucards.com/product/339393",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":19
            },
        
            {
              "name":"Kiss of Lachesis",
              "id":"101061",
              "link":"https://www.drivethrucards.com/product/339394",
              "type":['Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Leonardo, Mortician",
              "id":"101094",
              "link":"https://www.drivethrucards.com/product/339395",
              "type":['Ally'],
              "clan":['Giovanni'],
              "twda":67
            },
        
            {
              "name":"Lifeless Tongues",
              "id":"101105",
              "link":"https://www.drivethrucards.com/product/339396",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Loss",
              "id":"101124",
              "link":"https://www.drivethrucards.com/product/297313",
              "type":['Action'],
              "clan":[''],
              "twda":165
            },
        
            {
              "name":"Lure of the Serpent",
              "id":"101134",
              "link":"https://www.drivethrucards.com/product/339397",
              "type":['Action'],
              "clan":[''],
              "twda":10
            },
        
            {
              "name":"Market Square",
              "id":"101171",
              "link":"https://www.drivethrucards.com/product/297285",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":16
            },
        
            {
              "name":"Martinelli's Ring",
              "id":"101174",
              "link":"https://www.drivethrucards.com/product/339398",
              "type":['Equipment'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Masquer",
              "id":"101182",
              "link":"https://www.drivethrucards.com/product/339399",
              "type":['Retainer'],
              "clan":[''],
              "twda":7
            },
        
            {
              "name":"Mausoleum, Venice, The",
              "id":"101187",
              "link":"https://www.drivethrucards.com/product/339400",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":4
            },
        
            {
              "name":"Mental Maze",
              "id":"101201",
              "link":"https://www.drivethrucards.com/product/339401",
              "type":['Reaction'],
              "clan":[''],
              "twda":198
            },
        
            {
              "name":"Mercy for Seth",
              "id":"101203",
              "link":"https://www.drivethrucards.com/product/339402",
              "type":['Combat'],
              "clan":[''],
              "twda":17
            },
        
            {
              "name":"Mesu Bedshet",
              "id":"101206",
              "link":"https://www.drivethrucards.com/product/339403",
              "type":['Action'],
              "clan":['Follower of Set'],
              "twda":40
            },
        
            {
              "name":"Mokolé Blood",
              "id":"101232",
              "link":"https://www.drivethrucards.com/product/339404",
              "type":['Equipment'],
              "clan":['Follower of Set'],
              "twda":26
            },
        
            {
              "name":"Morgue Hunting Ground",
              "id":"101243",
              "link":"https://www.drivethrucards.com/product/339405",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":65
            },
        
            {
              "name":"Mozambique Allure",
              "id":"101248",
              "link":"https://www.drivethrucards.com/product/339406",
              "type":['Action'],
              "clan":[''],
              "twda":99
            },
        
            {
              "name":"Mummy's Tongue",
              "id":"101252",
              "link":"https://www.drivethrucards.com/product/339407",
              "type":['Equipment'],
              "clan":['Follower of Set'],
              "twda":0
            },
        
            {
              "name":"Necromancy",
              "id":"101267",
              "link":"https://www.drivethrucards.com/product/339408",
              "type":['Master'],
              "clan":[''],
              "twda":22
            },
        
            {
              "name":"Nephren-Ka",
              "id":"101273",
              "link":"https://www.drivethrucards.com/product/339409",
              "type":['Ally'],
              "clan":['Follower of Set'],
              "twda":18
            },
        
            {
              "name":"Nest of Eagles",
              "id":"101274",
              "link":"https://www.drivethrucards.com/product/297272",
              "type":['Reaction'],
              "clan":['Assamite'],
              "twda":15
            },
        
            {
              "name":"Nightshades",
              "id":"101286",
              "link":"https://www.drivethrucards.com/product/339410",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Nocturn",
              "id":"101293",
              "link":"https://www.drivethrucards.com/product/339411",
              "type":['Ally'],
              "clan":[''],
              "twda":553
            },
        
            {
              "name":"Obtenebration",
              "id":"101312",
              "link":"https://www.drivethrucards.com/product/339412",
              "type":['Master'],
              "clan":[''],
              "twda":48
            },
        
            {
              "name":"Omael Kuman",
              "id":"101320",
              "link":"https://www.drivethrucards.com/product/297292",
              "type":['Retainer'],
              "clan":['Assamite'],
              "twda":1
            },
        
            {
              "name":"Orb of Ulain",
              "id":"101328",
              "link":"https://www.drivethrucards.com/product/339413",
              "type":['Equipment'],
              "clan":[''],
              "twda":18
            },
        
            {
              "name":"Oubliette",
              "id":"101334",
              "link":"https://www.drivethrucards.com/product/339414",
              "type":['Combat'],
              "clan":[''],
              "twda":152
            },
        
            {
              "name":"Pandora's Whisper",
              "id":"101349",
              "link":"https://www.drivethrucards.com/product/339415",
              "type":['Action'],
              "clan":[''],
              "twda":5
            },
        
            {
              "name":"Path of Blood, The",
              "id":"101358",
              "link":"https://www.drivethrucards.com/product/297299",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":6
            },
        
            {
              "name":"Path of Bone, The",
              "id":"101359",
              "link":"https://www.drivethrucards.com/product/339416",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":106
            },
        
            {
              "name":"Path of Night, The",
              "id":"101365",
              "link":"https://www.drivethrucards.com/product/339417",
              "type":['Master'],
              "clan":['Lasombra'],
              "twda":128
            },
        
            {
              "name":"Path of Typhon, The",
              "id":"101373",
              "link":"https://www.drivethrucards.com/product/339418",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":11
            },
        
            {
              "name":"Phased Motion Detector",
              "id":"101398",
              "link":"https://www.drivethrucards.com/product/339419",
              "type":['Equipment'],
              "clan":[''],
              "twda":18
            },
        
            {
              "name":"Phobia",
              "id":"101399",
              "link":"https://www.drivethrucards.com/product/339420",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Pocket Out of Time",
              "id":"101405",
              "link":"https://www.drivethrucards.com/product/339421",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":26
            },
        
            {
              "name":"Poison the Well of Life",
              "id":"101407",
              "link":"https://www.drivethrucards.com/product/297307",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Political Hunting Ground",
              "id":"101415",
              "link":"https://www.drivethrucards.com/product/339422",
              "type":['Master'],
              "clan":['Lasombra'],
              "twda":62
            },
        
            {
              "name":"Political Seizure",
              "id":"101416",
              "link":"https://www.drivethrucards.com/product/339423",
              "type":['Master'],
              "clan":['Lasombra'],
              "twda":0
            },
        
            {
              "name":"Political Struggle",
              "id":"101418",
              "link":"https://www.drivethrucards.com/product/339424",
              "type":['Action'],
              "clan":['Lasombra'],
              "twda":7
            },
        
            {
              "name":"Possession",
              "id":"101423",
              "link":"https://www.drivethrucards.com/product/339425",
              "type":['Action'],
              "clan":[''],
              "twda":60
            },
        
            {
              "name":"Power of One",
              "id":"101429",
              "link":"https://www.drivethrucards.com/product/339426",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":100
            },
        
            {
              "name":"Power Structure",
              "id":"101430",
              "link":"https://www.drivethrucards.com/product/339427",
              "type":['Master'],
              "clan":['Lasombra'],
              "twda":64
            },
        
            {
              "name":"Powerbase: Cape Verde",
              "id":"101433",
              "link":"https://www.drivethrucards.com/product/339428",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":69
            },
        
            {
              "name":"Powerbase: Rome",
              "id":"101441",
              "link":"https://www.drivethrucards.com/product/339429",
              "type":['Master'],
              "clan":[''],
              "twda":12
            },
        
            {
              "name":"Praxis Seizure: Istanbul",
              "id":"101463",
              "link":"https://www.drivethrucards.com/product/339430",
              "type":['Political Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Priestess of Sekhmet",
              "id":"101484",
              "link":"https://www.drivethrucards.com/product/339432",
              "type":['Retainer'],
              "clan":['Follower of Set'],
              "twda":3
            },
        
            {
              "name":"Principia Discordia",
              "id":"101486",
              "link":"https://www.drivethrucards.com/product/339433",
              "type":['Action'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Promise of 1528",
              "id":"101494",
              "link":"https://www.drivethrucards.com/product/339434",
              "type":['Action Modifier', 'Reaction'],
              "clan":['Giovanni'],
              "twda":12
            },
        
            {
              "name":"Provision of the Silsila",
              "id":"101503",
              "link":"https://www.drivethrucards.com/product/297321",
              "type":['Action Modifier', 'Reaction'],
              "clan":['Assamite'],
              "twda":20
            },
        
            {
              "name":"Proxy Kissed",
              "id":"101504",
              "link":"https://www.drivethrucards.com/product/339435",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":7
            },
        
            {
              "name":"Puppeteer",
              "id":"101519",
              "link":"https://www.drivethrucards.com/product/339436",
              "type":['Ally'],
              "clan":[''],
              "twda":41
            },
        
            {
              "name":"Purification",
              "id":"101521",
              "link":"https://www.drivethrucards.com/product/297286",
              "type":['Action', 'Reaction'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Qetu the Evil Doer",
              "id":"101527",
              "link":"https://www.drivethrucards.com/product/339437",
              "type":['Ally'],
              "clan":['Follower of Set'],
              "twda":6
            },
        
            {
              "name":"Quietus",
              "id":"101534",
              "link":"https://www.drivethrucards.com/product/339438",
              "type":['Master'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Realm of the Black Sun, The",
              "id":"101562",
              "link":"https://www.drivethrucards.com/product/339439",
              "type":['Master'],
              "clan":['Follower of Set'],
              "twda":0
            },
        
            {
              "name":"Reformation",
              "id":"101582",
              "link":"https://www.drivethrucards.com/product/339440",
              "type":['Action'],
              "clan":[''],
              "twda":7
            },
        
            {
              "name":"Reliquary: Shango Remains",
              "id":"101598",
              "link":"https://www.drivethrucards.com/product/297314",
              "type":['Equipment'],
              "clan":['Assamite'],
              "twda":4
            },
        
            {
              "name":"Resilient Mind",
              "id":"101609",
              "link":"https://www.drivethrucards.com/product/339441",
              "type":['Action'],
              "clan":[''],
              "twda":5
            },
        
            {
              "name":"Resume the Coil",
              "id":"101616",
              "link":"https://www.drivethrucards.com/product/339442",
              "type":['Action'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Retain the Quick Blood",
              "id":"101618",
              "link":"https://www.drivethrucards.com/product/297273",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Revelation of Desire",
              "id":"101622",
              "link":"https://www.drivethrucards.com/product/339443",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":44
            },
        
            {
              "name":"Revelation of Despair",
              "id":"101623",
              "link":"https://www.drivethrucards.com/product/339444",
              "type":['Reaction'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Revelation of Ecstasy",
              "id":"101624",
              "link":"https://www.drivethrucards.com/product/339445",
              "type":['Action'],
              "clan":[''],
              "twda":46
            },
        
            {
              "name":"Revelation of Wrath",
              "id":"101626",
              "link":"https://www.drivethrucards.com/product/339446",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Revocation of Tyre",
              "id":"101630",
              "link":"https://www.drivethrucards.com/product/339447",
              "type":['Political Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"San Nicolás de los Servitas",
              "id":"101677",
              "link":"https://www.drivethrucards.com/product/339448",
              "type":['Equipment'],
              "clan":['Lasombra'],
              "twda":0
            },
        
            {
              "name":"Sargon Fragment, The",
              "id":"101681",
              "link":"https://www.drivethrucards.com/product/339449",
              "type":['Equipment'],
              "clan":[''],
              "twda":97
            },
        
            {
              "name":"Scarlet Lore",
              "id":"101688",
              "link":"https://www.drivethrucards.com/product/339450",
              "type":['Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Scorpion's Touch",
              "id":"101694",
              "link":"https://www.drivethrucards.com/product/297279",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Selective Silence",
              "id":"101714",
              "link":"https://www.drivethrucards.com/product/297293",
              "type":['Combat'],
              "clan":[''],
              "twda":32
            },
        
            {
              "name":"Serpentis",
              "id":"101728",
              "link":"https://www.drivethrucards.com/product/339451",
              "type":['Master'],
              "clan":[''],
              "twda":25
            },
        
            {
              "name":"Set's Call",
              "id":"101730",
              "link":"https://www.drivethrucards.com/product/339452",
              "type":['Reaction'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Set's Curse",
              "id":"101731",
              "link":"https://www.drivethrucards.com/product/339453",
              "type":['Action'],
              "clan":[''],
              "twda":40
            },
        
            {
              "name":"Shade",
              "id":"101734",
              "link":"https://www.drivethrucards.com/product/339454",
              "type":['Retainer'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Shadow Body",
              "id":"101735",
              "link":"https://www.drivethrucards.com/product/339455",
              "type":['Combat'],
              "clan":[''],
              "twda":264
            },
        
            {
              "name":"Shadow Parasite",
              "id":"101742",
              "link":"https://www.drivethrucards.com/product/339456",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Shadow Play",
              "id":"101743",
              "link":"https://www.drivethrucards.com/product/339457",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":796
            },
        
            {
              "name":"Shadow Step",
              "id":"101744",
              "link":"https://www.drivethrucards.com/product/339458",
              "type":['Combat'],
              "clan":[''],
              "twda":40
            },
        
            {
              "name":"Shadow Strike",
              "id":"101745",
              "link":"https://www.drivethrucards.com/product/339459",
              "type":['Combat'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Shadow Twin",
              "id":"101746",
              "link":"https://www.drivethrucards.com/product/339460",
              "type":['Action'],
              "clan":[''],
              "twda":47
            },
        
            {
              "name":"Shadowed Eyes",
              "id":"101747",
              "link":"https://www.drivethrucards.com/product/339461",
              "type":['Action'],
              "clan":[''],
              "twda":2
            },
        
            {
              "name":"Shambling Hordes",
              "id":"101751",
              "link":"https://www.drivethrucards.com/product/339462",
              "type":['Ally'],
              "clan":[''],
              "twda":833
            },
        
            {
              "name":"Shape Mastery",
              "id":"101754",
              "link":"https://www.drivethrucards.com/product/339463",
              "type":['Combat', 'Reaction'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Shell Break",
              "id":"101763",
              "link":"https://www.drivethrucards.com/product/339464",
              "type":['Action'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Shroud Mastery",
              "id":"101773",
              "link":"https://www.drivethrucards.com/product/339465",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":76
            },
        
            {
              "name":"Shroud of Absence",
              "id":"101774",
              "link":"https://www.drivethrucards.com/product/339466",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":394
            },
        
            {
              "name":"Shroud of Night",
              "id":"101775",
              "link":"https://www.drivethrucards.com/product/339467",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":375
            },
        
            {
              "name":"Shroudsight",
              "id":"101776",
              "link":"https://www.drivethrucards.com/product/339468",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":7
            },
        
            {
              "name":"Siphon",
              "id":"101784",
              "link":"https://www.drivethrucards.com/product/339469",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Skin of the Adder",
              "id":"101793",
              "link":"https://www.drivethrucards.com/product/339470",
              "type":['Combat'],
              "clan":[''],
              "twda":10
            },
        
            {
              "name":"Smoke and Mirrors",
              "id":"101813",
              "link":"https://www.drivethrucards.com/product/339471",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":9
            },
        
            {
              "name":"Songs of the Distant Vitae",
              "id":"101828",
              "link":"https://www.drivethrucards.com/product/297308",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Soul Feasting",
              "id":"101831",
              "link":"https://www.drivethrucards.com/product/339472",
              "type":['Action'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Soul Stealing",
              "id":"101836",
              "link":"https://www.drivethrucards.com/product/339473",
              "type":['Action Modifier', 'Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Spectral Divination",
              "id":"101843",
              "link":"https://www.drivethrucards.com/product/339474",
              "type":['Action Modifier', 'Reaction'],
              "clan":[''],
              "twda":574
            },
        
            {
              "name":"Spell of Life",
              "id":"101845",
              "link":"https://www.drivethrucards.com/product/339475",
              "type":['Action'],
              "clan":['Follower of Set'],
              "twda":153
            },
        
            {
              "name":"Spiritual Intervention",
              "id":"101852",
              "link":"https://www.drivethrucards.com/product/339476",
              "type":['Combat'],
              "clan":[''],
              "twda":371
            },
        
            {
              "name":"Spiritual Protector",
              "id":"101853",
              "link":"https://www.drivethrucards.com/product/339477",
              "type":['Retainer'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Steely Tenacity",
              "id":"101869",
              "link":"https://www.drivethrucards.com/product/339478",
              "type":['Action', 'Combat'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Stone Travel",
              "id":"101875",
              "link":"https://www.drivethrucards.com/product/339479",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":224
            },
        
            {
              "name":"Strike at the True Flesh",
              "id":"101885",
              "link":"https://www.drivethrucards.com/product/297315",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Succulent Vitae",
              "id":"101894",
              "link":"https://www.drivethrucards.com/product/297300",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":6
            },
        
            {
              "name":"Sudario Refraction",
              "id":"101895",
              "link":"https://www.drivethrucards.com/product/339480",
              "type":['Action'],
              "clan":['Giovanni'],
              "twda":340
            },
        
            {
              "name":"Summon Soul",
              "id":"101898",
              "link":"https://www.drivethrucards.com/product/339481",
              "type":['Action'],
              "clan":[''],
              "twda":8
            },
        
            {
              "name":"Summon the Abyss",
              "id":"101900",
              "link":"https://www.drivethrucards.com/product/339482",
              "type":['Action'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Summon the Serpent",
              "id":"101901",
              "link":"https://www.drivethrucards.com/product/339483",
              "type":['Action'],
              "clan":['Follower of Set'],
              "twda":5
            },
        
            {
              "name":"Swiss Cut",
              "id":"101917",
              "link":"https://www.drivethrucards.com/product/339484",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":3
            },
        
            {
              "name":"Tainted Vitae",
              "id":"101926",
              "link":"https://www.drivethrucards.com/product/339485",
              "type":['Reaction'],
              "clan":['Follower of Set'],
              "twda":0
            },
        
            {
              "name":"Tajdid",
              "id":"101927",
              "link":"https://www.drivethrucards.com/product/297322",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":3
            },
        
            {
              "name":"Taste of Death",
              "id":"101944",
              "link":"https://www.drivethrucards.com/product/297287",
              "type":['Combat'],
              "clan":[''],
              "twda":74
            },
        
            {
              "name":"Temptation",
              "id":"101954",
              "link":"https://www.drivethrucards.com/product/339486",
              "type":['Action'],
              "clan":[''],
              "twda":299
            },
        
            {
              "name":"Tenebrous Form",
              "id":"101957",
              "link":"https://www.drivethrucards.com/product/339487",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":165
            },
        
            {
              "name":"Thin Blood",
              "id":"101970",
              "link":"https://www.drivethrucards.com/product/297280",
              "type":['Combat'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Thrones Crumble",
              "id":"101981",
              "link":"https://www.drivethrucards.com/product/339488",
              "type":['Action'],
              "clan":[''],
              "twda":1
            },
        
            {
              "name":"Tongue of the Serpent",
              "id":"101988",
              "link":"https://www.drivethrucards.com/product/339489",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Torment the Soul",
              "id":"101992",
              "link":"https://www.drivethrucards.com/product/339490",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Tower of London",
              "id":"102001",
              "link":"https://www.drivethrucards.com/product/339491",
              "type":['Master'],
              "clan":['Giovanni'],
              "twda":13
            },
        
            {
              "name":"Transfusion",
              "id":"102011",
              "link":"https://www.drivethrucards.com/product/339492",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Treaty of Laibach",
              "id":"102018",
              "link":"https://www.drivethrucards.com/product/339493",
              "type":['Master'],
              "clan":['Follower of Set', 'Tremere'],
              "twda":0
            },
        
            {
              "name":"Trochomancy",
              "id":"102026",
              "link":"https://www.drivethrucards.com/product/339494",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":93
            },
        
            {
              "name":"Truth of a Thousand Lies",
              "id":"102044",
              "link":"https://www.drivethrucards.com/product/339495",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":159
            },
        
            {
              "name":"Truth of Blood",
              "id":"102045",
              "link":"https://www.drivethrucards.com/product/297274",
              "type":['Action'],
              "clan":[''],
              "twda":9
            },
        
            {
              "name":"Tutu the Doubly Evil One",
              "id":"102048",
              "link":"https://www.drivethrucards.com/product/339496",
              "type":['Ally'],
              "clan":['Follower of Set'],
              "twda":11
            },
        
            {
              "name":"Tye Cooper",
              "id":"102053",
              "link":"https://www.drivethrucards.com/product/339497",
              "type":['Ally'],
              "clan":['Giovanni'],
              "twda":76
            },
        
            {
              "name":"Typhonic Beast",
              "id":"102054",
              "link":"https://www.drivethrucards.com/product/339498",
              "type":['Combat'],
              "clan":[''],
              "twda":32
            },
        
            {
              "name":"Underworld Hunting Ground",
              "id":"102066",
              "link":"https://www.drivethrucards.com/product/297294",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":25
            },
        
            {
              "name":"Vascular Explosion",
              "id":"102091",
              "link":"https://www.drivethrucards.com/product/297309",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Venenation",
              "id":"102104",
              "link":"https://www.drivethrucards.com/product/339499",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":15
            },
        
            {
              "name":"Venetian Conference",
              "id":"102105",
              "link":"https://www.drivethrucards.com/product/339500",
              "type":['Reaction'],
              "clan":['Giovanni'],
              "twda":4
            },
        
            {
              "name":"Walks-With-Might",
              "id":"102141",
              "link":"https://www.drivethrucards.com/product/339501",
              "type":['Ally'],
              "clan":[''],
              "twda":3
            },
        
            {
              "name":"Waters of Duat",
              "id":"102159",
              "link":"https://www.drivethrucards.com/product/339502",
              "type":['Action'],
              "clan":['Follower of Set'],
              "twda":17
            },
        
            {
              "name":"Wave of Lethargy",
              "id":"102161",
              "link":"https://www.drivethrucards.com/product/297316",
              "type":['Combat'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Web of Knives Recruit",
              "id":"102165",
              "link":"https://www.drivethrucards.com/product/297281",
              "type":['Action'],
              "clan":['Assamite'],
              "twda":107
            },
        
            {
              "name":"Weeping Stone",
              "id":"102167",
              "link":"https://www.drivethrucards.com/product/339503",
              "type":['Master'],
              "clan":[''],
              "twda":13
            },
        
            {
              "name":"Weigh the Heart",
              "id":"102168",
              "link":"https://www.drivethrucards.com/product/339504",
              "type":['Action Modifier'],
              "clan":[''],
              "twda":0
            },
        
            {
              "name":"Whispers from the Dead",
              "id":"102175",
              "link":"https://www.drivethrucards.com/product/339505",
              "type":['Action'],
              "clan":[''],
              "twda":4
            },
        
            {
              "name":"Yoruba Shrine",
              "id":"102201",
              "link":"https://www.drivethrucards.com/product/297301",
              "type":['Master'],
              "clan":['Assamite'],
              "twda":30
            },
        
            {
              "name":"Zaire River Ferry",
              "id":"102203",
              "link":"https://www.drivethrucards.com/product/339506",
              "type":['Equipment'],
              "clan":['Lasombra'],
              "twda":31
            },
        
            {
              "name":"Zombie",
              "id":"102210",
              "link":"https://www.drivethrucards.com/product/339507",
              "type":['Retainer'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Aabbt Kindred",
              "id":"200001",
              "link":"https://www.drivethrucards.com/product/339151",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":22
            },
        
            {
              "name":"Aaron Duggan, Cameron's Toady",
              "id":"200003",
              "link":"https://www.drivethrucards.com/product/339152",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":24
            },
        
            {
              "name":"Abd al-Rashid",
              "id":"200004",
              "link":"https://www.drivethrucards.com/product/297373",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":5
            },
        
            {
              "name":"Abdelsobek",
              "id":"200005",
              "link":"https://www.drivethrucards.com/product/339153",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":18
            },
        
            {
              "name":"Accorri Giovanni",
              "id":"200010",
              "link":"https://www.drivethrucards.com/product/339154",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":12
            },
        
            {
              "name":"Ahmose Chambers",
              "id":"200024",
              "link":"https://www.drivethrucards.com/product/339155",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":25
            },
        
            {
              "name":"Aisha",
              "id":"200029",
              "link":"https://www.drivethrucards.com/product/339156",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":4
            },
        
            {
              "name":"Al-Ashrad, Amr of Alamut",
              "id":"200035",
              "link":"https://www.drivethrucards.com/product/297323",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":1
            },
        
            {
              "name":"Ali Kar",
              "id":"200053",
              "link":"https://www.drivethrucards.com/product/297330",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":13
            },
        
            {
              "name":"Almodo Giovanni",
              "id":"200059",
              "link":"https://www.drivethrucards.com/product/339157",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":22
            },
        
            {
              "name":"Alu",
              "id":"200062",
              "link":"https://www.drivethrucards.com/product/297338",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":29
            },
        
            {
              "name":"Alvaro, The Scion of Angelica",
              "id":"200063",
              "link":"https://www.drivethrucards.com/product/339158",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":42
            },
        
            {
              "name":"Amaravati",
              "id":"200065",
              "link":"https://www.drivethrucards.com/product/297345",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":60
            },
        
            {
              "name":"Ambrogino Giovanni",
              "id":"200068",
              "link":"https://www.drivethrucards.com/product/339159",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":6
            },
        
            {
              "name":"Ambrogino Giovanni",
              "id":"200069",
              "link":"https://www.drivethrucards.com/product/339160",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":3
            },
        
            {
              "name":"Ambrosio Luis Monçada, Plenipotentiary",
              "id":"200070",
              "link":"https://www.drivethrucards.com/product/339161",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":111
            },
        
            {
              "name":"Amenophobis",
              "id":"200073",
              "link":"https://www.drivethrucards.com/product/339162",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":9
            },
        
            {
              "name":"Amisa",
              "id":"200074",
              "link":"https://www.drivethrucards.com/product/339163",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":13
            },
        
            {
              "name":"Andrea Giovanni",
              "id":"200082",
              "link":"https://www.drivethrucards.com/product/339164",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":112
            },
        
            {
              "name":"Andrew Emory",
              "id":"200085",
              "link":"https://www.drivethrucards.com/product/339165",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":46
            },
        
            {
              "name":"Angelica, The Canonicus",
              "id":"200092",
              "link":"https://www.drivethrucards.com/product/339166",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":41
            },
        
            {
              "name":"Ankh-sen-Sutekh",
              "id":"200099",
              "link":"https://www.drivethrucards.com/product/339167",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":29
            },
        
            {
              "name":"Antara",
              "id":"200108",
              "link":"https://www.drivethrucards.com/product/297352",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Antón de Concepción",
              "id":"200114",
              "link":"https://www.drivethrucards.com/product/339168",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":27
            },
        
            {
              "name":"Antonio Delgado",
              "id":"200117",
              "link":"https://www.drivethrucards.com/product/339169",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":38
            },
        
            {
              "name":"Anwar",
              "id":"200121",
              "link":"https://www.drivethrucards.com/product/297359",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":5
            },
        
            {
              "name":"Appius Claudius Corvus",
              "id":"200124",
              "link":"https://www.drivethrucards.com/product/339170",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":13
            },
        
            {
              "name":"Arnulf Jormungandrsson",
              "id":"200140",
              "link":"https://www.drivethrucards.com/product/339171",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":6
            },
        
            {
              "name":"Augustus Giovanni",
              "id":"200149",
              "link":"https://www.drivethrucards.com/product/339172",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":2
            },
        
            {
              "name":"Aurora Van Brande, Paladin",
              "id":"200150",
              "link":"https://www.drivethrucards.com/product/339173",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":21
            },
        
            {
              "name":"Aziz, Dammar of Istanbul",
              "id":"200155",
              "link":"https://www.drivethrucards.com/product/297366",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":7
            },
        
            {
              "name":"Badr al-Budur",
              "id":"200161",
              "link":"https://www.drivethrucards.com/product/297331",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":32
            },
        
            {
              "name":"Bajazet al-Nasir",
              "id":"200162",
              "link":"https://www.drivethrucards.com/product/297346",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Bakr",
              "id":"200163",
              "link":"https://www.drivethrucards.com/product/297360",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":17
            },
        
            {
              "name":"Baldesar Rossellini",
              "id":"200164",
              "link":"https://www.drivethrucards.com/product/339174",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":11
            },
        
            {
              "name":"Banjoko",
              "id":"200165",
              "link":"https://www.drivethrucards.com/product/339175",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":79
            },
        
            {
              "name":"Basir",
              "id":"200175",
              "link":"https://www.drivethrucards.com/product/297374",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":29
            },
        
            {
              "name":"Belle Equitone",
              "id":"200188",
              "link":"https://www.drivethrucards.com/product/339176",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":17
            },
        
            {
              "name":"Benedict Giovanni, Agent",
              "id":"200189",
              "link":"https://www.drivethrucards.com/product/339177",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":10
            },
        
            {
              "name":"Bertrand d'Anjou",
              "id":"200192",
              "link":"https://www.drivethrucards.com/product/297339",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":3
            },
        
            {
              "name":"Black Lotus",
              "id":"200202",
              "link":"https://www.drivethrucards.com/product/339178",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":23
            },
        
            {
              "name":"Black Wallace",
              "id":"200203",
              "link":"https://www.drivethrucards.com/product/339179",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":9
            },
        
            {
              "name":"Bupe Kuila",
              "id":"200228",
              "link":"https://www.drivethrucards.com/product/339180",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":7
            },
        
            {
              "name":"Cagliostro, The Grand Copht",
              "id":"200231",
              "link":"https://www.drivethrucards.com/product/339181",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":12
            },
        
            {
              "name":"Cameron",
              "id":"200239",
              "link":"https://www.drivethrucards.com/product/339182",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":44
            },
        
            {
              "name":"Carlotta Giovanni",
              "id":"200245",
              "link":"https://www.drivethrucards.com/product/339183",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":49
            },
        
            {
              "name":"Carmine Giovanni",
              "id":"200247",
              "link":"https://www.drivethrucards.com/product/339184",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Carolina Vález",
              "id":"200249",
              "link":"https://www.drivethrucards.com/product/339185",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":8
            },
        
            {
              "name":"Celine Chevalier",
              "id":"200260",
              "link":"https://www.drivethrucards.com/product/339186",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":25
            },
        
            {
              "name":"Chas Giovanni Tello",
              "id":"200268",
              "link":"https://www.drivethrucards.com/product/339188",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":14
            },
        
            {
              "name":"Clea Auguste d'Holford",
              "id":"200282",
              "link":"https://www.drivethrucards.com/product/339189",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":9
            },
        
            {
              "name":"Conrad Adoula",
              "id":"200288",
              "link":"https://www.drivethrucards.com/product/339190",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":27
            },
        
            {
              "name":"Count Ormonde",
              "id":"200295",
              "link":"https://www.drivethrucards.com/product/339191",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":58
            },
        
            {
              "name":"Cristobal Ghiberti",
              "id":"200300",
              "link":"https://www.drivethrucards.com/product/339192",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":10
            },
        
            {
              "name":"Cristofero Giovanni",
              "id":"200301",
              "link":"https://www.drivethrucards.com/product/339193",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":45
            },
        
            {
              "name":"Danny Larkshill",
              "id":"200318",
              "link":"https://www.drivethrucards.com/product/339194",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":3
            },
        
            {
              "name":"Dedefra",
              "id":"200328",
              "link":"https://www.drivethrucards.com/product/339195",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":12
            },
        
            {
              "name":"Diego Giovanni",
              "id":"200344",
              "link":"https://www.drivethrucards.com/product/339196",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":8
            },
        
            {
              "name":"Djuhah, The Bronze Bow",
              "id":"200348",
              "link":"https://www.drivethrucards.com/product/297353",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":28
            },
        
            {
              "name":"Dmitri Borodin",
              "id":"200350",
              "link":"https://www.drivethrucards.com/product/297367",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":14
            },
        
            {
              "name":"Don Michael Antonio Giovanni",
              "id":"200363",
              "link":"https://www.drivethrucards.com/product/339197",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":16
            },
        
            {
              "name":"Donatello Giovanni",
              "id":"200366",
              "link":"https://www.drivethrucards.com/product/339198",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":11
            },
        
            {
              "name":"Dr. Julius Sutphen",
              "id":"200378",
              "link":"https://www.drivethrucards.com/product/339199",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":17
            },
        
            {
              "name":"Dr. Julius Sutphen",
              "id":"200379",
              "link":"https://www.drivethrucards.com/product/339200",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":19
            },
        
            {
              "name":"Enzo Giovanni, Pentex Board of Directors",
              "id":"200425",
              "link":"https://www.drivethrucards.com/product/339201",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":9
            },
        
            {
              "name":"Eric Milliner",
              "id":"200430",
              "link":"https://www.drivethrucards.com/product/339202",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":5
            },
        
            {
              "name":"Ermenegildo, The Rake",
              "id":"200435",
              "link":"https://www.drivethrucards.com/product/339203",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":106
            },
        
            {
              "name":"Evan Rogers",
              "id":"200445",
              "link":"https://www.drivethrucards.com/product/297324",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":8
            },
        
            {
              "name":"Ezekiel, Lord of Montreal",
              "id":"200449",
              "link":"https://www.drivethrucards.com/product/339204",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":11
            },
        
            {
              "name":"Fatima al-Faqadi",
              "id":"200459",
              "link":"https://www.drivethrucards.com/product/297332",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":11
            },
        
            {
              "name":"Fida'i",
              "id":"200466",
              "link":"https://www.drivethrucards.com/product/297375",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":0
            },
        
            {
              "name":"Francesca Giovanni",
              "id":"200474",
              "link":"https://www.drivethrucards.com/product/339205",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":62
            },
        
            {
              "name":"Francis Milliner",
              "id":"200475",
              "link":"https://www.drivethrucards.com/product/339206",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Francisco Domingo de Polonia",
              "id":"200476",
              "link":"https://www.drivethrucards.com/product/339207",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":63
            },
        
            {
              "name":"Gaspare Giovanni",
              "id":"200495",
              "link":"https://www.drivethrucards.com/product/339208",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":1
            },
        
            {
              "name":"Giangaleazzo, The Traitor",
              "id":"200514",
              "link":"https://www.drivethrucards.com/product/339209",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":11
            },
        
            {
              "name":"Gianmaria Giovanni",
              "id":"200515",
              "link":"https://www.drivethrucards.com/product/339210",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":7
            },
        
            {
              "name":"Gillespi Giovanni",
              "id":"200518",
              "link":"https://www.drivethrucards.com/product/339211",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":66
            },
        
            {
              "name":"Giovanni del Georgio",
              "id":"200521",
              "link":"https://www.drivethrucards.com/product/339212",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":13
            },
        
            {
              "name":"Gloria Giovanni",
              "id":"200525",
              "link":"https://www.drivethrucards.com/product/339213",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":156
            },
        
            {
              "name":"Gratiano",
              "id":"200534",
              "link":"https://www.drivethrucards.com/product/339214",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":128
            },
        
            {
              "name":"Gualtiero Ghiberti",
              "id":"200542",
              "link":"https://www.drivethrucards.com/product/339215",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":15
            },
        
            {
              "name":"Guido Lucciano",
              "id":"200544",
              "link":"https://www.drivethrucards.com/product/339216",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":41
            },
        
            {
              "name":"Guillaume Giovanni",
              "id":"200545",
              "link":"https://www.drivethrucards.com/product/339217",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":101
            },
        
            {
              "name":"Hadrian Garrick",
              "id":"200558",
              "link":"https://www.drivethrucards.com/product/339218",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":19
            },
        
            {
              "name":"Hafsa, The Watcher",
              "id":"200559",
              "link":"https://www.drivethrucards.com/product/297354",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":22
            },
        
            {
              "name":"Halim Bey",
              "id":"200561",
              "link":"https://www.drivethrucards.com/product/339219",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":31
            },
        
            {
              "name":"Harika Guljan",
              "id":"200569",
              "link":"https://www.drivethrucards.com/product/297325",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Henri Lavenant",
              "id":"200589",
              "link":"https://www.drivethrucards.com/product/339220",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":38
            },
        
            {
              "name":"Hesha Ruhadze",
              "id":"200594",
              "link":"https://www.drivethrucards.com/product/339221",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":34
            },
        
            {
              "name":"Hester Reed",
              "id":"200595",
              "link":"https://www.drivethrucards.com/product/339222",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":8
            },
        
            {
              "name":"Husamettin",
              "id":"200614",
              "link":"https://www.drivethrucards.com/product/297340",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":1
            },
        
            {
              "name":"Ignacio, The Black Priest",
              "id":"200622",
              "link":"https://www.drivethrucards.com/product/339223",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":41
            },
        
            {
              "name":"Ignazio Giovanni",
              "id":"200624",
              "link":"https://www.drivethrucards.com/product/339224",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":38
            },
        
            {
              "name":"Intisar",
              "id":"200637",
              "link":"https://www.drivethrucards.com/product/339225",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":10
            },
        
            {
              "name":"Isabel Giovanni",
              "id":"200643",
              "link":"https://www.drivethrucards.com/product/339226",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":159
            },
        
            {
              "name":"Izhim abd Azrael",
              "id":"200650",
              "link":"https://www.drivethrucards.com/product/297368",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":25
            },
        
            {
              "name":"Jalal Sayad",
              "id":"200666",
              "link":"https://www.drivethrucards.com/product/297347",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":8
            },
        
            {
              "name":"Jamal",
              "id":"200668",
              "link":"https://www.drivethrucards.com/product/297361",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":3
            },
        
            {
              "name":"Janni",
              "id":"200676",
              "link":"https://www.drivethrucards.com/product/297333",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":12
            },
        
            {
              "name":"Joe \"Boot\" Hill",
              "id":"200710",
              "link":"https://www.drivethrucards.com/product/297376",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":17
            },
        
            {
              "name":"Kabede Maru",
              "id":"200741",
              "link":"https://www.drivethrucards.com/product/297341",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":15
            },
        
            {
              "name":"Kahina the Sorceress",
              "id":"200742",
              "link":"https://www.drivethrucards.com/product/339227",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":19
            },
        
            {
              "name":"Kalinda",
              "id":"200745",
              "link":"https://www.drivethrucards.com/product/297369",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":8
            },
        
            {
              "name":"Kamau Jafari",
              "id":"200748",
              "link":"https://www.drivethrucards.com/product/297348",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":36
            },
        
            {
              "name":"Kanya Akhtar",
              "id":"200752",
              "link":"https://www.drivethrucards.com/product/297362",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":9
            },
        
            {
              "name":"Karif al Numair",
              "id":"200754",
              "link":"https://www.drivethrucards.com/product/297326",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":20
            },
        
            {
              "name":"Kashan",
              "id":"200759",
              "link":"https://www.drivethrucards.com/product/297355",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":12
            },
        
            {
              "name":"Kay Polerno",
              "id":"200765",
              "link":"https://www.drivethrucards.com/product/339228",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":17
            },
        
            {
              "name":"Kemintiri",
              "id":"200769",
              "link":"https://www.drivethrucards.com/product/339229",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":13
            },
        
            {
              "name":"Kemintiri",
              "id":"200770",
              "link":"https://www.drivethrucards.com/product/339230",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":5
            },
        
            {
              "name":"Kephamos, High Priest of Marrakech",
              "id":"200773",
              "link":"https://www.drivethrucards.com/product/339231",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":29
            },
        
            {
              "name":"Khalil Anvari",
              "id":"200777",
              "link":"https://www.drivethrucards.com/product/339232",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":14
            },
        
            {
              "name":"Khay'tall, Snake of Eden",
              "id":"200780",
              "link":"https://www.drivethrucards.com/product/339233",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":41
            },
        
            {
              "name":"Lady Constancia",
              "id":"200804",
              "link":"https://www.drivethrucards.com/product/339234",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":13
            },
        
            {
              "name":"Lalitha",
              "id":"200809",
              "link":"https://www.drivethrucards.com/product/339235",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":11
            },
        
            {
              "name":"Layla bint-Nadr",
              "id":"200818",
              "link":"https://www.drivethrucards.com/product/297377",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":17
            },
        
            {
              "name":"Leila Monroe",
              "id":"200829",
              "link":"https://www.drivethrucards.com/product/339236",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":48
            },
        
            {
              "name":"Lia Milliner",
              "id":"200834",
              "link":"https://www.drivethrucards.com/product/339237",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":103
            },
        
            {
              "name":"Lisette Vizquel",
              "id":"200842",
              "link":"https://www.drivethrucards.com/product/339238",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":14
            },
        
            {
              "name":"Lord Vauxhall",
              "id":"200857",
              "link":"https://www.drivethrucards.com/product/339240",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":38
            },
        
            {
              "name":"Lorenzo Detuono",
              "id":"200858",
              "link":"https://www.drivethrucards.com/product/339241",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Luca Italicus",
              "id":"200867",
              "link":"https://www.drivethrucards.com/product/339242",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":10
            },
        
            {
              "name":"Lucita",
              "id":"200874",
              "link":"https://www.drivethrucards.com/product/339243",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":35
            },
        
            {
              "name":"Lucita",
              "id":"200875",
              "link":"https://www.drivethrucards.com/product/339244",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":15
            },
        
            {
              "name":"Lucy Markowitz",
              "id":"200878",
              "link":"https://www.drivethrucards.com/product/339245",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":69
            },
        
            {
              "name":"Luna Giovanni",
              "id":"200885",
              "link":"https://www.drivethrucards.com/product/339246",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":4
            },
        
            {
              "name":"Marciana Giovanni, Investigator",
              "id":"200913",
              "link":"https://www.drivethrucards.com/product/339247",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":65
            },
        
            {
              "name":"Marcus Vitel",
              "id":"200916",
              "link":"https://www.drivethrucards.com/product/339248",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":8
            },
        
            {
              "name":"Margaret Milliner",
              "id":"200917",
              "link":"https://www.drivethrucards.com/product/339249",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":0
            },
        
            {
              "name":"Marianna",
              "id":"200925",
              "link":"https://www.drivethrucards.com/product/339250",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":1
            },
        
            {
              "name":"Mario Giovanni",
              "id":"200932",
              "link":"https://www.drivethrucards.com/product/339251",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":45
            },
        
            {
              "name":"Marla Kenyon",
              "id":"200938",
              "link":"https://www.drivethrucards.com/product/339252",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":14
            },
        
            {
              "name":"Melek",
              "id":"200969",
              "link":"https://www.drivethrucards.com/product/297334",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":1
            },
        
            {
              "name":"Melinda Galbraith",
              "id":"200970",
              "link":"https://www.drivethrucards.com/product/339253",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":5
            },
        
            {
              "name":"Melinda Galbraith",
              "id":"200971",
              "link":"https://www.drivethrucards.com/product/339254",
              "type":['Vampire'],
              "clan":['Toreador antitribu'],
              "twda":1
            },
        
            {
              "name":"Michael diCarlo",
              "id":"200981",
              "link":"https://www.drivethrucards.com/product/297342",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":13
            },
        
            {
              "name":"Montano",
              "id":"201006",
              "link":"https://www.drivethrucards.com/product/339255",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":50
            },
        
            {
              "name":"Monty Coven",
              "id":"201008",
              "link":"https://www.drivethrucards.com/product/297370",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Nahir",
              "id":"201030",
              "link":"https://www.drivethrucards.com/product/339256",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":6
            },
        
            {
              "name":"Nakhthorheb",
              "id":"201033",
              "link":"https://www.drivethrucards.com/product/339257",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":92
            },
        
            {
              "name":"Nefertiti",
              "id":"201042",
              "link":"https://www.drivethrucards.com/product/339258",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":50
            },
        
            {
              "name":"Neferu",
              "id":"201043",
              "link":"https://www.drivethrucards.com/product/339260",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":28
            },
        
            {
              "name":"Nehsi",
              "id":"201045",
              "link":"https://www.drivethrucards.com/product/339261",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":13
            },
        
            {
              "name":"Nepata",
              "id":"201047",
              "link":"https://www.drivethrucards.com/product/339262",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":27
            },
        
            {
              "name":"Nizzam al-Latif",
              "id":"201062",
              "link":"https://www.drivethrucards.com/product/297349",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":12
            },
        
            {
              "name":"Nunzio Giovanni",
              "id":"201068",
              "link":"https://www.drivethrucards.com/product/339263",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":6
            },
        
            {
              "name":"Ogwon",
              "id":"201072",
              "link":"https://www.drivethrucards.com/product/339264",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":12
            },
        
            {
              "name":"Olugbenga",
              "id":"201078",
              "link":"https://www.drivethrucards.com/product/297363",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":22
            },
        
            {
              "name":"Onaedo",
              "id":"201082",
              "link":"https://www.drivethrucards.com/product/339265",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":76
            },
        
            {
              "name":"Otieno",
              "id":"201086",
              "link":"https://www.drivethrucards.com/product/339266",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":9
            },
        
            {
              "name":"Paolo Sardenzo",
              "id":"201092",
              "link":"https://www.drivethrucards.com/product/339267",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":1
            },
        
            {
              "name":"Parmenides",
              "id":"201095",
              "link":"https://www.drivethrucards.com/product/297356",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":22
            },
        
            {
              "name":"Parnassus",
              "id":"201096",
              "link":"https://www.drivethrucards.com/product/297327",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":10
            },
        
            {
              "name":"Patrizia Giovanni, Collector of Secrets",
              "id":"201098",
              "link":"https://www.drivethrucards.com/product/339268",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":1
            },
        
            {
              "name":"Paul DiCarlo, The Alpha",
              "id":"201101",
              "link":"https://www.drivethrucards.com/product/339269",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":52
            },
        
            {
              "name":"Paulo de Castille",
              "id":"201104",
              "link":"https://www.drivethrucards.com/product/339270",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":6
            },
        
            {
              "name":"Pentweret",
              "id":"201109",
              "link":"https://www.drivethrucards.com/product/339271",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":17
            },
        
            {
              "name":"Pochtli",
              "id":"201127",
              "link":"https://www.drivethrucards.com/product/339273",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":17
            },
        
            {
              "name":"Porphyrion",
              "id":"201129",
              "link":"https://www.drivethrucards.com/product/339274",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":26
            },
        
            {
              "name":"Primo Giovanni",
              "id":"201134",
              "link":"https://www.drivethrucards.com/product/339275",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":25
            },
        
            {
              "name":"Qadir ul-Ghani",
              "id":"201137",
              "link":"https://www.drivethrucards.com/product/297378",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":4
            },
        
            {
              "name":"Qufur am-Heru",
              "id":"201143",
              "link":"https://www.drivethrucards.com/product/339276",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":18
            },
        
            {
              "name":"Rafaele Giovanni",
              "id":"201152",
              "link":"https://www.drivethrucards.com/product/339277",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":16
            },
        
            {
              "name":"Ramiro",
              "id":"201157",
              "link":"https://www.drivethrucards.com/product/339278",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":32
            },
        
            {
              "name":"Raphaela Giovanni",
              "id":"201165",
              "link":"https://www.drivethrucards.com/product/339279",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":30
            },
        
            {
              "name":"Regina Giovanni, The Right Hand of Augustus",
              "id":"201175",
              "link":"https://www.drivethrucards.com/product/339280",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":17
            },
        
            {
              "name":"Renenet",
              "id":"201179",
              "link":"https://www.drivethrucards.com/product/339281",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":34
            },
        
            {
              "name":"Reverend Djoser Jones",
              "id":"201183",
              "link":"https://www.drivethrucards.com/product/339282",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":5
            },
        
            {
              "name":"Reza Fatir, The Dark Angel",
              "id":"201185",
              "link":"https://www.drivethrucards.com/product/297335",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":17
            },
        
            {
              "name":"Rudolfo Giovanni",
              "id":"201209",
              "link":"https://www.drivethrucards.com/product/339283",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":121
            },
        
            {
              "name":"Sahira Siraj",
              "id":"201221",
              "link":"https://www.drivethrucards.com/product/339284",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":7
            },
        
            {
              "name":"Sajid al Misbah",
              "id":"201223",
              "link":"https://www.drivethrucards.com/product/297371",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":8
            },
        
            {
              "name":"Samat Ramal-Ra, Archon",
              "id":"201229",
              "link":"https://www.drivethrucards.com/product/339285",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":9
            },
        
            {
              "name":"Saqqaf, Keeper of the Grand Temple of Set",
              "id":"201236",
              "link":"https://www.drivethrucards.com/product/339286",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":7
            },
        
            {
              "name":"Sarrasine",
              "id":"201242",
              "link":"https://www.drivethrucards.com/product/339287",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":31
            },
        
            {
              "name":"Sarrasine",
              "id":"201243",
              "link":"https://www.drivethrucards.com/product/339288",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":12
            },
        
            {
              "name":"Saul Meira",
              "id":"201247",
              "link":"https://www.drivethrucards.com/product/339289",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":12
            },
        
            {
              "name":"Seren Sukardi",
              "id":"201265",
              "link":"https://www.drivethrucards.com/product/339290",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":1
            },
        
            {
              "name":"Seterpenre",
              "id":"201269",
              "link":"https://www.drivethrucards.com/product/339291",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":12
            },
        
            {
              "name":"Shemti",
              "id":"201282",
              "link":"https://www.drivethrucards.com/product/339292",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":23
            },
        
            {
              "name":"Silvia Giovanni",
              "id":"201288",
              "link":"https://www.drivethrucards.com/product/339293",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":8
            },
        
            {
              "name":"Sir Marriot D'Urban",
              "id":"201290",
              "link":"https://www.drivethrucards.com/product/339294",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":27
            },
        
            {
              "name":"Sisocharis",
              "id":"201293",
              "link":"https://www.drivethrucards.com/product/339295",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":8
            },
        
            {
              "name":"Stefano Giovanni",
              "id":"201314",
              "link":"https://www.drivethrucards.com/product/339296",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":21
            },
        
            {
              "name":"Stephen Milliner",
              "id":"201316",
              "link":"https://www.drivethrucards.com/product/339297",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":4
            },
        
            {
              "name":"Sukainah",
              "id":"201323",
              "link":"https://www.drivethrucards.com/product/297343",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":7
            },
        
            {
              "name":"Sundervere, The Devil Brahmin",
              "id":"201324",
              "link":"https://www.drivethrucards.com/product/339298",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":6
            },
        
            {
              "name":"Sutekh, The Dark God",
              "id":"201327",
              "link":"https://www.drivethrucards.com/product/339299",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":10
            },
        
            {
              "name":"Tabitha Fisk",
              "id":"201335",
              "link":"https://www.drivethrucards.com/product/339300",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":2
            },
        
            {
              "name":"Talley, The Hound",
              "id":"201337",
              "link":"https://www.drivethrucards.com/product/339301",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":16
            },
        
            {
              "name":"Tansu Bekir",
              "id":"201340",
              "link":"https://www.drivethrucards.com/product/297357",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":22
            },
        
            {
              "name":"Tariq, The Silent",
              "id":"201344",
              "link":"https://www.drivethrucards.com/product/297350",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":39
            },
        
            {
              "name":"Tariq, The Silent",
              "id":"201345",
              "link":"https://www.drivethrucards.com/product/297364",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":5
            },
        
            {
              "name":"Tegyrius, Vizier",
              "id":"201352",
              "link":"https://www.drivethrucards.com/product/297328",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":16
            },
        
            {
              "name":"Tegyrius, Vizier",
              "id":"201353",
              "link":"https://www.drivethrucards.com/product/297336",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Thetmes, Caliph of Alamut",
              "id":"201365",
              "link":"https://www.drivethrucards.com/product/297379",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":14
            },
        
            {
              "name":"Thomasso Ghiberti",
              "id":"201369",
              "link":"https://www.drivethrucards.com/product/339302",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":17
            },
        
            {
              "name":"Thucimia",
              "id":"201370",
              "link":"https://www.drivethrucards.com/product/297344",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":28
            },
        
            {
              "name":"Tobias Smith",
              "id":"201375",
              "link":"https://www.drivethrucards.com/product/339303",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":33
            },
        
            {
              "name":"Ur-Shulgi, The Shepherd",
              "id":"201413",
              "link":"https://www.drivethrucards.com/product/297372",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":10
            },
        
            {
              "name":"Vardar Vardarian",
              "id":"201426",
              "link":"https://www.drivethrucards.com/product/297358",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":24
            },
        
            {
              "name":"Virginie, Prodigy",
              "id":"201452",
              "link":"https://www.drivethrucards.com/product/339304",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":37
            },
        
            {
              "name":"Vittorio Giovanni",
              "id":"201455",
              "link":"https://www.drivethrucards.com/product/339305",
              "type":['Vampire'],
              "clan":['Giovanni'],
              "twda":9
            },
        
            {
              "name":"Yazid Tamari",
              "id":"201485",
              "link":"https://www.drivethrucards.com/product/297329",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":12
            },
        
            {
              "name":"Yazid Tamari",
              "id":"201486",
              "link":"https://www.drivethrucards.com/product/297337",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":0
            },
        
            {
              "name":"Yusuf, Scribe of Alamut",
              "id":"201495",
              "link":"https://www.drivethrucards.com/product/297351",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":2
            },
        
            {
              "name":"Zahir, Hand of the Silsila",
              "id":"201500",
              "link":"https://www.drivethrucards.com/product/297365",
              "type":['Vampire'],
              "clan":['Assamite'],
              "twda":3
            },
        
            {
              "name":"Zhenga",
              "id":"201506",
              "link":"https://www.drivethrucards.com/product/339306",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":9
            },
        
            {
              "name":"Charles Delmare",
              "id":"201513",
              "link":"https://www.drivethrucards.com/product/339187",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":7
            },
        
            {
              "name":"Lord Leopold Valdemar",
              "id":"201517",
              "link":"https://www.drivethrucards.com/product/339239",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":6
            },
        
            {
              "name":"Percival",
              "id":"201518",
              "link":"https://www.drivethrucards.com/product/339272",
              "type":['Vampire'],
              "clan":['Lasombra'],
              "twda":6
            },
        
            {
              "name":"Nefertiti",
              "id":"201520",
              "link":"https://www.drivethrucards.com/product/339259",
              "type":['Vampire'],
              "clan":['Follower of Set'],
              "twda":5
            },
        ];