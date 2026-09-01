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

let nums=[2,3,2,3,3,4,3,2,2,3,4234,23,23,2,34,32,4,23,3,23,23,23]
let val=34
// console.log(removeElemet(nums,val))
console.log(nums.slice(0,removeElemet(nums,val)))



