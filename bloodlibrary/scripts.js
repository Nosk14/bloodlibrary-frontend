var proxyList = [];

function generatePDF(){
	if ( proxyList.length == 0) {
		return;
	}
	disableButton()
	fetch('https://api.bloodlibrary.info/proxy/generate', {
		method: 'POST',
		body: JSON.stringify(proxyList)
	})
    .then(async res => ({
        filename: 'vtes_proxies.pdf',
        blob: await res.blob()
    }))
    .then(resObj => {
        const newBlob = new Blob([resObj.blob], { type: 'application/pdf' });
		const objUrl = window.URL.createObjectURL(newBlob);
		window.open(objUrl,'_blank');
		enableButton();
    })
    .catch((error) => {
        console.log('DOWNLOAD ERROR', error);
		enableButton();
    });
}

function clearCardList(){
	proxyList = [];
	$("#card-list tbody tr").remove(); 
}

function disableButton(){
        var button = document.getElementById("generate");
        button.classList.add("disabled")
        button.innerHTML = "Generating..."
}

function enableButton(){
        var button = document.getElementById("generate");
        button.classList.remove("disabled")
        button.innerHTML = "Generate PDF"
}

function handleSelectCard(value){
	console.log(value);
}

function addCard(card_name, card_id) {
	var card_image = '<img class="auspex" src="https://vtesdecks.com/img/icons/icondisauspex.gif"></img>';
	var name = card_name;
	var amount = '<input id="amount-'+card_id+'" class="form-control mr-sm-2" type="number" max="50" min="1" value="1" onchange="updateAmount(this.value, '+card_id+')"></input>'
	var delete_button = 'X';
	
	$('#card-list > tbody:last-child').append('<tr><td>'+ card_image+ '</td><td>'+ name+ '</td><td>'+ amount + '</td><td>'+ delete_button + '</td></tr>');
	proxyList.push({'id': card_id, 'amount': 1});
}

function updateAmount(new_value, card_id) {
	proxyList.find( item => item.id == card_id).amount = parseInt(new_value); 
}