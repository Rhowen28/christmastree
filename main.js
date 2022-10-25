function tree(){
    var text = document.getElementById("tree");
 
var symbols,color;
symbols = "#0000FF" + "#FF0000"+ "#00FF00"+"#00FF00" ;
color = "";

for (var i= 0; i < 6 ; i++ ){
color = color + symbols [Math.floor(Math.random() * 20)]; // to get random color and symbols
}
text.style.color = color ; //to place the color in tree

document.getElementById("rgb").innerHTML = color; // to generate the color 


}


var sound = document.getElementById("audio");

function play(){
    play_color = setInterval(tree,100);
    sound.play();
    sound.loop = true;

}

function stop(){
    clearInterval(play_color);
    sound.pause(sound);
}

  
  // Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000)

//end of timer

function createSnow() {
    const snow = document.createElement("div");
  
    snow.innerHTML = "<img id='snowflake' src='https://static.vecteezy.com/system/resources/previews/001/194/635/non_2x/snowflake-png.png'>";
    snow.classList.add("snow");
  
    document.body.appendChild(snow);
  
    snow.style.left = Math.random() * 100 + "vw";
  
    snow.style.animationDuration = math.random() * 5 + 8 + "s";
  
    setTimeout(() => {
      snow.remove();
    }, 5000);
  }
  
  setInterval(createSnow, 800);

  
  