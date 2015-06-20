var pageNum = 1

$(".more-sprouts").on("click", function(event) {
  event.preventDefault();

  pageNum++

  $.ajax({
    type: "GET",
    url: "/tweets.json?page=" + pageNum,
    dataType: "json",
    success: function(data) {

      for (var i = 0; i < data.length; i++ ) {
        $(".tweets .tweet:nth-child(" + (i + 1) + ")").replaceWith(
          "<li class='tweet'>" +
          "<div class='body'>" + data[i].text + "</div>" +
          "<div class='user'>" + data[i].username + "</div>" +
          "</li>");
      };
    },

    error: function() {
      alert("Sorry something went wrong")
    }

  });

});
