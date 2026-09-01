const findUnique=(nums)=>{
   let uniqElemp={}
   for(let uniqNo of nums){
      if(uniqElemp[uniqNo]){
        uniqElemp[uniqNo]++
      }else{
        uniqElemp[uniqNo]=1
      }
   }

   for(let key in uniqElemp){
   if(uniqElemp[key]===1){
    return key
   }
   }
}
// let nums=[1,2,1,3,2]
let str='hello'
console.log(findUnique(str))