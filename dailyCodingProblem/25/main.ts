/**
 * This problem was asked by Facebook.
 *
 * Implement regular expression matching with the following special characters:
 * . (period) which matches any single character
 * * (asterisk) which matches zero or more of the preceding element
 *
 * That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.
 * For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.
 * Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.
 */

const PERIOD = '.';
const ASTERISK = '*';

export default class TestRegex {
    test(str: string, regex: string): boolean {
        const regexArr = this.splitRegex(regex);
        let tempStr = str;

        while (tempStr) {

            // active regex string
            const currentRegexChunk = regexArr[0];

            if (currentRegexChunk === ASTERISK) {

                // check if there are more regex chunks exist
                if (regexArr.length > 1) {

                    // next regex chunk string
                    const nextRegexChunk = regexArr[1];

                    // check if current string starts with next regex chunk
                    if (tempStr.startsWith(nextRegexChunk)) {

                        // if so cut this chunk from current regex array and cut this text from current string
                        // along with current asterisk
                        tempStr = tempStr.slice(nextRegexChunk.length);
                        regexArr.shift();
                        regexArr.shift();
                    } else {

                        // if does not start - cut 1 char from current string and continue
                        tempStr = tempStr.slice(1);
                    }
                } else {

                    // return true if asterisk is the last char in regex
                    return true;
                }
            } else if (currentRegexChunk === PERIOD) {

              // cut 1 char from current string and remove first element from current regex arr
              tempStr = tempStr.slice(1);
              regexArr.shift();
            } else {

                // check if current string starts with regex char
                if (tempStr.startsWith(currentRegexChunk)) {

                    // if so cut this substring from current string and remove first element from current regex arr
                    tempStr = tempStr.slice(currentRegexChunk.length);
                    regexArr.shift();
                } else {

                    // return false if it does not match
                    return false;
                }
            }
        }

        // return true if every chunk of regex arr matched the string
        return true;
    }
    splitRegex(regex: string): string[] {
        const regexArr = [];
        let temp = '';

        for (let i = 0; i < regex.length; i++) {
            if (regex[i] === PERIOD || regex[i] === ASTERISK) {
                if (temp) {
                    regexArr.push(temp);
                }

                regexArr.push(regex[i]);
                temp = '';

                continue;
            }

            temp += regex[i];

            if (i === regex.length - 1) {
                regexArr.push(temp);
            }
        }

        return regexArr;
    }
}
