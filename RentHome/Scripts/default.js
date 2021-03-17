$(document).ready(function () {
    $("#getintouch").on("click", function (e) {

        e.preventDefault();
        $("html, body").scrollTop($("#inquiryarea").offset().top);

    });
    $('#btnsubmit').click(function () {
        location.reload();
    });
});