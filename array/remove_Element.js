const removeElemet=(nums,val)=>{
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j]!==val){
            nums[i]=nums[j]
            i++
        }
    }
    return i
}

let nums=[2,3,2,3,3,4,3,2,2,3,4234,23,23,2,34,32,4,23,3,23,23,23]
let val=34
// console.log(removeElemet(nums,val))
console.log(nums.slice(0,removeElemet(nums,val)))



// This logic is used to remove a specific element from an array in-place using the two pointer technique.

// The goal is:

// keep all elements that are not equal to the target value.
// move valid elements toward the beginning of the array.
// ignore the unwanted value.
// Core Idea

// Two pointers are used:

// j Pointer
// Traverses the entire array.
// Checks every element one by one.
// i Pointer
// Keeps track of the position where the next valid element should be placed.
// Only moves when a valid element is found.
// Internal Working
// The loop checks each element.
// If the current element is not equal to the value that should be removed:
// copy that element to index i
// increase i
// If the element equals the target value:
// skip it
// do not move i
// Important Concept

// The array is modified in-place:

// no new array is created.
// valid elements overwrite unwanted elements.

// After completion:

// the beginning portion of the array contains all valid elements.
// i represents the count of remaining elements.
// Why slice(0, removeElement(...))

// The function returns:

// the number of valid elements.

// So:

// slice(0, count)

// is used to display only the updated valid portion of the array.

// Time Complexity
// O(n)
// because the array is traversed once.
// Space Complexity
// O(1)
// because no extra array is used.