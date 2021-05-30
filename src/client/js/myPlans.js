import '../styles/media.scss';

import travelLogo from '../img/logo.png';

let myLogo = document.getElementById('travelLogo'); // get logo element from the page
myLogo.src = travelLogo; // set logo image

// TODO getData from weatherbit
// https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
// TODO getData from pixarbay
//



function createPlanBox(){
    //TODO
    // <div className="row">
    //     <div className="planBox" id="tr1">
    //         <div className="group">
    //             <div className="left">
    //                 <h1>Skiathos</h1>
    //             </div>
    //             <div className="right">
    //                 <p style="float: right">15 days</p>
    //                 <p>From - To</p>
    //             </div>
    //         </div>
    //
    //         <div className="group">
    //             <div className="left">
    //                 <h1>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    //                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    //                          className="feather feather-sun">
    //                         <circle cx="12" cy="12" r="5"></circle>
    //                         <line x1="12" y1="1" x2="12" y2="3"></line>
    //                         <line x1="12" y1="21" x2="12" y2="23"></line>
    //                         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    //                         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    //                         <line x1="1" y1="12" x2="3" y2="12"></line>
    //                         <line x1="21" y1="12" x2="23" y2="12"></line>
    //                         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    //                         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    //                     </svg>
    //                     Sunny <br/> 16<span className="degree">°c</span></h1>
    //                 <p>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    //                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    //                          className="feather feather-droplet">
    //                         <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    //                     </svg>
    //                     Humidity : 26%
    //                 </p>
    //                 <p>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    //                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    //                          className="feather feather-wind">
    //                         <path
    //                             d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
    //                     </svg>
    //                     Wind : 26 km/h
    //                 </p>
    //             </div>
    //             <div className="right">
    //             </div>
    //         </div>
    //         <input type="submit" value="Remove"/>
    //     </div>
    // </div>
}

function addBackgroundImage(planId, planImg){
    // #plan1
    // {
    //     background-image: -moz-linear-gradient(90deg, rgba(1,161,205,1) 19%, rgba(242,242,242,0.6) 100%), url("../img/default.jpg");
    //     background-image: -webkit-linear-gradient(90deg, rgba(1,161,205,1) 19%, rgba(242,242,242,0.6) 100%), url("../img/default.jpg");
    //     background-image: linear-gradient(90deg, rgba(1,161,205,0.8) 19%, rgba(242,242,242,0.6) 100%), url("../img/default.jpg");
    // }
}