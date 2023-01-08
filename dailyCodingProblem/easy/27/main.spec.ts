import checkParentheses from './main';

describe('27', () => {
    it('should check validity of parentheses', () => {
        expect(checkParentheses('([])[]({})')).toBeTruthy();
        expect(checkParentheses('([)]')).toBeFalsy();
        expect(checkParentheses('((()')).toBeFalsy();
        expect(checkParentheses('(]')).toBeFalsy();
        expect(checkParentheses('()[]{}')).toBeTruthy();
        expect(checkParentheses('}')).toBeFalsy();
    });
});
