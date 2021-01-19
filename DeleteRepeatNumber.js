/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = function (nums) {
    let len = nums.length
    if (len === 0 || len === 1) {
        return nums
    }
    let j = 0
    for (let i = 0; i < len - 1; i++) {
        if (nums[i - j] === nums[i - j + 1]) {
            nums.splice(i, 1)
            j++
        }
    }
    return nums
}