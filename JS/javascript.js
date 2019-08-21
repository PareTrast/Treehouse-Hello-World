//Array for list of quotes.  
var encourage = [
  "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!-Dita Von Teese",
  "Do not let what you cannot do interfere with what you can do- John Wooden",
  "Start by doing what's necessary; then do what is possible; and suddenly you are doing the impossible.- St. Francis of Assisi",
  "The greatest discovery of my generation is that a human being can change his life by changing his attitude of mind.- William James",
  "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.- Thomas Edison",
  "Forget past mistakes.  Forget Failures.  Forget about everything except what you're going to do now and do it.- WIlliam Durant",
   "There are two ways to live your life.  One is as though nothing is a miracle.  The other is as though everything is a miracle.- Albert Einstein",
   "Accept challenges, so that you may feel the exhilaration of victory.- George S. Patton",
   "Character cannot be developed in ease and quiet.  Only through experience of trial and suffering can the sould be strengthened, ambition inspired, and success achieved.- Helen Keller", 
   "I walk slowly, but I never walk backward.- Abraham Lincoln",
   "The darkest hour has only sixty minutes.- Morris Mandel",
   "If you're going through Hell, keep going.- Winston Churchill",
   "Although the world is full of suffering, it is also full of the overcoming of it.- Helen Keller",
   "Our greatest glory is not in never falling, but in rising every time we fall.- Confucius",
   "A gem cannot be polished without friction, nor a man perfected without trials.- Chinese proverb",
   "Fall seven times, stand up eight.- Japanese proverb",
   "God does not guve us overcoming life--He gives us life as we overcome.- Oswald Chambers",
   "Victory is always possible for the person who refuses to stop fighting.- Napoleon Hill",
   "I was only 9 years old.  At that time you don't realize that you can work super hard and give everything you have and lose.  It was the best message for me.- Beyonce Knowles-Carter",
   "Remember, no one can make you feel inferior without your consent.- Elanor Roosevelt",
   "Self-esteem is a powerful force within each of us...Self-esteem is the experience that we are appropriate to life and to the requirements of life.- Nathaniel Branden",
   
];

//using .length will allow me to add more quotes later.

/*var randomQuote = Math.floor(Math.random()*(encourage.length))*/

function Quote(){
var randomQuote = Math.floor(Math.random()*(encourage.length));

document.getElementById('encouragement').innerHTML = encourage[randomQuote];
}


/*console.log(randomQuote);
$('button').click(function(){
    alert(randomQuote);
    if(alert('Get More Encouraging Words!')){} //used this instead of automatic refresh to restart function
    else window.location.reload();
});*/


/*var sad = document.getElementById(sad)

var randomQuoteSad =
encourageS[Math.floor(Math.random()*(encourageS.length))]*/









