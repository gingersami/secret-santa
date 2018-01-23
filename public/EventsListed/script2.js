
var events=[]; 
var anchor = $(".row")
var getEventsFromServer = function () {
    $.ajax({
      method: "GET",
      url: "/",
      success: function(data) {
        events = data;
        _renderEvents()
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };

  function _renderEvents() {
    var source = $('#event-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < events.length; i++) {
      var newHTML = template(events[i]);
      anchor.append(newHTML);
    }
  }