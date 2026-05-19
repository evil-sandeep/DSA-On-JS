const duplicateChar = (str) => {

    // Outer loop:
    // Har character ko one-by-one pick karega
    for (let i = 0; i < str.length; i++) {

        // Inner loop:
        // Current character ke baad wale characters check karega
        //
        // j = i + 1
        // kyuki current character ko next characters se compare karna hai
        for (let j = i + 1; j < str.length; j++) {

            // Agar dono characters same hain
            // matlab duplicate mila
            if (str[i] === str[j]) {

                
                // Duplicate character print karo
                console.log(str[i]);

                // Break use kiya
                // taki same duplicate baar-baar print na ho
                break;
            }
        }
    }
}


// Input string
let str = 'helloo';

// Function call
duplicateChar(str);