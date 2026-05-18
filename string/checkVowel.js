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