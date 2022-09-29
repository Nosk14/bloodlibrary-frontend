var proxyList = [];
var cutLineColor = localStorage.getItem("cutLineColor") ?? "#FFFFFF"

function generatePDF(){
	if ( proxyList.length == 0) {
		return;
	}
	disableButton()
	rqBody = {
	    'lineColor': cutLineColor,
	    'cards': proxyList
	}
	fetch('https://api.bloodlibrary.info/proxy/generate', {
		method: 'POST',
		body: JSON.stringify(rqBody)
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

function addCard(card_name, card_id, sets) {
	if (proxyList.find( item => item.id == card_id)) {
		return;
	}

	var card_image = '<div class="auspex"><img class="auspex-icon" src="https://vtesdecks.com/assets/img/icons/icondisauspex.gif"></img><img id="image-'+card_id+'" class="card-img" src="'+sets[0].image+'" alt=""/></div>';
	var name = card_name;
	var amount = '<input id="amount-'+card_id+'" class="form-control mr-sm-2" type="number" max="50" min="1" value="1" onchange="updateAmount(this.value, '+card_id+')"></input>';
	var delete_button = '<button type="button" class="btn btn-danger" onclick="removeCard('+card_id+')">X</button>';
	var set_selector = '<select class="form-control" id="sets-'+card_id+'" onChange="updateCardImage(this.options[this.selectedIndex].dataset.image,'+card_id+',this.options[this.selectedIndex].value)">';
	sets.forEach(s => {
	    set_selector += '<option value="'+s.set_id+'" data-image="'+s.image+'">'+s.set_name+'</option>'
	});
	set_selector += '</select>'

	$('#card-list > tbody:last-child').append('<tr id="row-'+card_id+'"><td>'+ card_image+ '</td><td>'+ name+ '</td><td>'+ amount + '</td><td>'+ set_selector + '</td><td>'+ delete_button + '</td></tr>');
	proxyList.push({'id': card_id, 'amount': 1, 'set': sets[0].set_id});
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
					addCard(r.name, r.id, r.sets);
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
		    filtered_sets = cardData[0].publish_sets.filter(zet  => zet.image).sort(function (a,b) {return a.set_id - b.set_id}).reverse();
			return {id: cardData[0].id, name: cardData[0].name, amount: numberOfCopies, sets: filtered_sets};
		}else{
			console.log("No data found for: " + expectedCardName);
			return undefined;
		}
}

function updateCardImage(new_image, card_id, set_id){
    $('#image-'+card_id)[0].src = new_image
    i = proxyList.findIndex((obj => obj.id == card_id));
    proxyList[i].set = set_id;
}

function setCutLineColor(color) {
    localStorage.setItem("cutLineColor", color)
    cutLineColor = color
}

