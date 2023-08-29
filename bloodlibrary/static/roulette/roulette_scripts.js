function spinButtonClicked(){
    disableSpinButton();
    getRandomDeck()
    .then(res => {enableSpinButton()});
}

function disableSpinButton(){
    $('#spin-button').attr("disabled", true)
    $('#spin-button > span').show()
}

function enableSpinButton(){
    $('#spin-button').attr("disabled", false)
    $('#spin-button > span').hide()
}

function getRandomDeck(){
    params = "";
    countryCode = $("#country")[0].value;
    if (countryCode) {
        params = "?" + new URLSearchParams({
            country: countryCode,
        });
    }
    return fetch('https://api.bloodlibrary.info/decks/random' + params, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => updateDeckInfo(data[0].name, data[0].year, data[0].vtesdecks_id));
}

function updateDeckInfo(title, year, vtesdecks_id) {
    $("#deck-info > h2").text(title + " ("+year+")");
    $("#view-decklist").on("click", function(){ window.open('https://vtesdecks.com/deck/' + vtesdecks_id) });
    $("#download-decklist").on("click", function(){ window.open(window.location.origin + '/deck/export?id=' + vtesdecks_id) });
}
