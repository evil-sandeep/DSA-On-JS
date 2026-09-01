const frequencyofcharacters=(str)=>{
   let freqChar={}
   for(let char of str){
    if(freqChar[char]){
        freqChar[char]++
    }else{
        freqChar[char]=1
    }
   }

   let maxFreq=0;
   let maxChar='';

   for(let char in freqChar){
    if(freqChar[char]>maxFreq){
        maxFreq=freqChar[char]
        maxChar=char
    }
   }
   return freqChar
}
let str='hhhooowwwwhhhhhhhh'
console.log(frequencyofcharacters(str))


//Is approach me hum object/hashmap ka use karke string ke har character ki frequency count karte hain aur fir highest frequency character
//  find karte hain.

// Sabse pehle hum string ko traverse karte hain using for...of loop. for...of loop string ke actual characters ko one-by-one deta hai. 
// Isliye hum is loop ko use karte hain kyuki hume directly characters chahiye hote hain, jaise:

// h
// e
// l
// l
// o

// Har character ke liye hum object me check karte hain ki wo pehle se present hai ya nahi. Agar present hota hai toh uska count increase
// kar dete hain, aur agar first time milta hai toh uska count 1 set kar dete hain. Is tarah object me har character ka total occurrence 
// count store ho jata hai.

// Uske baad hume highest frequency character find karna hota hai. Isliye hum object ko traverse karte hain using for...in loop. for...in 
// loop object ki keys deta hai. Yaha object ki keys characters hote hain, isliye loop hume:

// h
// e
// l
// o

// jaise characters deta hai. Fir hum:

// charCount[char]

// ki help se us character ki frequency access karte hain.

// Hum ek maxFreq variable me highest frequency store karte hain aur maxChar variable me us frequency wala character store karte hain. 
// Agar current character ki frequency maxFreq se badi hoti hai, toh hum maxFreq aur maxChar dono ko update kar dete hain.

// Finally maxChar highest frequency wala character hota hai aur usko return kar dete hain.