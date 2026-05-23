// const checkVowel = (str) => {

//     // Saare vowels ko ek string me store kiya
//     // Isse hum easily check kar sakte hain
//     // ki current character vowel hai ya nahi
//     let vol = 'aeiou';

//     // Vowel count store karne ke liye variable
//     // Initially 0 kyuki abhi tak koi vowel nahi mila
//     let count = 0;

//     // Loop string ke har character pe chalega
//     // i = current index
//     for (let i = 0; i < str.length; i++) {

//         // Current character nikala
//         //
//         // Example:
//         // str = "hello"
//         //
//         // i = 0 → h
//         // i = 1 → e
//         let char = str[i];

//         // Check karo:
//         // kya current character vowels string me exist karta hai?
//         //
//         // Example:
//         // "aeiou".includes('e') → true
//         // "aeiou".includes('h') → false
//         if (vol.includes(char)) {

//             // Agar vowel mila toh count increase karo
//             count++;
//         }
//     }

//     // Total vowels return karo
//     return count;
// }


// // Input string
// let str = 'sandeep';

// // Function call
// console.log(checkVowel(str));


// const checkVowel2 = (str) => {

//     // Vowel count store karne ke liye
//     let count = 0;

//     // String ke har character pe loop chalega
//     for (let i = 0; i < str.length; i++) {

//         // Current character nikala
//         let char = str[i];

//         // Check karo:
//         // current character vowel hai ya nahi
//         //
//         // || means OR
//         // Agar koi bhi condition true hui
//         // toh vowel count increase hoga
//         if (
//             char === 'a' ||
//             char === 'e' ||
//             char === 'i' ||
//             char === 'o' ||
//             char === 'u'
//         ) {

//             // Vowel mila toh count increase karo
//             count++;
//         }
//     }

//     // Final vowel count return karo
//     return count;
// }


// // Input string
// let str1 = 'aeiousandep';

// // Function call
// console.log(checkVowel2(str1));

// function countVowels(str1) {
//  const vowels = 'aeiouAEIOU';
//  let count = 0;
//  for (let char of str1) {
//  if (vowels.includes(char)) count++;
//  }
//  return count;
// }
// console.log(countVowels("Hello World"));


const checkVowel = (str) => {
    let vowel = 'aeiouAEIOU'
    let count = 0

    for (let char of str) {
        if (vowel.includes(char)) {
            count++
        }
    }
    return count
}

console.log(checkVowel('helloo'))

// Is problem me hume string ke andar kitne vowels present hain woh count karna hai. Sabse pehle hum ek variable vowel banate hain jisme 
// saare vowels store kar dete hain, jaise aeiouAEIOU. Isme lowercase aur uppercase dono vowels rakhe gaye hain taki agar string me 
// capital letters aaye tab bhi program unhe identify kar sake.

// Uske baad hum ek count variable lete hain aur usko 0 se initialize karte hain. Ye variable total vowels ki counting store karega. 
// Initially count 0 hota hai kyuki abhi tak humne koi character check nahi kiya hota.

// Phir hum for...of loop use karte hain. Ye loop string ke har character ko one-by-one access karta hai. Har iteration me current 
// character char variable me store hota hai. Ab hum check karte hain ki current character vowels string ke andar present hai ya nahi.
//  Iske liye includes() method use karte hain. Agar current character vowel hota hai, toh condition true ho jati hai aur hum count++ 
// karke vowel count ko increase kar dete hain.

// Jab loop pura complete ho jata hai, tab count variable me total vowels ki value store hoti hai. Fir hum us value ko return kar 
// dete hain. Example ke liye "helloo" me e, o, aur o vowels hain, isliye output 3 aata hai.