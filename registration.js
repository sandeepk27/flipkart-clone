function register(display) {
    var name = $("#name").val()
    var email = $("#email").val()
    var password = $("#pwd").val()
    var username = $("#username").val()
    var mobile = $("#mobile").val()
    var description = $("#description").val()

    if (name == "" || email == "" || password == "" || username == "" || mobile == "" || description == "") {
        alert("Please fill all the fields !")
        return
    }

    var userObj = {
        name: name,
        email: email,
        password: password,
        username: username,
        mobile: mobile,
        description: description,
    }

    userObj = JSON.stringify(userObj)

    var result = null;
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:8080/auth/register')

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(userObj)

    xhr.onload = function() {
        if (xhr.status == 200) {
            result = JSON.parse(xhr.response)
            display(result)
        } else {
            console.log('Error code id:' + xhr.status)
        }
    }

    xhr.onerror = function() {
        console.log("Error in HTTP Request!")
    }

}

var printOut = function(output) {

    if (output['message' === 'Registration Success']) {
        alert("Registration Success")
        window.location = "flipkart.html"
    } else {
        alert("You have already registered.Proceed to login!")
        window.location = "flipkart.html"
    }
}

$("#subButton").click(function() {
    register(printOut)

    //Reset Fields// 
    $("#name").val("")
    $("#email").val("")
    $("#pwd").val("")
    $("#username").val("")
    $("#mobile").val("")
    $("#description").val("")
})