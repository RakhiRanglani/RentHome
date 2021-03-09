$(document).ready(function () {
    propertyList();

});

// Get all property to display
function propertyList() {
    // Call Web API to get a list of Properties
    $.ajax({
        url: '/api/Property/',
        type: 'GET',
        dataType: 'json',
        success: function (item) {
            propertyListSuccess(item);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

// Display all Property returned from Web API call
function propertyListSuccess(item) {
    // Iterate over the collection of data
    $.each(item, function (index, property) {
        // Add a row to the Property table
        propertyAddRow(property);
       
    });
}

// Add Property row to <table>
function propertyAddRow(item) {
    // First check if a <tbody> tag exists, add one if not
    if ($("#propertyTable tbody").length == 0) {
        $("#propertyTable").append("<tbody></tbody>");
    }

    // Append row to <table>
    $("#propertyTable tbody").append(
        propertyBuildTableRow(item));
}

// Build a <tr> for a row of table data
function propertyBuildTableRow(item) {
  
    var imageitem = '<a href="' + item.image + '"><img id="mapfile-image" class="imglist" src="' + item.image + '"/></a>';
    var ret = "<tr>" +
        "<td>" + imageitem + "</td>" +
        "<td>" + item.properttype + "</td>" +
        "<td>" + item.propertystatus + "</td>" +
        "<td>" + item.area + "</td>" +
        "<td>" + item.price + "</td>" +
        "</tr>";
   
    return ret;
}

function applysortingontable() {

}

// Handle click event on Update button
function updateClick() {
}

// Handle click event on Add button
function addClick() {
}

// Handle exceptions from AJAX calls
function handleException(request, message, error) {
    var msg = "";

    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
        msg += "Message" + request.responseJSON.Message + "\n";
    }

    alert(msg);
}