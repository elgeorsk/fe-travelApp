import { checkInput, checkDates, displayError, displaySpinner, removeSpinner, toggleDisplay, displaySuccess } from './app';
import '../styles/media.scss';
import travelLogo from '../img/logo.png';
import defaultImg from '../img/default.jpg';

let myLogo = document.getElementById('travelLogo'); // get logo element from the page
myLogo.src = travelLogo; // set logo image

let data = JSON.parse(localStorage.getItem('geonamesObj'));
// let variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2)) -- if else one line
let myPlansJSON = JSON.parse(localStorage.getItem('myPlans')) === null ? [] : JSON.parse(localStorage.getItem('myPlans'));
console.log('myPlansJSON', myPlansJSON);
// get html page elements
let cityInput = document.getElementById('city');
let checkinInput = document.getElementById('checkin');
let checkoutInput = document.getElementById('checkout');
let datalistCities = document.getElementById('cities');

// get the data-value of the option
let dataValue = '';

let str = '';
for (let i=0; i< data.geonames.length; i++){
    if (i === 0){
        cityInput.value = data.geonames[i].toponymName + ', ' + data.geonames[i].countryName + ', ' +  data.geonames[i].adminName1;

    }
    str += '<option value="' + data.geonames[i].toponymName + ', ' + data.geonames[i].countryName + ', ' +  data.geonames[i].adminName1 + '" ' +
        'data-value="lat=' + data.geonames[i].lat + '&lon=' + data.geonames[i].lng +'"/>';
}

datalistCities.innerHTML = str;

// get submit element
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function (e) {
    let message = checkInput(cityInput.value);
    let dateMessage = checkDates(checkinInput.value ,checkoutInput.value);
    if (message !== 'success') {
        displayError(message);
    } else if (dateMessage !== 'success') {
        displayError(dateMessage);
    } else {
        // https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
        let today = new Date().toISOString().slice(0,10);
        let checkinDay = new Date(checkinInput.value).toISOString().slice(0,10);
        let checkoutDay = new Date(checkoutInput.value).toISOString().slice(0,10);

        if (findInputValue()) {
            if((checkinDay || checkoutDay) < today){
                displayError('Date cannot be in the past!');
            } else if (checkinDay > checkoutDay) {
                displayError('Check-in date cannot be after check-out date!');
            } else {
                displaySpinner();
                let inputSplit = cityInput.value.split(', ');
                fetch('/getPixaBayData?input=' + inputSplit[0] + '+' + inputSplit[1])
                    .then(response => response.json())
                    .then(data => {
                        if(!data.hasOwnProperty('totalHits')){
                            removeSpinner();
                            displayError(data.status.message);
                        } else if (data.totalHits === 0){
                            removeSpinner();
                            // TODO default image
                            let obj = { city: cityInput.value, map: dataValue, img: defaultImg };
                            myPlansJSON.push(obj);
                            localStorage.setItem('myPlans', JSON.stringify(myPlansJSON));
                            window.location.href = 'myPlans.html';
                        } else {
                            let obj = { city: cityInput.value, map: dataValue, img: data.hits[0].largeImageURL };
                            myPlansJSON.push(obj);
                            localStorage.setItem('myPlans', JSON.stringify(myPlansJSON));
                            window.location.href = 'myPlans.html';
                        };
                    });
            }
        } else {
            displayError('Select a value from dropdown menu');
        }
    }
});

function findInputValue(){
    let result = false;
    let options = datalistCities.options;
    for (let i=0; i< options.length; i++) {
        if(cityInput.value === options[i].value){
            dataValue = options[i].getAttribute('data-value');
            result = true;
        }
    }
    return result;
}

export { toggleDisplay }