import { checkInput, displayError, displayLoader, toggleDisplay } from './messages';
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

submitBtn.addEventListener('click', function (e){
    let message = checkInput(nextAdventureInput.value);
    if (message !== 'success'){
        displayError(message);
    } else {
        displayLoader();
        localStorage.setItem('nextAdventureInput',nextAdventureInput.value);
        window.location.href = 'addPlan.html';
    };
});

export { toggleDisplay }

