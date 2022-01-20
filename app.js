console.log("hi")
var userName = prompt("please Enter your name:")
console.log(userName)
var gender = prompt("please Enter your gender:Male or Female")
console.log(gender)
var age=prompt("please Enter your age:")
console.log(age)
if (age <=0 ){
    alert ("the age can't be less or equal to zero")
}
var genderConv = gender.toLowerCase();
var genType ="";
switch(genderConv){
    case "female":{
        genType= "Ms";
        break;
    }
    case "male":
        {genType = "Mr";
        break;}
    default:
        {genType = "";}

    }

        

console.log(genType);
 var confbutton ="Do you want to skip welcoming message ?"

  
  if (confirm(confbutton) == true) {
    text = "";
  } else {
    text = "You canceled!";
    alert ("welcome "+ genType + " " +userName);
  }
  


   