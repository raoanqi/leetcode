/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }
    let strsLen = strs.length
    let res = []
    strs.forEach(strItem => {
        res.push(strItem.length)
    })
    let minLen = Math.min(...res)
    let prefix = ''
    for (let i = 0; i < minLen; i++) {
        for (let j = 0; j < strsLen; j++) {
            if (strs[j].indexOf(prefix + strs[0][i]) !== 0) {
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    return prefix
}