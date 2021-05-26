var icons = {
    'Vampire': "https://static.wikia.nocookie.net/whitewolf/images/6/60/LogoVTES.png",
    'Master': "https://www.vekn.net/images/stories/icons/disciplines/icondisobfuscate.gif",
    'Action': "https://www.vekn.net/images/stories/icons/cardtype/icontypeaction.gif",
    'Political Action': "https://www.vekn.net/images/stories/icons/cardtype/icontypepolitical.gif",
    'Equipment': "https://www.vekn.net/images/stories/icons/cardtype/icontypeequipment.gif",
    'Ally': "https://www.vekn.net/images/stories/icons/cardtype/icontypeally.gif",
    'Retainer': "https://www.vekn.net/images/stories/icons/cardtype/icontyperetainer.gif",
    'Power': "https://www.vekn.net/images/stories/icons/cardtype/icontypepower.gif",
    'Action Modifier': "https://www.vekn.net/images/stories/icons/cardtype/icontypemodifier.gif",
    'Reaction': "https://www.vekn.net/images/stories/icons/cardtype/icontypereaction.gif",
    'Combat': "https://www.vekn.net/images/stories/icons/cardtype/icontypecombat.gif",
    'Event': "https://www.vekn.net/images/stories/icons/cardtype/icontypeevent.gif",
    'Conviction': "https://www.vekn.net/images/stories/icons/cardtype/icontypeconviction.gif",

    'Harbinger of Skulls': "https://static.krcg.org/clan/harbingersofskulls.svg",
    'Follower of Set': "https://static.krcg.org/clan/followersofset.svg",
};


function containsAny(values, refList) {
    for (v of values) {
        if (refList.includes(v)) {
            return true;
        }
    }
    return false;
}

function addFilters() {
    for (cardType of cardTypes) {
        let iconSrc = icons[cardType];
        $('#cardtype-filter').append(
            getIconTag(iconSrc, cardType, cardType, 'cardTypes', cardType)
        );
    }

    $('#discipline-filter').append(
        getIconTag("https://www.vekn.net/images/stories/icons/disciplines/icondisobfuscate.gif", "No Discipline", "No Discipline", 'cardDisciplines', '')
    );
    for (discipline of cardDisciplines.slice(1)) {
        let iconSrc = `https://vtesdecks.com/img/icons/icondis${discipline.toLowerCase()}.gif`
        $('#discipline-filter').append(
            getIconTag(iconSrc, discipline, discipline, 'cardDisciplines', discipline)
        );
    }

    $('#clan-filter').append(
        getIconTag("https://www.vekn.net/images/stories/icons/disciplines/icondisobfuscate.gif", "No clan", "No clan", 'cardClans', '')
    );
    for (clan of cardClans.slice(1)) {
        if (clan in icons) {
            var icon_link = icons[clan];
        } else {
            let parsedClan = clan.replace(/\s/g, '').toLowerCase();
            var icon_link = `https://static.krcg.org/clan/${parsedClan}.svg`
        }

        $('#clan-filter').append(
            getIconTag(icon_link, clan, clan, 'cardClans', clan)
        );
    }
}

function getIconTag(src, alt, title, listName, element){
    return `<img class="filter-icon" src="${src}" alt="${alt}" title="${title}" onclick="toggleCriteria(this,${listName},'${element}')"></img>`;
}

function toggleCriteria(self, criteriaList, element){
    if (self.classList.contains("icon-disabled")){
        if (!criteriaList.includes(element)){
            criteriaList.push(element);
        }
    } else {
        let index = criteriaList.indexOf(element);
        if (index > -1 ) {
            criteriaList.splice(index, 1);
        }
    }
    self.classList.toggle("icon-disabled");
    applyFilters();
}

function addCards(cardList) {
    for (c of cards) {
        $('#card-list').append(
            `<div id="${c.id}" class="vtes-card" data-release='${c.release_date}' data-name="${c.name}"><a href="${c.link}?affiliate_id=2900918" target="_blank"><table><tbody><tr><td><img class="pod-image" src="https://statics.bloodlibrary.info/img/sets/pod/${c.id}.jpg"/></td></tr><tr><td class="vtes-card-name red-text">${c.name}</td></tr></tbody></table></a></div>`
        );
    }
}

function applyFilters(){
    for(c of cards) {
        if (containsAny(c.type, cardTypes)
            && containsAny(c.clan, cardClans)
            && containsAny(c.disciplines, cardDisciplines)) {
            $(`#${c.id}`).show();
        }else{
            $(`#${c.id}`).hide();
        }
    }
}

function sortCardsByName(){
    $('#card-list').find(".vtes-card").sort(function(a,b) {
        return a.dataset.name.localeCompare(b.dataset.name);
    })
    .appendTo('#card-list');
}

function sortCardsByReleaseDate(){
    $('#card-list').find(".vtes-card").sort(function(a,b) {
        return b.dataset.release.localeCompare(a.dataset.release);
    })
    .appendTo('#card-list');
}

function deselectAll(id){
    $(id).find('img').each(function () {
        if (!this.classList.contains("icon-disabled")){
            this.click();
        }
    });
}

function selectAll(id){
    $(id).find('img').each(function () {
        if (this.classList.contains("icon-disabled")){
            this.click();
        }
    });
}