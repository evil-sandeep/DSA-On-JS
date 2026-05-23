const captialFirst=(str)=>{
    let firstWord=str.split(" ") 
     let result = "";
   for(let i=0; i<firstWord.length; i++){
     result +=firstWord[i][0].toUpperCase() + firstWord[i].slice(1) + " ";
    
   }
   
   return result;
}
let str="hello world i am sandeep learning javascript"
console.log(captialFirst(str))

//First we understand that a sentence contains many words together.
// To capitalize the first letter, we cannot directly work on the whole sentence at once.
// So the first step is to separate every word individually wherever a space appears.

// After separating the words, we take one word at a time.
// For every word, we only need to change the first character, not the complete word.

// So we mentally divide the word into two parts:

// first character
// remaining characters

// Then we convert the first character into uppercase and keep the remaining part unchanged.

// After that, we join both parts again to form the updated word.

// We repeat this same process for every word present in the sentence.

// Finally, all updated words are combined back together to create the final sentence where every word starts with a capital letter.