let nums = [2, 3, 1, 1, 4];
const minJump = (nums) => {
    let jumps 
    for (let i = 1; i < nums.length; i++) {
        jumps[i] = Infinity;
        for (let j = 0; j < i; j++) {
            if (nums[j] >= i - j && jumps[j] !== Infinity) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            }
        }
    }
    return jumps[nums.length - 1];
}

console.log(minJump(nums)); 