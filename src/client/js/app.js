// validate the input
function checkInput(inputText){

    // source https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not/15458987
    let htmlRegex = new RegExp(/<[a-z][\s\S]*>/);

    let message = 'success';

    if (inputText === '' || inputText === null || inputText === undefined) {
        message = 'The input value cannot be empty!';
    } else if (htmlRegex.test(inputText)){
        message = 'Input value contains HTML tags, please use only plain text!';
    }

    return message;
}

// validate the dates
function checkDates(checkin, checkout){
    let message = 'success';

    if (checkin === (null || undefined || '') || checkout === (null || undefined || '')){
        message = 'Date inputs should have value';
    } else {

    }

    return message;
}

let divMessages = document.getElementsByClassName('messages');
function displayError(txt) {
    divMessages[0].innerHTML = '<div id="error-msg" class="alert alert-danger">'+
            '<span><i class="fas fa-times"></i></span> ' + txt +
            '<button type="button" onclick="return Client.toggleDisplay(1)" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button></div>';
}

function displaySuccess(txt) {
    divMessages[0].innerHTML = '<div id="success-msg" class="alert alert-success">' +
        '<span><i class="fas fa-info-circle"></i></span> ' + txt +
        '<button type="button" onclick="return Client.toggleDisplay(0)" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span></button></div>';
}

function displaySpinner(){
    document.getElementsByClassName('loader')[0].style.display = 'block';
    document.querySelector('main').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
}

function removeSpinner(){
    document.getElementsByClassName('loader')[0].style.display = 'none';
    document.querySelector('main').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
}

// hide error/info messages
function toggleDisplay(txt){
    let target;
    if(txt === 1) {
        target = document.getElementById("error-msg");
    } else {
        target = document.getElementById("success-msg");
    }
    if (target.style.display === 'none') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}

function serviceWorker(){
    //Add Service Workers - https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
}


export { checkInput, checkDates, displayError, displaySuccess, displaySpinner, removeSpinner, toggleDisplay, serviceWorker }