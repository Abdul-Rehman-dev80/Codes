let response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
let data = await response.json()

import { countryList } from './CountryData.js';

let input = document.querySelector('.value')
let countryImg1 = document.querySelector('.countryImg1')
let countryImg2 = document.querySelector('.countryImg2')
let countrySelection1 = document.querySelector('.countrySelect1')
let countrySelection2 = document.querySelector('.countrySelect2')
let resultPara = document.querySelector('.result')
let submitBtn = document.querySelector('.submit')

for (let key in countryList) {
    countrySelection1.innerHTML += `<option>${key}</option>`
    countrySelection2.innerHTML += `<option>${key}</option>`
}

(function inittialSet() {
    for (let key in countryList) {
        if (key == 'USD') {
            countrySelection1.value = key
            let selectedCode1 = countrySelection1.value.slice(0, 2)
            countryImg1.setAttribute("src", `https://flagsapi.com/${selectedCode1}/flat/48.png`)
        } else if (key == 'PKR') {
            countrySelection2.value = key
            let selectedCode2 = countrySelection2.value.slice(0, 2)
            countryImg2.setAttribute("src", `https://flagsapi.com/${selectedCode2}/flat/48.png`)
        }
    }
})()

countrySelection1.addEventListener('click', () => {
    let selectedCode1 = countrySelection1.value.slice(0, 2)
    countryImg1.setAttribute("src", `https://flagsapi.com/${selectedCode1}/flat/48.png`)
})
countrySelection2.addEventListener('click', () => {
    let selectedCode2 = countrySelection2.value.slice(0, 2)
    countryImg2.setAttribute("src", `https://flagsapi.com/${selectedCode2}/flat/48.png`)
})

submitBtn.addEventListener('click', () => {
    if (input.value) {
        let inputValue = input.value
        let converted = input.value * (data.eur[countrySelection2.value.toLowerCase()] / data.eur[countrySelection1.value.toLowerCase()])
        resultPara.textContent = `${inputValue} ${countrySelection1.value} = ${converted.toFixed(2)} ${countrySelection2.value}`
    } else {
        resultPara.textContent = 'Please enter valid amount'
    }
})