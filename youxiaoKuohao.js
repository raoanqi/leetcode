/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    let stack = []
    let sLen = s.length
    if (sLen % 2 === 1) {
        return false
    }
    for (let i = 0; i < sLen; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            if (stack.pop() !== '(') {
                return false
            }
        } else if (s[i] === ']') {
            if (stack.pop() !== '[') {
                return false
            }
        } else if (s[i] === '}') {
            if (stack.pop() !== '{') {
                return false
            }
        }
    }
    return stack.length === 0
}