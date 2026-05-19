const palindrome=(str)=>{
    let rev='';
    for(let i=str.length-1; i>=0; i--){
        rev=rev+str[i]
    }
     if(rev===str){
        return ('yes it is a palindrome no')
    }else{
        return('no its not a palindrome no')
    }

}
let str='madsweram'
// // console.log(palindrome(str))
// Is approach me hum pehle original string ka reverse version banate hain. Hum string ke last character se loop start karte hain aur har character ko rev string me add karte jaate hain. Is tarah original string ka ulta string create ho jata hai. Uske baad hum original string aur reversed string ko compare karte hain. Agar dono same hote hain, iska matlab string palindrome hai. Agar same nahi hote, toh palindrome nahi hai.

const palindrome2=(str)=>{
     let i=0;
     for(let j=str.length-1; j>=0; j--){
        if(str[i]===str[j]){
            i++
        }else{
            return false
        }
     }
     return true
}
console.log(palindrome2(str))

//Is method me hum string ko reverse nahi karte. Hum directly starting aur ending characters ko compare karte hain. Ek pointer start se chalta hai (i) aur dusra end se (j). Har step me check karte hain ki dono characters same hain ya nahi. Agar kisi bhi point par characters different milte hain, toh immediately false return kar dete hain kyuki palindrome condition fail ho gayi. Agar pura loop complete ho jata hai aur saare characters match karte hain, toh string palindrome hoti hai.

const palindrome3 = (str) => {

    // Left pointer start se
    let left = 0;

    // Right pointer end se
    let right = str.length - 1;

    // Jab tak left < right
    while (left < right) {

        // Agar characters same nahi hain
        // toh palindrome nahi hai
        if (str[left] !== str[right]) {
            return false;
        }

        // Left ko aage badhao
        left++;

        // Right ko peeche lao
        right--;
    }

    // Sab characters same nikle
    return true;
}

console.log(palindrome3("madam")); // true
console.log(palindrome3("hello")); // false

//Ye palindrome check karne ka sabse optimized aur interview-friendly method hai. Isme hum 2 pointers use karte hain:

// left → string ke start se
// right → string ke end se

// Hum dono side ke characters compare karte hain. Agar dono same hote hain, toh:

// left pointer ko aage badhate hain
// right pointer ko peeche laate hain

// Ye process tab tak chalta hai jab tak dono pointers middle me mil nahi jaate. Agar kisi bhi point par characters different milte hain, toh string palindrome nahi hoti aur hum false return kar dete hain. Agar loop complete ho jata hai, iska matlab saare characters mirror position par same the, toh string palindrome hai.

