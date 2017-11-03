$(document).ready(function() {

    var quoteLibrary = [];

    (function getQuoteLibrary() {
        $.ajax({
          url: "https://raw.githubusercontent.com/trangtmtran/Random-Quote-Machine/master/quotes.json",
          type: 'GET',
          dataType: 'json',
          success: function(result){
             quoteLibrary = result.quotes;
             console.log(quoteLibrary.length);
        }});
    })();



    $("#getQuote").on("click",function() {
        var ranNum = Math.floor(Math.random() * quoteLibrary.length) + 1;
            $("#quote").fadeIn("slow").html("&quot;" + quoteLibrary[ranNum]["quote"] + "&quot;");
                $("#author").html("-" + quoteLibrary[ranNum]["author"]);
                    $("#share-it").attr("href", "https://twitter.com/intent/tweet/?text="
                                                      + quoteLibrary[ranNum]["quote"]
                                                      + quoteLibrary[ranNum]["author"]);
    });
});
