var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButtons; i++){
document.querySelector(".drum").addEventListener("click",function{
  var audio =new Audio ("sounds/tom-1.mp3");
  audio.play(); 
});
}