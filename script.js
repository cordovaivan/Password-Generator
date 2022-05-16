// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var lowerCasecharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialCharacters = ["@","%","+","/","'","!","#","$","^","?",":",",","(",")","{","}","[","]","~","-","_","."];
  var upperCasecharacters = lowerCasecharacters.map(element => {
    return element.toUpperCase();
  });
  var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];

  //prompt("Would you like to include special characters?", "yes");
  //prompt("Would you like to include numeric characters?", "yes");
  //prompt("Would you like to include lowercase characters?", "yes");
  //prompt("Would you like to include uppercasse characters?", "yes");
  //prompt("How many characters would you like in your password between 8 & 128?");

  var includelowercasecharacter = prompt("Would you like to include lowercase characters?", "yes");
  var includespecialcharacters = prompt("Would you like to include special characters?", "yes");
  var includeuppercasecharacters = prompt("Would you like to include uppercasse characters?", "yes");
  var includenumericcharacters = prompt("Would you like to include numeric characters?", "yes");
  var passwordlength = prompt("How many characters would you like in your password between 8 & 128?");

  


  console.log(upperCasecharacters);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);