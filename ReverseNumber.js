/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    let flag = x < 0 ? true : false
    let temp = (Math.abs(x) + '').split('').reverse().join('')
    let res = flag ? -Number(temp) : Number(temp)
    if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        return 0
    }
    return res
}

console.log(reverse(1230))