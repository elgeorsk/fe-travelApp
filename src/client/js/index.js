import { checkInput, displayError, displaySpinner, displaySuccess, removeSpinner, toggleDisplay, serviceWorker } from './app';
import '../styles/media.scss';
import travelLogo from '../img/logo.png';

let myLogo = document.getElementById('travelLogo'); // get logo element from the page
myLogo.src = travelLogo; // set logo image

// get input element
let nextAdventureInput = document.getElementById('adventure');
// get submit element
let submitBtn = document.getElementById('submit');

nextAdventureInput.addEventListener('keypress', function(e) {
    // get inout values and focus textarea
    if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        submitBtn.click();
    }
});

submitBtn.addEventListener('click', () => {
    let message = checkInput(nextAdventureInput.value);
    if (message !== 'success'){
        displayError(message);
    } else {
        displaySpinner();
        fetch('/getGeonamesData?input=' + nextAdventureInput.value)
            .then(response => response.json())
            .then(data => {
                console.log(data.hasOwnProperty('totalResultsCount'));
                console.log(data);
                if(!data.hasOwnProperty('totalResultsCount')){
                    removeSpinner();
                   displayError(data.status.message);
                } else if (data.totalResultsCount === 0){
                    removeSpinner();
                    displaySuccess(`No results for ${nextAdventureInput.value}`);
                } else {
                    localStorage.setItem('geonamesObj', JSON.stringify(data));
                    window.location.href = 'addPlan.html';
                };
            });
    }
});

serviceWorker();

export { toggleDisplay }