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

const birthday= document.getElementById('birthday')
const birthdayResponse= document.getElementById('birthdayResponse')

// birthday.addEventListener('keyup', function(e) {
//     validateLength(e.target.value.length, 5, 'Namnet', birthdayResponse, 'Giltigt namn')
// })

var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
console.log(today);

const idag = new Date()
console.log(idag)
var currentYear = idag.getYear(); 
console.log(currentYear)
var currentMonth = idag.getMonth();
console.log(currentMonth)








//  18 check test


// alla new Date off en månad?!

let year = '1999'
let month = '08'
month--
let day = '20'
let hisBirthday = `${year}${month}${day}`
let hisFBD = new Date(year, month, day)





birthday.addEventListener('keyup', function(e) {
    createDate(e.target.value) 
})
// birthday.addEventListener('keyup', function (e) {
//     validateLength(e.target.value.length, 5, 'födelsedatum', birthdayResponse, 'Giltigt födelsedatum')
// })





const date = new Date()

console.log(date)
const birthdayI = new Date('79', '06', '18')
console.log(birthday)



console.log(date.toDateString())
console.log(date.toUTCString())
console.log(date.toISOString())
let outPut = Date.parse(birthday)
console.log(outPut)

//86,400,000 = 1 dag
//31 536 000 000 = 365 dagar
//94 608 000 000 = 3 år
//31 622 400 000 = 366 dagar 
//126 230 400 000 = 3 år + 1 skottår
//504 921 600 000 = 16 år
// 567 993 600 000 = 16 år + 2 år utan skottdagar
// 1 067 524 411 000 = dagens datum minus 18 år i ms


function printThis (date) {
    if (Date.parse(date) < 1606604400000) {
        console.log('You are a big boy now!')
    } else {
        console.log('Your day will come!')
    }
}



let date1 = new Date('2020','10','29')
console.log(Date.parse(date1))
let date2 = new Date()
console.log(Date.parse(date2))
let date3 = new Date('2020', '10', '30')
let date3Fixed = Date.parse(date3)
printThis(date3)
console.log(date3Fixed)
console.log(date3)

function check18 (date, name) {
    console.log(name)
    let today = new Date()
    console.log(date)
    if (Date.parse(date) < Date.parse(today)-567993600000) {
        console.log('You are 18+!')
    } else {
        console.log('Your day will come!')
    }
}

check18(birthday, 'Kristoffer')
let date4 = new Date('2010', '01', '01')
check18(date4)
check18(hisFBD, 'otto')
console.log(Date.parse(hisFBD))
console.log(hisFBD)
let date5 = new Date('99','08','01')
check18(date5, 'Milla')

let date6 = new Date ('2003', '09', '30')
// detta konsolloggas som oktober (09)...   10 blev november ... wtf
check18(date6, 'sven')



function check18 (date) {
    let checkDate = new Date (date)
    let popDate = Date.parse(checkDate)
    console.log(checkDate)
    console.log(popDate)
    if (Date.parse(date) < Date.parse(today)-567993600000) {
        console.log('You are 18+!')
        birthdayResponse.innerText ='Du är 18+'
    } else if (Date.parse(date) > Date.parse(today)-567993600000){
        console.log('Your day will come!')
        birthdayResponse.innerText= 'Du är under 18 och kan ej registrera dig'
    } else {
        birthdayResponse.innerText ='Skriv i formatet åååå-mm-dd'
    }
}
// function validateLength (value1, minValue="2", validateObject, messagePlace, message) {
//     if (value1 < minValue) {
//             messagePlace.innerText = `${validateObject} måste innehålla minst ${minValue} tecken`
//         } else {
//             messagePlace.innerText = `${message}`            
//     }
// }
function createDate(thisDate) {
    let useDate = thisDate
    birthdayResponse.innerText =`${useDate}`
    check18(useDate)
}

