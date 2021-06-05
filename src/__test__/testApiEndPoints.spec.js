//https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
// https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test - babelrc configuration
// https://www.codota.com/code/javascript/functions/supertest/Response/body

const request = require('supertest');
import app from '../server/index';

describe('Check getGeonamesData endpoint', () => {
    it('Check for value "Skiathos" - Response should be 200 and lat=39.16227 and lng=23.49089', async () => {
        let res = await request(app)
            .get('/getGeonamesData?input=Skiathos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
                expect(res.body.geonames[0].lat).toEqual('39.16227');
                expect(res.body.geonames[0].lng).toEqual('23.49089');
            });
    });
});

describe('Check getPixaBayData endpoint', () => {
    it('Check for value "Skiathos" - Response should be 200', async () => {
        let res = await request(app)
            .get('/getPixaBayData?input=Skiathos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('Check getWeatherbitData endpoint', () => {
    it('Check for value "lat=39.16227 and lon=23.49089" - Response should be 200', async () => {
        let res = await request(app)
            .get('/getWeatherbitData?input=&lat=39.16227&lon=23.49089')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
                expect(res.body[0].state_code).toEqual('ESYE14');
                expect(res.body[0].country_code).toEqual('GR');
            });
    });
})