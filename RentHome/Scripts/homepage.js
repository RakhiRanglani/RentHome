$(document).ready(function () {
    propertyList();
    applysortingontable();
    $('#propertyTable').on('click', '.clickable-row', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
        var rowidex = this.rowIndex;
        // passing the parameter in the url so that we can load different data for different property
        document.location.href = '/HtmlFile/PropertyDetail.html'+'?param=' + rowidex
     
    });
   
});

// Get all property to display
function propertyList() {
    // Call Web API to get a list of Properties
    $.ajax({
        url: '/api/Property/GetProperty',
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
        $("#propertyTable").append("<tbody id='fbody'></tbody>");
    }

    // Append row to <table>
    $("#propertyTable tbody").append(
        propertyBuildTableRow(item));
}

// Build a <tr> for a row of table data
function propertyBuildTableRow(item) {

    var imageitem = '<a href="' + item.image + '"><img id="mapfile-image" class="imglist" src="' + item.image + '"/></a>';
    var ret = "<tr class='clickable-row'>" +
        "<td>" + imageitem + "</td>" +
        "<td>" + item.properttype + "</td>" +
        "<td>" + item.propertystatus + "</td>" +
        "<td>" + item.area + "</td>" +
        "<td>" + item.price + "</td>" +
        "</tr>";

    return ret;
}
// Apply filter condition on the columns

function applysortingontable() {
    $("#myInput").keyup(function () {
        //split the current value of searchInput
        var data = this.value.split(" ");
        //create a jquery object of the rows
        var jo = $("#fbody").find("tr");
        if (this.value == "") {
            jo.show();
            return;
        }
        //hide all the rows
        jo.hide();

        //Recusively filter the jquery object to get results.
        jo.filter(function (i, v) {
            var $t = $(this);
            for (var d = 0; d < data.length; ++d) {
                if ($t.text().toLowerCase().indexOf(data[d].toLowerCase()) > -1) {
                    return true;
                }
            }
            return false;
        })
            //show the rows that match.
            .show();
    }).focus(function () {
        this.value = "";
        $(this).css({
            "color": "black"
        });
        $(this).unbind('focus');
    }).css({
        "color": "#C0C0C0"
    });
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