const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars ="!@#$%^&*()_-+={}[]|,.<>?/:;";
const output = document.getElementById('password');

function randomPasswordGenerator(){
    const passwordLength =document.getElementById('passwordLength').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specials = document.getElementById('specials').checked;

    let allowedChars = "";
    let password = "";
    if(passwordLength > 0){
        allowedChars+= uppercase ?uppercaseChars:"";
        allowedChars+= lowercase ?lowercaseChars:"";
        allowedChars+= numbers ?numberChars:"";
        allowedChars+= specials ?specialChars:"";

        if(allowedChars.length > 0){
            for(let i = 0; i<passwordLength; i++){
                let randomIndex = Math.floor(Math.random()*allowedChars.length);
                password+=allowedChars[randomIndex];
            }
            output.textContent = `Generated Password: ${password}`;
        }
        else{
            output.textContent = "Please Select atleast 1 option."
        }
        
    }
    else{
        output.textContent = "Password length must be atleast 1!"
    }


}