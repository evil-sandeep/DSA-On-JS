const removeDuplic=(nums)=>{

    let i=0;
    for(let j=1; j<nums.length; j++){ 
        if(nums[j]!==nums[i]){ //1==1 false , 2!==1 t,2==2 f,3!=2
            i++;               // ,i=1, ,i=2
            nums[i]=nums[j]    // ,1->2, 2->3
        }
    }
    return i+1
}

const nums=[1,1,2,2,3]
const k = removeDuplic(nums)

console.log(nums.slice(0, k))