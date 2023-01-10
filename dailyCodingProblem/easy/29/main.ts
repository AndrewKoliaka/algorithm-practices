/**
 * This problem was asked by Amazon.
 * Run-length encoding is a fast and simple method of encoding strings.
 * The basic idea is to represent repeated successive characters as a single count and character.
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 * Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
 * You can assume the string to be decoded is valid.
 */

export function encode(str: string): string {
    let currentStr = '';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        currentStr = str[i];

        while (i < str.length - 1 && currentStr[currentStr.length - 1] === str[i + 1]) {
            currentStr += str[i];
            i++;
        }

        result += `${currentStr.length}${currentStr[0]}`;
    }

    return result;
}

export function decode(str: string): string {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!Number.isInteger(parseInt(str[i]))) {
            result += new Array(parseInt(str[i - 1])).fill(str[i]).join('');
        }
    }

    return result;
}

