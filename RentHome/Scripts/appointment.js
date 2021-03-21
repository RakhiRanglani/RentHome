
$(document).ready(function () {

    $('#btnsubmit').click(function () {
        validateForm();
    });
});
function validateForm() {

    debugger;
    var name = document.getElementById('first').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    } else {
        document.querySelector('.status').innerHTML = "";
    }

    var lastname = document.getElementById('last').value;
    if (lastname == "") {
        document.querySelector('.status').innerHTML = "Last Name cannot be empty";
        return false;
    } else {
        document.querySelector('.status').innerHTML = "";
    }

    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var phone = document.getElementById('phone').value;
    var phone = /^\d{10}$/;
    if (phone == "") {
        document.querySelector('.status').innerHTML = "Phone Number cannot be empty";
        return false;
    }
    else (phone.match(phoneno))
    {
        document.querySelector('.status').innerHTML = "Please enter 10 digit valid phone number";
        return false;
    }

    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    } else {
        document.querySelector('.status').innerHTML = "";
    }

    {
        document.querySelector('.status').innerHTML = "Sending...";
    }

}