
var peeps = [];

var getUsersFromServer = function () {
    $.ajax({
      method: "GET",
      url: "/getUser",
      success: function(users) {
          console.log(users)
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
      var newHTML = template(peeps[i]);
      $('#anchor').append(newHTML);
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
            contentType: 'application/json',
            dataType: 'text',
            data: user,
            success: function(data){
                console.log(data)
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(textStatus);
            }
          });
          return false
}
function loooooooopy(){
    for (let i=0; i<peeps.length;i++){
        let user = JSON.stringify(peeps[i]);
        postUpdatedMatchedUsers(user)
        // console.log(peeps[i]);
    }
}

$("#cb").on("click", loooooooopy)
