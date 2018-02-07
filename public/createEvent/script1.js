$(document).ready(function(){
    var sendEventToServer = function (name) {
        $.ajax({
            method: "POST",
            url: "/createEvent",
            data: {
                name: name
            },
            success: function () {
                alert("Event created successfully! sending you to events page")
                window.location = '/events'
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
        return false
    }
    $(document).ready(function(){
    $("#create-button").on("click", function () {
        let name = '';
        name = $("#textvalue").val();
        sendEventToServer(name);
    });
})
})
