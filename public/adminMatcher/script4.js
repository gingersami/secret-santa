
var peeps = [];

var getUsersFromServer = function () {
    $.ajax({
      method: "GET",
      url: "/getUser",
      success: function(data) {
          console.log(data)
        peeps = users
        _renderUsers()
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };

const sortUsers = function(){
    for (let i=0; i<peeps.length;i++){
        let random = peeps[Math.floor(Math.random()*peeps.length)];
        if (random.status){
            random.status=false;
            peeps[i].status=false;
            peeps[i].pair.name=random.name;
            peeps[i].pair.email=random.email;

        }
    }
}
const postUpdatedMatchedUsers = function(user){
    // Ajax request for posting updates
    succes: function(){
        User.select({id:i+1}).findOneAndUpdate()
    }
}
getUsersFromServer();