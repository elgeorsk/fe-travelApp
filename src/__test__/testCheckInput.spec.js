import { checkInput } from '../client/js/app';

describe('Testing the entered value', () => {
    test('Testing empty text', () => {
        // Invalid value entered
        expect(checkInput('')).toBe('The input value cannot be empty!');
    });

    test('Testing null text', () => {
        // Invalid value entered
        expect(checkInput(null)).toBe('The input value cannot be empty!');
    });

    test('Testing undefined text', () => {
        // Invalid value entered
        expect(checkInput(undefined)).toBe('The input value cannot be empty!');
    });

    test('Testing html tags text', () => {
        // Invalid value entered
        expect(checkInput('<h1>Hello</h1>')).toBe('Input value contains HTML tags, please use only plain text!');
    });

    test('Testing success text', () => {
        // Invalid value entered
        expect(checkInput('Skiathos')).toBe('success');
    });
});