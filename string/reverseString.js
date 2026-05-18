const reverseString = (str) => {

    // Empty string banaya
    // Isme hum reverse characters store karenge
    let reverse = '';

    // Loop last index se start hoga
    // str.length - 1 => last index
    // i-- => har baar 1 kam hoga
    // i >= 0 => jab tak 0 tak na pahunch jaye
    for (let i = str.length - 1; i >= 0; i--) {

        // Current character ko reverse string me add kar rahe hain
        // Example:
        // '' + 'l' = 'l'
        // 'l' + 'e' = 'le'
        // 'le' + 'h' = 'leh'
        reverse = reverse + str[i];
    }

    // Final reverse string return karo
    return reverse;
}


// Original string
let str = 'hel';

// Function call kiya
// Output console me print hoga
console.log(reverseString(str));