$(document).ready(function () {
    var rowindex = getParameterByName('param');
    propertyDetailList(rowindex);
});
// To get the parameter value
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function propertyDetailList(rowindex) {
    // Call Web API to get a list of Properties
    $.ajax({
        url: '/api/Property/GetPropertyDetails',
        type: 'GET',
        dataType: 'json',
        success: function (item) {

            $.each(item, function (index, property) {
                if (rowindex == item[index].rowindex) {
                    //create crousal content
                    createcrousalcontent(item[index])
                }
            });
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function createcrousalcontent(item) {
    
    $('<div class="item"><img class="imglist" src="' + item.img1 + '"><div class="carousel-caption"></div> </div>').appendTo('.carousel-inner');
    $('<div class="item"><img class="imglist" src="' + item.img2 + '"><div class="carousel-caption"></div> </div>').appendTo('.carousel-inner');
    $('<div class="item"><img class="imglist" src="' + item.img3 + '"><div class="carousel-caption"></div> </div>').appendTo('.carousel-inner');
    $('<li data-target="#myCarousel" data-slide-to="' + 0 + '"></li>').appendTo('.carousel-indicators')
    $('<li data-target="#myCarousel" data-slide-to="' + 1 + '"></li>').appendTo('.carousel-indicators')
    $('<li data-target="#myCarousel" data-slide-to="' + 2 + '"></li>').appendTo('.carousel-indicators')
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#myCarousel').carousel();
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