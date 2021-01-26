const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);
const removed = nums.splice(4,5,77);


console.log(nums);
console.log(part);
console.log(removed);

const together = nums.join(",");
console.log(together);