const notRepeatingChar=(str)=>{
let emptyObj={}
for(char of str){
    if(emptyObj[char]){
        emptyObj[char]++
    }else{
        emptyObj[char]=1
    }
}

for(char of str){
    if(emptyObj[char]===1){
        return char
    }
}


}
let str='madam'
console.log(notRepeatingChar(str))

// /Is problem me hume string ka pehla aisa character find karna hota hai jo sirf ek baar appear hua ho. Sabse pehle hum string ke har 
// character ka count store karte hain taki hume pata chal sake kaunsa character kitni baar repeat hua hai. Iske liye hum object/hashmap
//  use karte hain jisme character key hota hai aur uska occurrence count value hota hai.

// Jab saare characters ka count store ho jata hai, tab hum string ko dobara traverse karte hain. Hum original string ko isliye traverse
//  karte hain kyuki hume first non-repeating character original order me chahiye hota hai. Har character ke liye check karte hain ki uska 
//  count 1 hai ya nahi. Jis character ka count pehli baar 1 milta hai, wahi first non-repeating character hota hai aur usko return kar dete 
//  hain.