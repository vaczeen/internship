let nums = [2, 3, 1, 1, 4]
let n = nums.length


const minJump = (nums) => {
    let sum
    let jump
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            sum += nums[i]
            jump = n - sum
            return jump;
        }
    }
}
console.log(minJump(nums));