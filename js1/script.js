// const firstName = document.getElementById('firstName')
const firstNameResponse = document.getElementById('firstNameResponse')
const lastName = document.getElementById('lastName')
const lastNameResponse = document.getElementById('lastNameResponse')
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

function validateLength (value1, minValue="2", validateObject, messagePlace, message) {
    if (value1 < minValue) {
            messagePlace.innerText = `${validateObject} måste innehålla minst ${minValue} tecken`
        } else {
            messagePlace.innerText = `${message}`            
    }
}
function validatePostnumber (value1, rightValue="5", validateObject, messagePlace) {
    if (value1 !== rightValue) {
            messagePlace.innerText = `${validateObject} måste innehålla ${rightValue} tecken`
        } else {
            messagePlace.innerText = `Giltigt postnummer`            
    }
}

function validateEmail(e) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!regEx.test(e.value)) {
       emailResponse.innerText="ogiltig e-postadress"
       emailResponse.style.colorImportant="text-warning"
   } else {       
       emailResponse.innerText="giltig e-postadress"
   }
}

function validatePassword(password, confirmPassword) {
    if (password === confirmPassword.target.value) {
        confirmPasswordResponse.innerText = 'Lösenorden matchar'
        
    } else {
        confirmPasswordResponse.innerText = 'Lösenorden matchar inte'
      
    }
}
confirmPassword.addEventListener('keyup', function(e) {
    validatePassword(password.value, e)
})



email.addEventListener("keyup", function(e) {
    validateEmail(e.target)
})

document.getElementById('firstName').addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 5, 'Namnet', firstNameResponse, 'Giltigt namn')
})

lastName.addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 5, 'Namnet', lastNameResponse, 'Giltigt namn')
})
password.addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 8,'Lösenordet', passwordResponse, 'Giltigt lösenord')
})
streetAdress.addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 2, 'Gatuadressen', streetAdressResponse, 'Giltig adress')
})    
postnumber.addEventListener('keyup', function(e) {
    validatePostnumber(e.target.value.length, 5, 'Postnumret', postnumberResponse, 'Giltigt postnummer')
})
city.addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 2, 'Ortsnamnet', cityResponse, 'Giltigt ortsnamn')
})



const birthday= document.getElementById('birthday')
const birthdayResponse= document.getElementById('birthdayResponse')

//86,400,000 = 1 dag
//31 536 000 000 = 365 dagar
//94 608 000 000 = 3 år
//31 622 400 000 = 366 dagar 
//126 230 400 000 = 3 år + 1 skottår
//504 921 600 000 = 16 år
// 567 993 600 000 = 16 år + 2 år utan skottdagar
// 1 067 524 411 000 = dagens datum minus 18 år i ms

birthday.addEventListener('keyup', function(e) {
    check18(e.target.value) 
})


let isEighteen = false
function check18 (date) {
    console.log('first is', isEighteen)
    if(date.length < 10) {
        birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd'
    } else {

        let today = new Date()

        
        if (Date.parse(date) < Date.parse(today)-567993600000) {
            isEighteen = true
            birthdayResponse.innerText ='Du är 18+'
        } else if(Date.parse(date) > Date.parse(today)-567993600000) {
            
            birthdayResponse.innerText= 'Du är under 18 och kan ej registrera dig'
        }
        
        else {
            birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd'
        }
    }
    console.log(isEighteen)
}


// if (date.length === 8) {
//     split 4 + '-' split 2 + '-' split 2
// }                   Kan jag köra ,med rätt kod, split för att få in '-' ifall nån skriver enligt 20101010?

// kan jag få in space remove så ingen skriver space och fyller längden på input?

