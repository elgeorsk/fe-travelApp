import {checkInput, checkDates, displayError, displaySpinner, removeSpinner, toggleDisplay} from "./app";
import '../styles/media.scss';
import travelLogo from '../img/logo.png';

let myLogo = document.getElementById('travelLogo'); // get logo element from the page
myLogo.src = travelLogo; // set logo image

let data = JSON.parse(localStorage.getItem('geonamesObj'));
let myPlansJSON = [];
let cityInput = document.getElementById('city');
let checkinInput = document.getElementById('checkin');
let checkoutInput = document.getElementById('checkout');
let datalistCities = document.getElementById('cities');

let str = '';
for (let i=0; i< data.geonames.length; i++){
    if (i === 0){
        cityInput.value = data.geonames[i].toponymName + ', ' + data.geonames[i].countryName + ', ' +  data.geonames[i].adminName1;

    }
    str += '<option value="' + data.geonames[i].toponymName + ', ' + data.geonames[i].countryName + ', ' +  data.geonames[i].adminName1 + '" ' +
        'data-value="&lat=' + data.geonames[i].lat + '&lon=' + data.geonames[i].lng +'"/>';
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

        if((checkinDay || checkoutDay) < today){
            displayError('Date cannot be in the past!');
        } else if (checkinDay > checkoutDay) {
            displayError('Check-in date cannot be after check-out date!');
        } else {
            displaySpinner();
            //TODO add to localStorage
            //myPlansJSON.push('{lala}');
            localStorage.setItem('myPlans', JSON.stringify(myPlansJSON));
            window.location.href = 'myPlans.html';
        }
    }
});

export { toggleDisplay }