"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canConsumeForm = exports.isCodeInRange = void 0;
/**
 * Returns if a specific http code is in a given code range
 * where the code range is defined as a combination of digits
 * and "X" (the letter X) with a length of 3
 *
 * @param codeRange string with length 3 consisting of digits and "X" (the letter X)
 * @param code the http status code to be checked against the code range
 */
function isCodeInRange(codeRange, code) {
    // This is how the default value is encoded in OAG
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    }
    else {
        var codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for (var i = 0; i < codeString.length; i++) {
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
exports.isCodeInRange = isCodeInRange;
/**
* Returns if it can consume form
*
* @param consumes array
*/
function canConsumeForm(contentTypes) {
    return contentTypes.indexOf('multipart/form-data') !== -1;
}
exports.canConsumeForm = canConsumeForm;
