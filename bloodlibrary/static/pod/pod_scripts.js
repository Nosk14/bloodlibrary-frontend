var icons = {
    'Vampire': "https://static.wikia.nocookie.net/whitewolf/images/6/60/LogoVTES.png",
    'Master': "/static/img/iconmaster.gif",
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
    'Daughter of Cacophony': "https://static.krcg.org/clan/daughtersofcacophony.svg",

    'Striga': "https://static.krcg.org/svg/disc/inf/str.svg",
    'Maleficia': "https://static.krcg.org/svg/disc/inf/mal.svg",
};

var affiliate_param = '?affiliate_id=2900918';

var full_star_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
var empty_star_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';

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
        getIconTag("/static/img/iconnodisc.gif", "No Discipline", "No Discipline", 'cardDisciplines', '')
    );

    cardDisciplines.sort();
    for (discipline of cardDisciplines.slice(1)) {
        let iconSrc = `https://vtesdecks.com/assets/img/icons/icondis${discipline.toLowerCase()}.gif`
        if(discipline in icons){
            iconSrc = icons[discipline]
        }
        $('#discipline-filter').append(
            getIconTag(iconSrc, discipline, discipline, 'cardDisciplines', discipline)
        );
    }

    $('#clan-filter').append(
        getIconTag("/static/img/iconnoclan.gif", "No clan", "No clan", 'cardClans', '')
    );

    cardClans.sort();
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
            $('#'+self.parentElement.id+' .alert').hide();
        }
    } else {
        let index = criteriaList.indexOf(element);
        if (index > -1 ) {
            criteriaList.splice(index, 1);
            if(criteriaList.length == 0) {
                $('#'+self.parentElement.id+' .alert').show();
            }
        }
    }
    self.classList.toggle("icon-disabled");
    applyFilters();
}

function addCards(cardList) {
    for (c of cards) {
        $('#card-list').append(
            `<div id="${c.id}" class="vtes-card" data-release='${c.release_date}' data-name="${c.name}" data-cardtype='${c.type[0]}' data-favorite='2000-01-01'>
                    <table><tbody>
                        <tr><td>
                            <a href="${c.link}${affiliate_param}" target="_blank"><img class="pod-image" src="https://statics.bloodlibrary.info/img/sets/pod/${c.id}.jpg"/></a>
                        </td></tr>
                        <tr><td class="vtes-card-name red-text">
                            <a class="favorite-icon" onclick="toggleFavorite(this,${c.id})" >${localStorage.getItem(c.id) === null ? empty_star_icon : full_star_icon}</a> <a href="${c.link}${affiliate_param}" target="_blank">${c.name}</a>
                        </td></tr>
                    </tbody></table>
            </div>`
        );
    }
}

function applyFilters(){
    let hidden_cards = 0;
    for(c of cards) {
        if (containsAny(c.type, cardTypes)
            && containsAny(c.clan, cardClans)
            && containsAny(c.disciplines, cardDisciplines)) {
            $(`#${c.id}`).show();
        }else{
            $(`#${c.id}`).hide();
            hidden_cards++;
        }
    }
    if (hidden_cards == cards.length){
        $('#card-list .alert').show();
    }else{
        $('#card-list .alert').hide();
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

function sortCardsByCardType(){
    $('#card-list').find(".vtes-card").sort(function(a,b) {
        return b.dataset.cardtype.localeCompare(a.dataset.cardtype);
    })
    .appendTo('#card-list');
}

function sortCardsByFavorite(){
    $('#card-list').find(".vtes-card").sort(function(a,b) {
        a_value = localStorage.getItem(a.id);
        b_value = localStorage.getItem(b.id);

        if (a_value === b_value){ return 0; }
        if (a_value === null) { return 1;}
        if (b_value === null) { return -1;}
        return a_value < b_value ? 1 : -1;
    })
    .appendTo('#card-list');
}

function deselectAll(id){
    $(id).find('img').each(function () {
        if (!this.classList.contains("icon-disabled")){
            this.click();
        }
    });
    $(id+' .alert').show();
}

function selectAll(id){
    $(id).find('img').each(function () {
        if (this.classList.contains("icon-disabled")){
            this.click();
        }
    });
    $(id+' .alert').hide();
}

function toggleFavorite(self, card_id){
    if(localStorage.getItem(card_id) === null){
        localStorage.setItem(card_id, Date.now());
        self.innerHTML = full_star_icon;
    }else{
        localStorage.removeItem(card_id);
        self.innerHTML = empty_star_icon;
    }

}

function openAllFavoriteCards(){
    for (c of cards) {
        if (localStorage.getItem(c.id) !== null){
            let result = window.open(c.link+affiliate_param, '_blank');
            if (result === null){
                $('#open-tabs').append('<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Oops!</strong>Your browser blocked some of the opening tabs. Check your settings to fix it. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
                break;
            }
        }
    }
}