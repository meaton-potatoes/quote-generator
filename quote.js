$(document).ready(function() {
  $("#newQuote").click(function(){
    $("#quote").html(quotes());
  });
});

function quotes() {
  var num = Math.floor(Math.random()*10) +1;
  console.log(num);
  var quote;
      
  switch(num) {
    case(1):
      quote = "We are born of love; love is our mother."
      break;
    case(2):
      quote = "Everything that is made beautiful and fair and lovely is made for the eye of one who sees.";
      break;
    case(3):
      quote = "Beauty surrounds us but usually we need to be walking in a garden to know it.";
      break;
    case(4):
      quote = "Love will finds its way through all languages on its own.";
      break;
    case(5):
      quote = "Raise your words, not voice. It is rain that grows flowers, not thunder.";
      break;
    case(6):
      quote = "Silence is the language of God, all else is poor translation.";
      break;
    case(7):
      quote = "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.";
      break;
    case(8):
      quote = "If you are irritated by every rub, how will your mirror be polished?";
      break;
    case(9):
      quote = "The lion is most handsome when looking for food.";
      break;
    case(10):
      quote = "Do not feel lonely, the entire universe is inside you.";
      break;
  }
  
  var quoteOut = "";
  for (var i = 0; i < quote.length; i++) {
    if (quote[i] === ";") {
      quoteOut += "%3B"
    } else {
      quoteOut += quote[i];
    }
  }
  quote += "<br><br><a href='http://twitter.com/home/?status=" + quoteOut + " - Rumi" + " http://melissaeaton.me/quote-generator/' target='_blank'><i class='fa fa-twitter fa-2x'></i></a>"
  return quote;
}