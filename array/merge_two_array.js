const mergeTwoArra=(arr1,arr2)=>{
    let newArray=[]
    for(let i=0; i<arr1.length; i++){
        newArray .push(arr1[i])
    }
    for(let j=0; j<arr2.length; j++){
        newArray .push(arr2[j])
    }
    return newArray
}

let arr1=[1,2,3]
let arr2=[4,5,6]

console.log(mergeTwoArra(arr1,arr2))

//Is problem me hume 2 arrays ko combine karke ek single array banana hota hai. Iske liye hum ek new empty array banate hain jisme final merged elements store honge.

// Sabse pehle hum first array par loop chalate hain aur uske har element ko push() method ki help se new array me add kar dete hain. Isse first array ke saare elements new array me aa jaate hain.

// Uske baad hum second array par loop chalate hain aur uske har element ko bhi same new array me push kar dete hain. Ab new array me dono arrays ke saare elements present hote hain.

// Finally hum merged array ko return kar dete hain.





//concat() Method
// const mergeArray = (arr1, arr2) => {

//     return arr1.concat(arr2);
// }

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// console.log(mergeArray(arr1, arr2));


// //Spread Operator Method
// const mergeArray = (arr1, arr2) => {

//     return [...arr1, ...arr2];
// }





// const mergeTwoArray = (arr1, arr2) => {

//     // Empty array
//     let newArray = [];

//     // Next insert position track karega
//     let index = 0;


//     // First array traverse
//     for(let i = 0; i < arr1.length; i++) {

//         // Value manually insert ki
//         newArray[index] = arr1[i];

//         // Next position
//         index++;
//     }


//     // Second array traverse
//     for(let j = 0; j < arr2.length; j++) {

//         // Value manually insert ki
//         newArray[index] = arr2[j];

//         // Next position
//         index++;
//     }

//     return newArray;
// }


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// console.log(mergeTwoArray(arr1, arr2));

// Is approach me hum .push() method use nahi karte. Hum manually array ke indexes manage karte hain. Sabse pehle ek empty array banate hain aur ek index variable lete hain jo batata hai ki next value kaha insert hogi.

// Phir first array par loop chala kar har element ko:

// newArray[index]

// par store kar dete hain aur index ko increase kar dete hain. Jab first array complete ho jata hai, tab second array ke elements bhi same tarike se next positions par insert kar dete hain.

// Is tarah hum bina .push() use kiye manually merged array bana lete hain.