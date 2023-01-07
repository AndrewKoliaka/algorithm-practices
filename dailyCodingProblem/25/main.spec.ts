import TestRegex from './main';

describe('25', () => {
    it('should test regex', () => {
        const ref = new TestRegex();

        expect(ref.test('ray', 'ra.')).toBeTruthy();
        expect(ref.test('raymond', 'ra.')).toBeFalsy();
        expect(ref.test('chat', '.*at')).toBeTruthy();
        expect(ref.test('chats', '.*at')).toBeFalsy();
        expect(ref.test('abcde', '..*')).toBeTruthy();
    });
});
