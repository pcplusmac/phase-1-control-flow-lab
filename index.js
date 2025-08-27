function scuberGreetingForFeet(feet){
  // Write your code here!
  let distance = feet;
  let msg;

  if (distance <= 400) {
    msg = "This one is on me!";
  }else if(distance <= 2000) {
    msg = "That will be twenty bucks."
  }else if(distance <= 2500) {
    msg = "I will gladly take your thirty bucks."
  }else if(distance > 2500) {
    msg = "No can do."
  } else {
    msg = "enter the distance."
  }

  return msg;

}

function ternaryCheckCity(str){
  // Write your code here!
  let msg;
  str === 'NYC' ? (msg = "Ok, sounds good.") : (msg = "No go.")
  return msg;

}

function switchOnCharmFromTip(level){
  // Write your code here!
  let msg;
  switch (level) {
    case "generous":
      msg = "Thank you so much.";
      break;
    case "not as generous":
      msg = "Thank you.";
      break;
    default:
      msg = "Bye."


  }
  return msg;
}

console.log(scuberGreetingForFeet(199))