const remDup=(nums)=>{
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[j]!==nums[i]){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
    
}

let num=[1,2,2,3]
let k = remDup(num);
console.log(num.splice(0,k))




// This logic is based on the two pointer technique and works for a sorted array.

// Theory of the Logic
// The array is already sorted, so duplicate values come next to each other.
// One pointer (initial) keeps track of the position of the last unique element.
// Another pointer (j) moves through the array and checks every element.
// Main Idea
// Compare the current element with the last unique element.
// If both are different:
// it means a new unique value is found.
// move the initial pointer forward.
// place the new unique value at that position.
// What Happens Internally
// Unique elements are shifted toward the beginning of the array.
// Duplicate elements are ignored.
// The array gets modified in-place, meaning no extra array is created.
// Why initial + 1
// initial stores the index of the last unique element.
// Array indexing starts from 0.
// So total unique elements become:
// index + 1
// Time Complexity
// O(n) because the array is traversed only once.
// Space Complexity
// O(1) because no extra memory is used.
