$(document).ready(function() {

var quoteLibrary = [];

$.ajax({url: "quotes.json", success: function(result){
       quoteLibrary = result;
       console.log(quoteLibrary);
   }});


$("#getQuote").on("click",function() {
  var ranNum = Math.floor(Math.random() * quoteLibrary.length) + 1;
    $("#quote").fadeIn("slow").html("&quot;" + quoteLibrary[ranNum][0] + "&quot;");
        $("#author").html(quoteLibrary[ranNum][1]);
          $("#share-it").attr("href", "https://twitter.com/intent/tweet/?text="
                                                  + quoteLibrary[ranNum][0]
                                                  + quoteLibrary[ranNum][1]);
 });
});
