function insHtml(title, snippet, link) {
  var html = "<li>";
  html += "<a href='" + link + "'>";
  html += "<h3>" + title + "</h3>";
  html += "<h6>" + snippet + "</h6></a>";
  $(".container").append(html);
}

function search() {
  var request = document.getElementById("searchtext").value;
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&search=" + request,
    contentType: 'application/json',
    dataType: "jsonp",
    cache: true,
    success: function(data) {
      $(".container").empty();
      for (var i = 0; i < data[1].length; i++) {
        insHtml(data[1][i], data[2][i], data[3][i]);
      }
    }
  })
};
 
$(document).ready(function() {
   
   $("subbutton").click(function(){
     search();
   })
   
    $("#searchtext").keyup(function(e) {
      if (e.keyCode == 13) {
        search();
      }
    });
  });