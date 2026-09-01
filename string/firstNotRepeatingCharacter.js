const notRepeatingChar=(str)=>{
let emptyObj={}
let result=[]
for(char of str){
    if(emptyObj[char]){
        emptyObj[char]++
    }else{
        emptyObj[char]=1
    }
}

for(char of str){
    if(emptyObj[char]===1){
        result.push(char)
        
    }
   
    if(result.length === 2){
        return result
    }
}
 

}
let str='hello'
console.log(notRepeatingChar(str))

// /Is problem me hume string ka pehla aisa character find karna hota hai jo sirf ek baar appear hua ho. Sabse pehle hum string ke har 
// character ka count store karte hain taki hume pata chal sake kaunsa character kitni baar repeat hua hai. Iske liye hum object/hashmap
//  use karte hain jisme character key hota hai aur uska occurrence count value hota hai.

// Jab saare characters ka count store ho jata hai, tab hum string ko dobara traverse karte hain. Hum original string ko isliye traverse
//  karte hain kyuki hume first non-repeating character original order me chahiye hota hai. Har character ke liye check karte hain ki uska 
//  count 1 hai ya nahi. Jis character ka count pehli baar 1 milta hai, wahi first non-repeating character hota hai aur usko return kar dete 
//  hain.


//if 2 unique charcter or more need then 
//Is logic me hum pehle string ke har character ka count object/hashmap me store karte hain. Uske baad hum string ko dobara traverse
//  karte hain aur check karte hain ki kaunsa character sirf ek baar appear hua hai. Agar kisi character ka count 1 hota hai, toh usko 
// result array me add kar dete hain kyuki wo unique/non-repeating character hai.

// Hum result array ka size continuously check karte rehte hain. Agar hume first 2 unique characters chahiye, toh jaise hi result array
// ki length 2 hoti hai, hum result return kar dete hain. Isi tarah agar hume aur zyada unique characters chahiye hote hain, toh hum
//  required count ke according result array ki length check kar sakte hain.
// let result=[]
// for(char of str){
//     if(emptyObj[char]===1){
//         result.push(char)
        
//     }
   
//     if(result.length === 2){
//         return result
//     } 
// }