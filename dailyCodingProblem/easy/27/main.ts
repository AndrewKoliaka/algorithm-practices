/**
 * This problem was asked by Facebook.
 * Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
 * For example, given the string "([])[]({})", you should return true.
 * Given the string "([)]" or "((()", you should return false.
 */

const PARENTHESES_PAIRS: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}'
}

export default function checkParentheses(str: string): boolean {
    let temp: string[] = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] in PARENTHESES_PAIRS) {
            temp.push(str[i]);
            continue;
        }

        const lastOpenedParenthesis: string = temp[temp.length - 1];

        if (PARENTHESES_PAIRS[lastOpenedParenthesis] === str[i]) {
            temp.pop();
        } else {
            return false;
        }
    }

    return !temp.length
}
