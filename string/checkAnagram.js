const anagram=(nums1,nums2)=>{
    if(nums1.length===nums2.length){
        let num1Sort=nums1.split('').sort().join('')
        let num2Sort=nums2.split('').sort().join('')
        if(num1Sort===num2Sort){
           return 'anagram'
        }else{
           return 'not anagram'
            
        }

    }else{
        return 'not anagram because it not match the length of both word'
    }
}

let nums1='listeeeen'
let nums2='ssssilent'

console.log(anagram(nums1,nums2))

// Anagram Check — Theory Logic 🧠

// Is problem me hume check karna hota hai ki kya dono strings anagram hain ya nahi. Anagram ka matlab hota hai ki dono strings me same 
// characters same quantity me present hone chahiye, bas unka order different ho sakta hai.

// Sabse pehle hum dono strings ka length check karte hain. Agar dono ka length different hota hai, toh wo kabhi bhi anagram nahi ho sakte.
//  Kyuki characters ki total quantity hi different hai. Isliye hum directly false ya "not anagram" return kar dete hain.

// Agar dono strings ka length same hota hai, tab hum dono strings ko alphabetical order me arrange karte hain. Lekin sort() method 
// directly string par work nahi karta, isliye pehle hum string ko split('') method se array me convert karte hain. Fir sort() method use 
// karke characters ko alphabetical order me arrange karte hain. Uske baad join('') use karke array ko wapas string me convert kar dete 
// hain.

// Example:

// listen

// Sort karne ke baad:

// eilnst

// Second string:

// silent

// Sort karne ke baad:

// eilnst

// Ab hum dono sorted strings ko compare karte hain. Agar dono same hote hain, iska matlab dono strings me same characters same quantity me present hain. Isliye strings anagram hain. Agar sorted strings different hoti hain, toh strings anagram nahi hoti.

// Main Logic Simple Words Me 🚀
// Dono strings ka length check karo
// Dono strings ko array me convert karo
// Alphabetically sort karo
// Wapas string me convert karo
// Dono sorted strings compare karo
// Same → anagram ✅
// Different → not anagram ❌



// another approach

const anagramm = (str1, str2) => {

    // Step 1:
    // Dono strings ka length same hona chahiye
    // Agar different hua toh direct not anagram
    if (str1.length !== str2.length) {
        return false;
    }

    // Step 2:
    // Character counts store karne ke liye object banaya
    let count = {};

    // Step 3:
    // First string ke har character ka count store karo
    for (let char of str1) {

        // Agar character already present hai
        // toh count increase karo
        //
        // warna 1 set karo
        count[char] = (count[char] || 0) + 1;
    }


    // Step 4:
    // Second string traverse karo
    for (let char of str2) {

        // Agar character object me nahi hai
        // ya count already 0 hai
        //
        // matlab mismatch hai
        if (!count[char]) {
            return false;
        }

        // Match mila toh count decrease karo
        count[char]--;
    }


    // Step 5:
    // Saare counts perfectly match hue
    return true;
}


// Input strings
let str1 = 'listen';
let str2 = 'silent';

// Function call
console.log(anagramm(str1, str2));

// Anagram Check Using HashMap — Theory Logic 🧠

// Is approach me hum strings ko sort nahi karte. Hum ek object/hashmap use karte hain jisme characters ka count store hota hai. Is method ka main idea ye hai ki agar dono strings anagram hain, toh dono me har character same number of times present hoga.

// Sabse pehle hum dono strings ka length check karte hain. Agar lengths different hote hain, toh strings kabhi bhi anagram nahi ho sakti, kyuki total characters ki quantity hi different hai. Isliye directly false return kar dete hain.

// Uske baad hum ek empty object banate hain jiska naam count rakhte hain. Ab hum first string ko traverse karte hain aur har character ka count object me store karte hain. Agar character pehle se object me present hota hai, toh uska count increase kar dete hain. Agar pehli baar milta hai, toh uska count 1 set kar dete hain.

// Example:

// listen

// Object banega:

// {
//  l:1,
//  i:1,
//  s:1,
//  t:1,
//  e:1,
//  n:1
// }

// Ab hum second string ko traverse karte hain. Har character ke liye check karte hain ki kya wo object me present hai aur uska count available hai ya nahi. Agar character object me nahi milta ya uska count already 0 hota hai, iska matlab strings anagram nahi hain aur hum direct false return kar dete hain.

// Agar character mil jata hai, toh uska count decrease kar dete hain. Iska matlab second string ka character successfully first string ke character se match ho gaya.

// Agar pura loop complete ho jata hai aur koi mismatch nahi milta, toh iska matlab dono strings me same characters same quantity me present hain. Isliye strings anagram hain aur hum true return kar dete hain.

// Main Logic Simple Words Me 🚀
// Dono strings ka length check karo
// First string ke characters ka count object me store karo
// Second string ke characters ke counts decrease karo
// Agar koi character missing mila → not anagram
// Agar saare counts perfectly match hue → anagram ✅