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


  var includelowercasecharacter = prompt("Would you like to include lowercase characters?", "yes") == "yes";
  console.log(includelowercasecharacter);
  var includespecialcharacters = prompt("Would you like to include special characters?", "yes") == "yes";
  var includeuppercasecharacters = prompt("Would you like to include uppercasse characters?", "yes") == "yes";
  var includenumericcharacters = prompt("Would you like to include numeric characters?", "yes") == "yes";
  var passwordlength = prompt("How many characters would you like in your password between 8 & 128?");

  let password = "";

  while (password.length <= passwordlength) {
    if (includelowercasecharacter) {
        if (password.length == passwordlength) break;
        password += lowerCasecharacters[Math.floor(Math.random() * lowerCasecharacters.length)];
    }
    if (includespecialcharacters) {
        if (password.length == passwordlength) break;
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    if (includeuppercasecharacters) {
        if (password.length == passwordlength) break;
        password += upperCasecharacters[Math.floor(Math.random() * upperCasecharacters.length)];
    }
    if (includenumericcharacters) {
        if (password.length == passwordlength) break;
        password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    }
  }

  const shuffled = password.split('').sort(function(){return 0.5-Math.random()}).join('');

  return shuffled;



  


  console.log(upperCasecharacters);
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);