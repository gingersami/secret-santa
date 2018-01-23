function fetch() {
    $.ajax({
      method: "GET",
      url: "/posts",
      success: function(data) {
        posts = data;
        _renderPosts();
        // console.log(posts)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };