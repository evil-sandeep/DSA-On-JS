const findDuplicate = (str) => {

    const dupMap = {};

    for(let char of str){

        if(dupMap[char]){

            return char;
        }

        dupMap[char] = 1;
    }
}

let str='hello'

console.log(findDuplicate(str))


// We use a HashMap/Object to keep track of characters we have already seen. While traversing the string,
//  we check whether the current character is already present in the object. If it is present, that means the character
//   has appeared before and is therefore a duplicate, so we return it immediately. If it is not present, we store it in 
//   the object and continue. This allows us to find the first duplicate character in a single traversal of the string.