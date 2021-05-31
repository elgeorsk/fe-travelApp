import '../styles/media.scss';
import travelLogo from '../img/logo.png';
import {displaySpinner, removeSpinner} from "./app";

let myLogo = document.getElementById('travelLogo'); // get logo element from the page
myLogo.src = travelLogo; // set logo image
let rowsElement = document.getElementsByClassName('rows')[0];

let myPlansJSON = JSON.parse(localStorage.getItem('myPlans')) === null ? [] : JSON.parse(localStorage.getItem('myPlans'));

let submitBtn = document.getElementById('submit');

if(myPlansJSON.length === 0){
    rowsElement.innerHTML = '<div class="row">\n' +
        '<p>No plans available.&nbsp;<a href="index.html">Let\'s create one!</a></p></div>';
} else {
    displaySpinner();
    addPlansUI();
    removeSpinner();
}

function addPlansUI() {
    let row = '';
    for (let i = 0; i < myPlansJSON.length; i++) {
        fetch('/getWeatherbitData?' + myPlansJSON[i].map)
            .then(response => response.json())
            .then(data => {
                row += '<div class="row">\n' +
                    '        <div class="planBox">\n' +
                    '          <div>\n' +
                    '            <h1>' + myPlansJSON[i].city + '</h1>\n' +
                    '          </div>\n' +
                    '          <div class="right">\n' +
                    '             <p class="toRight">From : ' + myPlansJSON[i].from + '<br/>To : ' + myPlansJSON[i].to +
                    '<br/>' + myPlansJSON[i].duration + ' day(s)</p></div>\n' +
                    '          <div class="left"><img src="https://www.weatherbit.io/static/img/icons/'+data[0].weather.icon+'.png"/>' +
                               '<p>'+ data[0].weather.description +'<br/>'+ parseInt(data[0].temp) +
                                  '<span> '+ String.fromCodePoint(0x2103) + '</span></p></div>' +
                              '<div class="left">\n' +
                    '           <p><span><i class="fas fa-sun"></i></span> '+ data[0].sunrise +'</p>\n' +
                    '           <p><span><i class="fas fa-moon"></i></span> '+ data[0].sunset +'</p></div>\n' +
                    '          <input type="submit" value="Remove" onclick="return Client.deleteMe(' + i + ')"/></div></div>';
                rowsElement.innerHTML = row;
                addBackgroundImage();
            });
    }
}

function addBackgroundImage(){
    let rows = document.getElementsByClassName('row');

    for (let i=0 ; i<rows.length; i++){
        rows[i].getElementsByClassName('planBox')[0].style.backgroundImage = 'linear-gradient(90deg, rgba(1,161,205,0.9) 19%, rgba(242,242,242,0.8) 100%), url('+ myPlansJSON[i].img +')';
    }
}

function deleteMe(id){
    displaySpinner();
    myPlansJSON.splice(id,1);
    localStorage.setItem('myPlans', JSON.stringify(myPlansJSON));
    window.location.reload();
}

export { deleteMe }