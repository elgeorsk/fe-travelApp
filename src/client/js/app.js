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

async function postData (url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
};


export { checkInput, checkDates, displayError, displaySuccess, displaySpinner, removeSpinner, toggleDisplay }