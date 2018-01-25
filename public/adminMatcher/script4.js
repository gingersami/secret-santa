
var peeps = [];

var getUsersFromServer = function () {
    $.ajax({
      method: "GET",
      url: "/getUser",
      success: function(data) {
          console.log(data)
        peeps = users
        _renderUsers()
        sortUsers();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };

  function _renderUsers() {
    var source = $('#user-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < peeps.length; i++) {
      var newHTML = template(events[i]);
      anchor.append(newHTML);
    }
  }
const sortUsers = function(){
    for (let i=0; i<peeps.length;i++){
        let random = peeps[Math.floor(Math.random()*peeps.length)];
        if (random.status){
            peeps[i].status=false;
            peeps[i].pair = random;
        }
    }
}

getUsersFromServer();
const postUpdatedMatchedUsers = function(user){
        $.ajax({
            method: "POST",
            url: "/matchUser",
            data:{
                user
            },
            success: function(){
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(textStatus);
            }
          });
          return false
}

for (let i=0; i<peeps.length;i++){
    postUpdatedMatchedUsers(peeps[i])
}
