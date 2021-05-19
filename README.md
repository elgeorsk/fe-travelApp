# Project Instructions

Build a travel app. Utilize multiple APIs to present a user with all they need to know about their trip.

The APIs that we are going to use in this implementations are:
* [Geonames](http://www.geonames.org/export/web-services.html) 
* [Weatherbit.io](https://www.weatherbit.io/api)
* [Pixabay](https://pixabay.com/api/docs/)

## Getting started

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

You can run the project in `development` or `production` mode by using the following commands:

- Development mode: `npm run build-dev`
- Production mode: `npm run build-prod`

Note: scripts can be found in `package.json`

## Setting up the APIs

###1. GeoNames
The GeoNames geographical database covers all countries and contains over eleven million placenames.
####Step 1: Signup for API key
You need to go [here](). Signing up and you will get the API key.

####Step 2: Fetch data
In order to retrieve the data from the API, you need to use the following code
TODO - http://www.geonames.org/export/ajax-postalcode-autocomplete.html

###2. Weatherbit.io
Weather API you can retrieve current weather observations from over 47,000 live weather stations, historical weather data for the past 10 years from our archive of more than 120,000 stations, and highly localized weather forecasts for any point on the globe using the world's most trusted weather models.

###3. Pixabay
RESTful interface for searching and retrieving free images and videos released under the Pixabay License.

###4. Environment Variables
Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.
- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
GEONAMES_USERNAME=**************************
WEATHERBIT_API_KEY=**************************
PIXABAY_API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```

## Deploying

A great step to take with your finished project would be to deploy it! 

Checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
