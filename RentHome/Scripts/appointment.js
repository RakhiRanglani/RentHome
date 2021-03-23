
$(document).ready(function () {
    var flag = false;
    $('#btnsubmit').click(function () {
        flag = validateForm(false);
        if (flag) {
            document.location.href = '/HtmlFile/Thankyou.html';
        }
    });
    $('#btnback').click(function () {
        document.location.href = '/HtmlFile/Homepage.html';
    });
    $('#btnreset').click(function () {
        $('#first').val(' ');
        $('#last').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#ddlmessage').val('');
        $('#phone').val('');
        $('#ddldate').val(' ');
    });
    

});
function validateForm(flag) {

    var name = document.getElementById('first').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    } else {
        document.querySelector('.status').innerHTML = "";
        flag = true;

    }

    var lastname = document.getElementById('last').value;
    if (lastname == "") {
        document.querySelector('.status').innerHTML = "Last Name cannot be empty";
        return false;
    } else {
        document.querySelector('.status').innerHTML = "";
        flag = true;

    }

    var email = document.getElementById('email').value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else if (!re.test(email)) {
        document.querySelector('.status').innerHTML = "Email Id is not in correct format";
        return false;
    } else {

        flag = true;

    }



    var phone = document.getElementById('phone').value;
    var filter = /[1-9]{1}[0-9]{9}/;
    if (phone == "") {
        document.querySelector('.status').innerHTML = "Phone Number cannot be empty";
        return false;
    }
    if (phone.length == 10) {

        flag = true;

    } else {
        document.querySelector('.status').innerHTML = "Please enter 10 digit valid phone number";
        return false;
    }

    return flag;
}
