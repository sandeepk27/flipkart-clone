$("#loginButton").click(function() {
    login()
})

function login() {
    var username = $("#username").val()
    var password = $("#pwd").val()

    if (username == "" || password == "") {
        alert("Please fill all the Fields !")
        return
    }

    var userLogin = {}
    userLogin.username = username;
    userLogin.password = password;
    userLogin = JSON.stringify(userLogin)

    var loginResponse = null
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(userLogin)
    xhr.onload = function() {
        if (xhr.status == 200) { //if the login is success
            loginResponse = JSON.parse(xhr.response)
            display(loginResponse)
        } else {
            console.log(xhr.response) //displaying the alert for incorrect username or password and resetting the fields
            alert("Invalid user credentials!")
            $("#username").val('')
            $("#pwd").val('')
        }
    }
}

function display(result) {
    var token = result.token
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8080/user/' + document.getElementById('username').value)
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.send()
    xhr.onload = function() {
        if (xhr.status == 200) {
            var profileData = JSON.parse(xhr.response)
            printData(profileData) ///printData function is being called here
        } else {
            console.log("Error code is:" + xhr.status)
        }
    }
}

//Display the userprofile(name) after successfull login
function printData(data) {
    $("#exampleModalCenter").modal('hide')
    $("#hidelogin").hide()
    var alertcont = "Welcome " + data['username'] + ".." + " You are logged in!"
    alert(alertcont)
    $("#dispUser").text(data['username'].toUpperCase())
}