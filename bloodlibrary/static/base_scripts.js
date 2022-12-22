function setNavTabActive(componentId) {
    $("#"+componentId).addClass( 'active' );
}

function isAuthenticated(){
    let token = localStorage.getItem("auth_token");
    if(!token) return false;

    let raw_last_login = localStorage.getItem("last_login");
    if(!raw_last_login) return false;

    let last_login = Date.parse(raw_last_login)
    return Math.round((new Date() - last_login) / (3600 * 1000 * 24 )) < 30
}

function clearAuthData(){
    localStorage.removeItem("auth_token")
    localStorage.removeItem("display_name")
    localStorage.removeItem("avatar")
}

function refreshUserInfoPanel(){
    let content = "";
    if(isAuthenticated()){
        content = '<img class="avatar" src="' + localStorage.getItem("avatar") + '"width="30" height="30"></img> ' +
        localStorage.getItem("display_name") +
        '<br>' +
        '<a href="." onClick="clearAuthData()">Logout</a>';
    } else {
        content = '<a href="/login" >Login</a>';
    }

    document.getElementById("user-info").innerHTML = content;
}