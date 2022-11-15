const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const generateBtn = document.getElementById("generate-btn")
const sliderValue = document.getElementById("slider-value")
const sliderEl = document.getElementById("slider-el")

sliderValue.textContent = sliderEl.value

// to make the number change when you dran the slider
sliderEl.oninput = function() {
  sliderValue.innerHTML = this.value;
}

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords() {
    let passwordLength = sliderValue.innerHTML
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

generateBtn.addEventListener('click', function() {
    passwordOne.textContent = generatePasswords()
    passwordTwo.textContent = generatePasswords()
})