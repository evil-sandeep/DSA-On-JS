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

//Is problem me hume ek string ko ulta (reverse) karna hota hai. Example agar string "hel" hai, toh output "leh" aana chahiye. Iske liye hum ek empty string banate hain jiska naam reverse rakhte hain. Ye empty string reverse characters ko store karegi.

// Uske baad hum loop ko string ke last index se start karte hain. Kyuki reverse karne ke liye hume characters ko end se beginning tak lena hota hai. str.length - 1 string ka last index deta hai. Har iteration me hum current character ko reverse string me add karte jaate hain.