/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
    return !needle ? 0 : haystack.indexOf(needle)
}