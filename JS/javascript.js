//Array for list of quotes.  
var encourage = [
  "Keep on Pushing! Things will get better.  Trust me!",
  "Do not let what you cannot do interfere with what you can do- John Wooden",
  "Start by doing what's necessary; then do what is possible; and suddenly you are doing the impossible.- St. Francis of Assisi",
  "The greatest discovery of my generation is that a human being can change his life by changing his attitude of mind.- William James",
  "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.- Thomas Edison",
  "Forget past mistakes.  Forget Failures.  Forget about everything except what you're going to do now and do it.- WIlliam Durant",
];

//using .length will allow me to add more quotes later.

var randomQuote = encourage[Math.floor(Math.random()*(encourage.length))];
console.log(randomQuote);
$('button').click(function(){
    alert(randomQuote);
});

setTimeout(function() {
  location.reload();
}, 20000);