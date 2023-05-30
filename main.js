x = 0;
y = 0;

draw_apple = "";
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  img = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 var content = event.results[0][0].transcript;

 to_number = Number(content);
 


    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    for(var i=1; i <= to_number; i++)
    {
        x = Math.floor(Math.random()*700);
        y = Math.floor(Math.random()*400);
        img(apple, x, y, 50, 50);
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    } 

  
}

function setup() {
 canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data="";
  }
  speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(results[0].status);

    synth.speak(utterThis);


}
