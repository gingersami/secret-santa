
var sendEventToServer = function (name){
    $.ajax({
        method: "POST",
        url: "/createEvent",
        data:{
            name:name
        },
        success: function(){
            alert("Event created successfully! sending you to events page")
          window.location = '/hthth.html'
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });
}
$("#create-button").on("click", function(){
    let name=$("#textvalue").val();
    sendEventToServer(name);
});