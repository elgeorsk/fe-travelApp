import {checkDates } from '../client/js/app';

describe('Testing the entered value', () => {
    test('Testing empty dates', () => {
        // Invalid value entered
        expect(checkDates('','')).toBe('Date inputs should have value');
    });

    test('Testing null dates', () => {
        // Invalid value entered
        expect(checkDates('', null)).toBe('Date inputs should have value');
    });

    test('Testing undefined dates', () => {
        // Invalid value entered
        expect(checkDates(undefined , '')).toBe('Date inputs should have value');
    });

    test('Testing success dates', () => {
        // Invalid value entered
        expect(checkDates('01/06/2021','02/06/2021')).toBe('success');
    });
});