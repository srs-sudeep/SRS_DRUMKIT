var num=document.querySelectorAll(".drum").length;

for(var a=0; a<num; a++){

  document.querySelectorAll(".drum")[a].addEventListener("click", function() {
    var p=this.innerHTML;


    makesound(p);
        Animation(p);
  }
);
}

document.addEventListener("keypress", function(event) {
 var q=event.key;

 makesound(q);
 Animation(q);
});

function makesound(variable){
  switch(variable){
    case "w":
     var audio0 = new Audio("sounds/0.mp3");
    audio0.play();
    break;

    case "a":
     var audio1 = new Audio("sounds/1.mp3");
    audio1.play();
    break;

    case "s":
    var audio2 = new Audio("sounds/2.mp3");
    audio2.play();
    break;

    case "d":
     var audio3 = new Audio("sounds/3.mp3");
    audio3.play();
    break;

    case "j":
     var audio4 = new Audio("sounds/4.mp3");
    audio4.play();
    break;

    case "k":
     var audio5 = new Audio("sounds/5.mp3");
    audio5.play();
    break;

    case "l":
     var audio6 = new Audio("sounds/6.mp3");
    audio6.play();
    break;
}
}

function Animation(currentkey){
  var a=document.querySelector("." + currentkey);
  a.classList.add("pressed");
  setTimeout(function(){
  a.classList.remove("pressed");    
  }, 100);
}
