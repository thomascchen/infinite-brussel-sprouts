$("a").remove();

var pageNum = 1;

$(document).ready(function() {
  $( window ).scroll(function() {
    if($(window).scrollTop() + window.innerHeight == $(document).height()) {

      pageNum++;

      $.ajax({
        type: "GET",
        url: "/tweets.json?page=" + pageNum,
        dataType: "json",
        success: function(data) {
          for (var i = 0; i < data.length; i++ ) {
            $("ul.tweets").append(
              "<li class='tweet'>" +
              "<div class='body'>" + data[i].text + "</div>" +
              "<div class='user'>" + data[i].username + "</div>" +
              "</li>"
            );
          };
        },
        error: function() {
          alert("Sorry something went wrong");
        }
      });
    };
  });
});
