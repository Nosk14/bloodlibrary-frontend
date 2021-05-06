function generatePDF(){

        let text = document.getElementById("card-list").value;
        if (!text.trim()) { return }
        disableButton()
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                //document.getElementById("download").src = 'https://api.bloodlibrary.info/proxy/download/' + JSON.parse(this.response)['id'] + '.pdf'
                download('https://api.bloodlibrary.info/proxy/download/' + JSON.parse(this.response)['id'])
        }
        };
        xhttp.open('POST', 'https://api.bloodlibrary.info/proxy/generate', true);
        xhttp.send(text)
}

function download(url) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', url);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

        enableButton()
}

function disableButton(){
        let button = document.getElementById("generate");
        button.classList.add("disabled")
        button.innerHTML = "Generating..."
}

function enableButton(){
        let button = document.getElementById("generate");
        button.classList.remove("disabled")
        button.innerHTML = "Generate PDF"
}

function handleSelectCard(value){
	console.log(value);
}

function addCard(card_name, card_id) {
	var table = document.getElementById("card-list");
	var row = table.insertRow(-1);
	
	var cell_image = row.insertCell(0);
	cell_image.innerHTML = '<img class="auspex" src="https://vtesdecks.com/img/icons/icondisauspex.gif"></img>';
	
	var cell_name = row.insertCell(1);
	cell_name.innerHTML = card_name;
	
	var cell_amount = row.insertCell(2);
	cell_amount.innerHTML = '<input class="form-control mr-sm-2" type="number" max="50" min="1" value="1"></input>'
	
	var cell_delete = row.insertCell(3);
	cell_delete.innerHTML = 'X';
	
}