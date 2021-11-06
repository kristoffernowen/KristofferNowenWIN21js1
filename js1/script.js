
const firstNameResponse = document.getElementById('firstNameResponse')

const lastNameResponse = document.getElementById('lastNameResponse')

document.getElementById('firstName').addEventListener('keyup', function(e) {
    validateName(e.target.value, 'Namnet', firstNameResponse, 'Giltigt namn')
})

document.getElementById('lastName').addEventListener('keyup', function(e) {
    validateName(e.target.value, 'Namnet', lastNameResponse, 'Giltigt namn')
})
const nameRegex = /^[A-Z,ÅÄÖ][a-öA-Ö]+(\-[A-Z,ÅÄÖ][a-ö]+)?$/
let validFirstName = false
let validLastName = false

function validateName (value1, validateObject, messagePlace, message) {
    if (!nameRegex.test(value1)) {
            messagePlace.innerText = `${validateObject} måste innehålla minst två bokstäver och börja med stor bokstav. Skriv dubbelnamn Aa-Aa`
        } else {
            messagePlace.innerText = `${message}` 
            switch (messagePlace) {
                case firstNameResponse: validFirstName = true
                    break
                case lastNameResponse: validLastName = true
                    break
            }        
    }
}

const birthdayResponse= document.getElementById('birthdayResponse')

document.getElementById('birthday').addEventListener('keyup', function(e) {
    check18(e.target.value) 
})
let isEighteen = false

function check18 (date) {
    if(date.length < 10) {
        birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd, glöm inte bindestreck.'
    } else {
        let today = new Date()
        if (Date.parse(date) < Date.parse(today)-568080000000) {
            isEighteen = true
            birthdayResponse.innerText ='Du är över 18 och kan registrera dig'
        } else if(Date.parse(date) > Date.parse(today)-568080000000) {
            
            birthdayResponse.innerText= 'Du är under 18 och kan ej registrera dig'
        }
        else {
            birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd, glöm inte bindestreck.'
        }
    }
}

const email = document.getElementById('email')
const emailResponse = document.getElementById('emailResponse')

email.addEventListener("keyup", function(e) {
    validateRegex(e.target.value, regexEmail)
})
let validEmail = false
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateRegex (e, myRegex) {
    if (!myRegex.test(e)) {
        switch (myRegex) {
            case postnumberRegex: postnumberResponse.innerText = `Postnumret måste ha fem siffror.`
                validPostnumber = false
                break
            case cityRegex: cityResponse.innerText = `Ortnamnet måste ha minst två bokstäver och börja med stor bokstav.`
                validCity = false
                break
            case streetRegex: streetAdressResponse.innerText = `Skriv giltig gatuadress enligt följande Storgatan 1B, eller Mäster Henriks Allé 42`
                validStreetAdress = false
                break
            case regexPassword: passwordResponse.innerText = 'ogiltigt lösenord'
                passwordResponse.style.color="red"
                validPassword = false
                break
            case regexEmail: emailResponse.innerText="ogiltig e-postadress"
                emailResponse.style.color="red"
                validEmail = false
                break
            default: break
        }
    }
    else {
        switch (myRegex) {
            case postnumberRegex: postnumberResponse.innerText = `Giltigt postnummer`    
                validPostnumber = true 
                break
            case cityRegex: cityResponse.innerText = `Giltigt ortnamn`    
                validCity = true 
                break 
            case streetRegex: streetAdressResponse.innerText = `Giltig gatuadress` 
                validStreetAdress = true  
                break
            case regexPassword: passwordResponse.innerText = 'Godkänt lösenord'
                passwordResponse.style.color="green"
                validPassword = true
                break
            case regexEmail: emailResponse.innerText="giltig e-postadress"
                emailResponse.style.color="green"
                validEmail = true
                break
            default:
                break
        }
    }
}

const password = document.getElementById('password')
const passwordResponse = document.getElementById('passwordResponse')
let validPassword = false

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

password.addEventListener('keyup', function(e) {
    validateRegex(e.target.value, regexPassword)
})
password.addEventListener('keyup', function(e) {
    validateConfirmPassword(confirmPassword.value, e)
})

const confirmPassword = document.getElementById('confirmPassword')
const confirmPasswordResponse = document.getElementById('confirmPasswordResponse')

confirmPassword.addEventListener('keyup', function(e) {
    validateConfirmPassword(password.value, e)
})
let validConfirmPassword = false

function validateConfirmPassword(password, confirmPassword) {
    if (password === confirmPassword.target.value) {
        confirmPasswordResponse.innerText = 'Lösenorden matchar'
        confirmPasswordResponse.style.color="green"
        validConfirmPassword = true
    } else {
        document.getElementById('confirmPasswordResponse').style.color="red"
        confirmPasswordResponse.innerText = 'Lösenorden matchar inte'
        validConfirmPassword = false
    }
}

const streetAdress= document.getElementById('streetAdress')
const streetAdressResponse= document.getElementById('streetAdressResponse')
let validStreetAdress = false

const streetRegex = /^[A-ZÅÄÖ][a-öA-Ö]+ ?([A-Ö-a-ö]{2,})? ?([A-Ö-a-ö]{2,})? ?([0-9]+) ?[a-öA-Ö]?$/

streetAdress.addEventListener('keyup', function(e) {
    validateRegex(e.target.value, streetRegex)
}) 

const postnumber= document.getElementById('postnumber')
const postnumberResponse= document.getElementById('postnumberResponse')
let validPostnumber = false

const postnumberRegex = /^[0-9]{3} ?[0-9]{2}$/

postnumber.addEventListener('keyup', function(e) {
    validateRegex(e.target.value, postnumberRegex)
})

const city= document.getElementById('city')
const cityResponse= document.getElementById('cityResponse')
let validCity = false

const cityRegex = /^[A-Z,ÅÄÖ][a-öA-Ö]+( [a-öA-Ö]+)?(\-[a-öA-Ö]+)?$/

city.addEventListener('keyup', function(e) {
    validateRegex(e.target.value, cityRegex)
})

const submitRespons = document.getElementById('submitRespons')
function submitThis(event) {
    
    if(!isEighteen || !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validStreetAdress || !validPostnumber || !validCity) {
        event.preventDefault()
        console.log('ej reg')
        submitRespons.innerText = "Du är under 18 och kan inte registrera dig eller har inte fyllt i uppgifterna korrekt."
    }
    else {
        submitRespons.innerText = "Registrering ok."       
    }
}









