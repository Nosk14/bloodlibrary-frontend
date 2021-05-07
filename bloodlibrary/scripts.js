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
	if (proxyList.find( item => item.id == card_id)) {
		return;
	}
	
	var card_image = '<div class="auspex"><img class="auspex-icon" src="https://vtesdecks.com/img/icons/icondisauspex.gif"></img><img class="card-img" src="https://statics.bloodlibrary.info/img/all/'+card_id+'.jpg" alt=""/></div>';
	var name = card_name;
	var amount = '<input id="amount-'+card_id+'" class="form-control mr-sm-2" type="number" max="50" min="1" value="1" onchange="updateAmount(this.value, '+card_id+')"></input>'
	var delete_button = '<button type="button" class="btn btn-danger" onclick="removeCard('+card_id+')">X</button>';
	
	$('#card-list > tbody:last-child').append('<tr id="row-'+card_id+'"><td>'+ card_image+ '</td><td>'+ name+ '</td><td>'+ amount + '</td><td>'+ delete_button + '</td></tr>');
	proxyList.push({'id': card_id, 'amount': 1});
}

function updateAmount(new_value, card_id) {
	proxyList.find( item => item.id == card_id).amount = parseInt(new_value); 
}

function removeCard(card_id) {
	var value = proxyList.find( item => item.id == card_id);
	var index = proxyList.indexOf(value);
	proxyList.splice(index, 1);
	$("#row-"+card_id).remove();
}

function loadCardsFromFile(e){
	if(e.files.length < 1) {
		return;
	}
	var file = e.files[0];
	if(file.type != "text/plain") {
		return;
	}
	
	var reader = new FileReader();
	reader.onload = function(progressEvent) {
		var lines = this.result.split('\n');
		var cardPromises = [];
		
		for(const line of lines){
			var trimmedLine = line.trim();
			if (trimmedLine && trimmedLine.match(/^\d/)) {
				cardPromises.push(handleLine(trimmedLine));
			}
		}
		
		Promise.all(cardPromises)
		.then( results => { 
			for(const r of results) {
				if(r) {
					addCard(r.name, r.id);
					$("#amount-"+r.id).val(r.amount);
					updateAmount(r.amount, r.id);
				}

			}
		});
	};
	reader.readAsText(file);
}

async function handleLine(line) {
		var parts = line.split("\t");
		var numberOfCopies = parseInt(parts[0].trim());
		var expectedCardName = parts[1].trim();
		
		var cardData = await $.get('https://api.bloodlibrary.info/api/search', {name: expectedCardName}, {crossDomain: true} );
		
		if(cardData){
			return {id: cardData[0].id, name: cardData[0].name, amount: numberOfCopies};
		}else{
			console.log("No data found for: " + expectedCardName);
			return undefined;
		}
}

