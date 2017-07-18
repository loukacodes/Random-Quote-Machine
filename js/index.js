$(document).ready(function() {

var quoteLibrary = [
  ["He who angers you conquers you.", "- Elizabeth Kenny"],
  ["Literature and butterflies are the two sweetest passions known to man.", "- Vladimir Nabokov"],
  ["It is love, not reason, that is stronger than death.", "- Thomas Mann"],
  ["O, had I but followed the arts!", "- William Shakespeare"],
  ["Everything I like is either illegal, immoral or fattening.", "- Alexander Woollcott"],
  ["Glory is fleeting, but obscurity is forever.", "- Napoleon Bonaparte"],
  ["If you want to be loved, be loveable.", "- Ovid"],
  ["Art is either plagiarism or revolution.", "- Paul Gauin"],
  ["The groves were God's first temples.", "- William C. Bryant"]
  ["Life is a zoo in a jungle.", "- Peter De Vries"],
  ["It's not the having it's the getting.", " - Elizabeth Taylor"],
  ["There is only one real deprivation... and that is not to be able to give one's gifts to those one loves most.", " - May Sarton"],
  ["An artist is forced by others to paint out his own free will."," - Williem de Kooning"],
  ["Self-perservation is first law of nature.", " - Samuel Butler"],
  ["One advantage of talking to yourself is that you know at least somebody's listening.", "- Franklin P. Jones"],
  ["Boldness is a mask for fear, however great.", " - John Dryden"],
  ["So, fall asleep love, loved by me... for I know love, I am loved by thee.", " - Robert Browning"],
  ["Sit in reverie and watch the changing color of the waves that break upon the idle seashore of the mind.", " - Henry Wadwortg Longfellow"],
  ["Macho does not prove mucho.", " - Zsa Zsa Gabor"],
  ["A man is usually more careful of his money than he is of his principles.", " - Ralph Waldo Emerson"],
  ["Care is a state in which something does matter; it is the source of human tenderness.", " - Rollo May"],
  ["I paint with shapes.", " - Alexande Calder"],
  ["One marked feature of the people, both high and low, is a love for flowers.", " - Robert Fortune"],
  ["Yield to temptation. It may not pass your way again.", "- Robert A. Heinlein"],
  ["Necessity dispenseth with decorum.", " - Thomas Carlyle"],
  ["Your words are my food, your breath my wine. You are everything to me.", " - Sarah Bernhardt"],
  ["Art is like a border of flowers along the course of civillization.", " - Lincoln Steffens"],
  ["There were no temples or shrines among us save those of nature.", " - Charles Eastman"]];


$("#getQuote").on("click",function() {
  var ranNum = Math.floor(Math.random() * quoteLibrary.length) + 1;
    $("#quote").fadeIn("slow").html("&quot;" + quoteLibrary[ranNum][0] + "&quot;");
        $("#author").html(quoteLibrary[ranNum][1]);
          $("#share-it").attr("href", "https://twitter.com/intent/tweet/?text="
                                                  + quoteLibrary[ranNum][0]
                                                  + quoteLibrary[ranNum][1]);
 });
});

                
