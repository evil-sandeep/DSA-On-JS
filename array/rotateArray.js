const rotateArray=(nums)=>{
let  left=0;
let  right=nums.length-1;
let temp=0
for(right;left<right;right--){
    temp=nums[right];
    nums[right]=nums[left]
    nums[left]=temp
    left++
}
return nums
}

let nums=[9,0,7,8,9,9,6,3,1,5]
console.log(rotateArray(nums))