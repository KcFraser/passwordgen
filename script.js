// function that generates a random length
const generateRandomLength = (minLength, maxLength) => {
  //set a variable as a random number, with the max being your set max number
  let randomLength = Math.floor(Math.random() * maxLength);
  //check if the length is less than the min number your set, if its high enough it returns the value. If the value is wrong, it re-runs the function - this will loop until it gets the right number
  if (randomLength < minLength) {
    generateRandomLength(minLength, maxLength)
  } else return randomLength;
}

//characters

const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*-+ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function to generate password
const generatePassword = () => {
  let newPassword = "";
  const newPasswordLength = generateRandomLength(8, 128);
  
  // for loop that will run as long as the random password length generated
  for (let i=0; i<newPasswordLength; i++) {
       //make a random character
      let randomCharacter = characters[Math.floor(Math.random() * 46)];
        // update the newpassword by adding the character
         newPassword = newPassword.concat(randomCharacter)
  }
  
 
  return newPassword
}

alert(generatePassword(12));
// Add event listener to generate button
generateBtn.addEventListener("click", "generatepassword()");
