function checkInput(inputText){

    // source https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not/15458987
    let htmlRegex = new RegExp(/<[a-z][\s\S]*>/);

    let message = 'success';

    if (inputText === (null || undefined || '')) {
        message = 'The input value cannot be empty!';
    } else if (htmlRegex.test(inputText)){
        message = 'Input value contains HTML tags, please use only plain text!';
    }

    return message;
}

function checkDates(checkin, checkout){
    let message = 'success';

    if (checkin === (null || undefined || '') || checkout === (null || undefined || '')){
        message = 'Date input should have value';
    } else {

    }

    return message;
}

let divMessages = document.getElementsByClassName('messages');
function displayError(txt) {
    divMessages[0].innerHTML = '<div id="error-msg" class="alert alert-danger">'+
            '<span><i class="fas fa-times"></i></span> ' + txt +
            '<button type="button" onclick="return Client.toggleDisplay(event)" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button></div>';
}

function displaySuccess(txt) {
    divMessages[0].innerHTML = '<div id="success-msg" class="alert alert-success">' +
        '<span><i class="fas fa-info-circle"></i></span> ' + txt +
        '<button type="button" onclick="return Client.toggleDisplay(event)" class="close" data-dismiss="alert" aria-label="Close">' +
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

function toggleDisplay(){
    let target = document.getElementById('error-msg');
    if (target.style.display === 'none') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}

const getGeonamesData = async (geonamesBaseURL, geonamesParam, geonamesKey, data) => {
    const res = await fetch(geonamesBaseURL +
        'name_startsWith='+ data +'&name_equals='+ data + geonamesParam + geonamesKey);

    try {
        const json = await res.json();
        return json;
    } catch (error) {

        console.log('error', error);
    }
}

export { checkInput, checkDates, displayError, displaySuccess, displaySpinner, removeSpinner, toggleDisplay, getGeonamesData }