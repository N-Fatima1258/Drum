//button clicks
function handleClick()
{
 var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
}

for(let i=0;i<document.querySelectorAll(".drum").length;i++) //written instead of 7
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
 

//keyboard strokes

function whole(event)
{
makeSound(event.key);
// This line calls the makeSound function, passing the key property of the event object as an argument
buttonAnimation(event.key);
}
document.addEventListener("keydown",whole);

//keydown is updated form of keypress
//event .....>  it lets us tap into the event that triggered the event listener
// once the keyboard stroke gets detected then whole function gets called passing in the
// event that triggers the key press and that event contains the property called key which tells us
// which keyboard key is pressed and then we send that to function makeSound

// *****by chat GPT******

// In summary, when the user presses a key while interacting with the webpage, the keypress event is triggered. The event is captured by the event listener attached to the document, which then calls the whole function. The whole function, in turn, passes the key of the pressed key to the makeSound function, which is expected to play a sound corresponding to the key pressed.


// In this code snippet, event refers to the event object that is automatically passed as an argument to the event listener function whole. The event object contains information about the event that was triggered, in this case, the "keypress/keydown" event.

// important point here***********>>>>>>>.. When an event listener is triggered, it receives an event object as an argument, which provides details about the event that occurred. In the context of the "keypress" event, the event object contains information about the key that was pressed.

// event.key is a property of the event object that represents the value of the key that was pressed. It holds the character value of the key if it corresponds to a character-generating key (like letters, numbers, etc.). For example, if you press the "A" key, event.key would hold the string "A".


//higher order functions are functions that take other functions as input,,,,example:addEventListener
//callback fn is fn that we used as an input,,,,,,,example:whole
// function anotherAddEventListener(typeOfEvent,callback){
//   following is the object that is created when the event gets detected(event)
//   var eventThatHappened={
//     eventType:"keypress",
//     key:"p",
//     durationOfKeyPress:2
//   }
//   if(eventThatHappened===typeOfEvent){
//     callback(eventThatHappened);
//   }
//   }
  


function makeSound(key)
{
  switch (key) {
    case "w":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom2 =new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom1 =new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var snare =new Audio("sounds/snare.mp3");
    snare.play();
      break;
    case "k":
      var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
      break;
    case "l":
      var crash=new Audio("sounds/crash.mp3");
     crash .play();
      break;
   
    default:
     console.log(buttonInnerHTML);
   }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("." + currentKey).classList;
  activeButton.add("pressed");
 setTimeout(function () {activeButton.remove("pressed");} , 100);
 //the anonymous function is called after 100 s......
}




// 1) the javaScript function is going to be called when that click event gets detected
//Don't put paranthesis in front of function,becz if we put ,it is a traditional method and it will straightaway call that function and we don't want it
//1) here instead of function name you can write an anonymous function,,,all the things reamin same but the function name is missing


//2) we need to call the handleCLick function when a button detects a click,
//and we need to know which button gets clicked,so that we can play the right sound
//,so we need to know that which button triggered the event
//we have attached a listener to our button and when the button gets clicked,
//  the listener gets triggered and the function that was linked to the eventListener gets called

//we can figure out the identity of the button that gets triggered by using .......this
//2) when we click on the button then that button event listener gets triggered



// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();


// console.log(this.style.color="white");can change style also
//jis bhi button pr click kryn gy uska style change ho jay ga
// console.log(this.innerHTML);  can display text


//document.getElementsByClassName("w")[0].innerHTML="F";