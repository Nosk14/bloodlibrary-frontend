function authenticate(){
    let formData = new FormData()
    formData.append('username', document.getElementById("user").value)
    formData.append('password', document.getElementById("password").value)

	fetch('http://api.vtesdecks.com/1.0/auth/login', {
		method: 'POST',
		body: formData,
		mode: 'no-cors', // no-cors, *cors, same-origin
	})
    .then((response) => response.json())
    .then((data) => console.log(data));
}