// const missingNo=(nums)=>{
//     let sortNums=nums.sort((a,b)=>a-b)
//     console.log(sortNums)
//    for(let i=0; i<nums.length-1;i++){
//     let current=sortNums[i]+1;
//     let next=sortNums[i+1]
//     if(current!==next){
//         return current
//     }
//    }
// }
// let nums=[1,3,2,6,4,5,9,7,8,10,11,13]
// console.log(missingNo(nums))

// Is problem me hume array me missing number find karna hota hai. Array me numbers continuous sequence me hote hain, 
// lekin unme se ek number missing hota hai. Array sorted bhi ho sakta hai aur unsorted bhi. Agar array unsorted hota hai, 
// toh sabse pehle usko ascending order me sort karte hain taki numbers proper sequence me aa jaayein.
// Sort karne ke baad: Ab hum array ko loop se traverse karte hain aur har current element ka expected next value nikalte hain.
//  Expected next value ka matlab hota hai: Uske baad hum us expected value ko actual next element se compare karte hain. Lekin actual 
// next element: 13

// hai. Iska matlab:
// 👉 12 missing hai.

// Agar current number + 1 aur next element same hote hain, iska matlab sequence correct chal raha hai aur koi number missing nahi hai.
//  Jis point par mismatch milta hai,
//  wahi missing number hota hai aur usko return kar dete hain.

//  Agar array unsorted hai toh pehle sort karo
// Har current element ka expected next value nikalo
// Usko actual next element se compare karo
// Jaha mismatch mile → wahi missing number hai ✅

const missingNo=(nums)=>{
    let n=Math.max(...nums)
    
    let sumNo=(n * (n + 1)) / 2
   
    let numsSum=nums.reduce((n,m)=>{
        return n+m
    })
    let missingNumber=sumNo-numsSum
   return missingNumber;
}
let nums=[1,2,4]
console.log(missingNo(nums)) 


// //Is approach me hum missing number find karne ke liye mathematical formula use karte hain. Sabse pehle hum array ka highest number (n)
// find karte hain, kyuki sequence normally 1 se n tak continuous hona chahiye. Uske baad hum formula ki help se 1 se n tak ke saare numbers 
//  ka expected total sum calculate karte hain.

// Formula:n*n+1/2



// Ye formula hume batata hai ki agar sequence complete hota, toh total sum kitna hona chahiye tha.

// Uske baad hum reduce() method ki help se array ke actual elements ka sum nikalte hain. Kyuki array me ek number missing hota hai, 
// isliye actual sum expected sum se thoda chhota hota hai.

// Finally hum:

// expected sum - actual sum

// karte hain. Dono sums ke beech ka difference wahi missing number hota hai.