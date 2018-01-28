// // REGEX
// var r = /\d+/;
// var s = window.location.pathname;
// // REGEX
getUsers();
var peeps = [];

var getUsersFromServer = function () {
    $.ajax({
      method: "GET",
      url: "/getMatches",
      success: function(data) {
          console.log(data)
        peeps = data[0].users
        _renderMixedUsers()
        // sortUsers();
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
  function _renderMixedUsers() {
    $('#anchor').empty();
    var source = $('#mixed-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < peeps.length; i++) {
      var newHTML = template(peeps[i]);
      $('#anchor').append(newHTML);
    }
  }


function getUsers(){
  $.ajax({
    method:"GET",
    url:'/getUser/'+s.match(r),
    success:function(data){
      peeps = data[0].users
      console.log(data[0].users)
      _renderUsers()
    },
    error:function(jqXHR,textStatus,errorThrown){
      console.log(textStatus)
    }
  })
}

$('button').on('click', function(){

  getUsersFromServer()
})

// const sortUsers = function(){
//     for (let i=0; i<peeps.length;i++){
//         let random = peeps[Math.floor(Math.random()*peeps.length)];
//         if (random.status){
//             peeps[i].status=false;
//             peeps[i].pair = random;
//         }
//     }
// }

// getUsersFromServer();
// const postUpdatedMatchedUsers = function(user){
//         $.ajax({
//             method: "POST",
//             url: "/matchUser",
//             data:{
//                 user
//             },
//             success: function(){
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//               console.log(textStatus);
//             }
//           });
//           return false
// }

// for (let i=0; i<peeps.length;i++){
//     postUpdatedMatchedUsers(peeps[i])
// }
