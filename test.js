let nums = [2, 11, 7, 11, 15];
let target = 9
let sum

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                sum = [i, j]
                return sum;
            }

        }
    }

}
console.log(twoSum(nums, target));