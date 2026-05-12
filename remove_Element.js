const removeElemet=(nums,val)=>{
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j]!==val){
            nums[i]=nums[j]
            i++
        }
    }
    return i
}

let nums=[2,3,2,3]
let val=3
// console.log(removeElemet(nums,val))
console.log(nums.slice(0,removeElemet(nums,val)))



