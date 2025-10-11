//remove duplicate from sorted array 

var removeDuplicates = function (nums) {
    let i=0;//1st index is always unique
    for(let j=1;j<nums.length;j++){ 
        if(nums[j]!==nums[i]){//1st 0=0 skip, 2nd-1=/=0
            i++;                //1
            nums[i]=nums[j]     //0,1
        }
    }
    return i+1
};

let nums=[0,0,1,1,1,2,2,2,3,4,5,5,5,6]
let k=removeDuplicates(nums)
console.log(k)
console.log(nums.slice(0,k))

