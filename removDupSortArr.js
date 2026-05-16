const remDup=(nums)=>{
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[j]!==nums[i]){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
    
}

let num=[1,2,2,3]
let k = remDup(num);
console.log(num.splice(0,k))
