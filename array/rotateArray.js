// const rotateArray=(nums,k)=>{
// for(let i=0;i<k; i++){ //
//     let last=nums.pop();//
//    nums.unshift(last)

// }
// return nums
// }

// let nums=[9,0,7,8,9,9,6,3,1,5]
// let k=3
// console.log(rotateArray(nums,k))




const rotateArray = (nums, k) => {

    // Outer loop:
    // Ye decide karega kitni baar rotation karna hai
    // Agar k = 3 hai toh 3 baar rotation hoga
    for (let j = 0; j < k; j++) {

        // Last element ko save kar liya
        // Kyuki shifting ke time ye overwrite ho jayega
        let temp = nums[nums.length - 1];

        // Inner loop:
        // Array ko right side shift karenge
        // End se start ki taraf chalenge
        // i > 0 kyuki nums[i - 1] use kar rahe hain
        for (let i = nums.length - 1; i > 0; i--) {

            // Previous element ko current position me copy karo
            //
            // Example:
            // nums[4] = nums[3]
            // nums[3] = nums[2]
            // nums[2] = nums[1]
            //
            // Isse saare elements ek step right shift ho jaate hain
            nums[i] = nums[i - 1];
        }

        // Saved last element ko first position me rakho
        //
        // Example:
        // temp = 5
        // [1,1,2,3,4]
        // becomes:
        // [5,1,2,3,4]
        nums[0] = temp;
    }

    // Final rotated array return karo
    return nums;
}


// Original array
let nums = [9, 0, 7, 8, 9, 9, 6, 3, 1, 5];

// Rotate count
let k = 3;

// Function call
console.log(rotateArray(nums, k));