// const firstName = document.getElementById('firstName')
const firstNameResponse = document.getElementById('firstNameResponse')
const lastName = document.getElementById('lastName')
const lastNameResponse = document.getElementById('lastNameResponse')
const birthday= document.getElementById('birthday')
const birthdayResponse= document.getElementById('birthdayResponse')
const password = document.getElementById('password')
const passwordResponse = document.getElementById('passwordResponse')
const confirmPassword = document.getElementById('confirmPassword')
const confirmPasswordResponse = document.getElementById('confirmPasswordResponse')
const streetAdress= document.getElementById('streetAdress')
const streetAdressResponse= document.getElementById('streetAdressResponse')
const postnumber= document.getElementById('postnumber')
const postnumberResponse= document.getElementById('postnumberResponse')
const city= document.getElementById('city')
const cityResponse= document.getElementById('cityResponse')
const submitRespons = document.getElementById('submitRespons')

function validateLength (value1, minValue="2", validateObject, messagePlace, message) {
    if (value1 < minValue) {
            messagePlace.innerText = `${validateObject} måste innehålla minst ${minValue} tecken`
        } else {
            messagePlace.innerText = `${message}`            
    }
}

const nameRegex = /^[A-Z,ÅÄÖ][a-öA-Ö]+(\-[A-Z,ÅÄÖ][a-ö]+)?$/

function validateName (value1, validateObject, messagePlace, message) {
    if (!nameRegex.test(value1)) {
            messagePlace.innerText = `${validateObject} måste innehålla minst två bokstäver och börja med stor bokstav. Skriv dubbelnamn Aa-Aa`
        } else {
            messagePlace.innerText = `${message}`  
                   
    }
}

let isEighteen = false
function check18 (date) {
    
    if(date.length < 10) {
        birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd, glöm inte bindestreck.'
    } else {

        let today = new Date()

        
        if (Date.parse(date) < Date.parse(today)-568080000000) {
            isEighteen = true
            birthdayResponse.innerText ='Du är 18 och kan registrera dig'
        } else if(Date.parse(date) > Date.parse(today)-568080000000) {
            
            birthdayResponse.innerText= 'Du är under 18 och kan ej registrera dig'
        }
        
        else {
            birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd, glöm inte bindestreck.'
        }
    }
    console.log('check 18:', isEighteen)
}

function validateEmail(e) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!regEx.test(e)) {
       emailResponse.innerText="ogiltig e-postadress"
       emailResponse.style.colorImportant="text-warning"
   } else {       
       emailResponse.innerText="giltig e-postadress"
       
   }
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
function regexPasswordValid(e) {
    if(!regexPassword.test(e)) {
        passwordResponse.innerText = 'ogiltigt lösenord'
        document.getElementById('passwordResponse').classList.add('text-success')
    } else {
        passwordResponse.innerText = 'Godkänt lösenord'
        
    }
}
function validateConfirmPassword(password, confirmPassword) {
    if (password === confirmPassword.target.value) {
        confirmPasswordResponse.innerText = 'Lösenorden matchar'
        document.getElementById('confirmPasswordResponse').classList.add('text-success')
        
    } else {
        confirmPasswordResponse.innerText = 'Lösenorden matchar inte'
      
    }
}


const streetRegex = /^[A-ZÅÄÖ][a-öA-Ö]+ ?([A-Ö-a-ö]{2,})? ?([A-Ö-a-ö]{2,})? ?([0-9]+)[a-öA-Ö]?$/   //hyfsad
function validateStreetName (e) {
    if (!streetRegex.test(e)) {
            streetAdressResponse.innerText = `Skriv giltig gatuadress enligt följande Storgatan 1B, eller Mäster Henriks Allé 42`
        } else {
            streetAdressResponse.innerText = `Giltig gatuadress` 
                    
    }
}

const postnumberRegex = /^[0-9]{3} ?[0-9]{2}$/

function validatePostnumber (e) {
    if (!postnumberRegex.test(e)) {
            postnumberResponse.innerText = `Postnumret måste ha fem siffror.`
        } else {
            postnumberResponse.innerText = `Giltigt postnummer`    
                   
    }
}

const cityRegex = /^[A-Z,ÅÄÖ][a-öA-Ö]+( [a-öA-Ö]+)?(\-[a-öA-Ö]+)?$/

function validateCity (e) {
    if (!cityRegex.test(e)) {
            cityResponse.innerText = `Ortnamnet måste ha minst två bokstäver.`
        } else {
            cityResponse.innerText = `Giltigt ortnamn`    
                   
    }
}
function submitThis(event) {
    
    if(!isEighteen) {
        event.preventDefault()
        console.log(isEighteen)
        submitRespons.innerText = "Du kan inte registrera dig"
    }
    else {
        console.log(isEighteen)
        
    }
}


document.getElementById('firstName').addEventListener('keyup', function(e) {
    validateName(e.target.value, 'Namnet', firstNameResponse, 'Giltigt namn')
})

lastName.addEventListener('keyup', function(e) {
    validateName(e.target.value, 'Namnet', lastNameResponse, 'Giltigt namn')
})
birthday.addEventListener('keyup', function(e) {
    check18(e.target.value) 
})

email.addEventListener("keyup", function(e) {
    validateEmail(e.target.value)
})
password.addEventListener('keyup', function(e) {
    regexPasswordValid(e.target.value)
})
confirmPassword.addEventListener('keyup', function(e) {
    validateConfirmPassword(password.value, e)
})
streetAdress.addEventListener('keyup', function(e) {
    validateStreetName(e.target.value)
})    
postnumber.addEventListener('keyup', function(e) {
    validatePostnumber(e.target.value)
})
city.addEventListener('keyup', function(e) {
    validateCity(e.target.value)
})





//86,400,000 = 1 dag
//31 536 000 000 = 365 dagar
//94 608 000 000 = 3 år
//31 622 400 000 = 366 dagar 
//126 230 400 000 = 3 år + 1 skottår
//504 921 600 000 = 16 år
// 567 993 600 000 = 16 år + 2 år utan skottdagar
// 1 067 524 411 000 = dagens datum minus 18 år i ms






// if (date.length === 8) {
//     split 4 + '-' split 2 + '-' split 2
// }                   Kan jag köra ,med rätt kod, split för att få in '-' ifall nån skriver enligt 20101010?

// kan jag få in space remove så ingen skriver space och fyller längden på input?

// document.getElementById('labelConfirmPassword').classList.add('text-success')

// jobba lite på submit funktionen, koppla inte bara isEighteen utan lägg likadan på allt som valideras
