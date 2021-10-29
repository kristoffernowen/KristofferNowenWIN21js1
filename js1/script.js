const firstName = document.getElementById('firstName')
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
email.addEventListener("keyup", function(e) {
    validateEmail(e.target)
})


firstName.addEventListener('keyup', function(e) {
    validateLength(e.target.value.length, 5, 'Namnet', firstNameResponse, 'Giltigt namn')
})
// firstName.addEventListener('blur', function(e) {
//     if (e.target.value.length < 3) {
//     firstNameResponse.innerText = `Namnet måste innehålla 3 bokstäver.`
//     } else {
//         firstNameResponse.innerText = `Giltigt namn`
//     }
// })

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


