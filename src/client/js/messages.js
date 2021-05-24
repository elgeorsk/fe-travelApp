let divMessages = document.getElementsByClassName('messages');

function checkInput(inputText){

    let message = 'success';

    if (inputText === (null || undefined || '')) {
        message = 'The input value cannot be empty!';
    }

    return message;
}

function displayError(txt) {
    divMessages[0].innerHTML = '<div id="error-msg" class="alert alert-danger">'+
        '<span><i class="fas fa-times"></i></span> ' + txt +
        '<button type="button" onclick="return Client.toggleDisplay(event)" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span></button></div>'
}

function displaySuccess(txt) {
    divMessages[0].innerHTML = '<div id="success-msg" class="alert alert-success">' +
        '<span><i class="fas fa-info-circle"></i></span> ' + txt +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span></button></div>'
}

function displayLoader(){
    document.body.innerHTML = '<div class="loader"></div>';
}

function toggleDisplay(){
    let target = document.getElementById('error-msg');
    if (target.style.display === 'none') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}

export { checkInput, displayError, displayLoader, toggleDisplay }