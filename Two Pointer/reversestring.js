const reversestring=(str)=>{
    let arr=str.split('')
    let right=str.length-1;
    let left=0;
    let temp=''
    while(left<right){
        temp=arr[right]
        arr[right]=arr[left]
        arr[left]=temp
        right --
        left ++
    }
    return arr.join('')

}
let str='sandeep'
console.log(reversestring(str))


//We use the two-pointer technique. One pointer starts from the beginning of the string and another starts from the end. 
// Since strings are immutable in JavaScript, we first convert the string into an array. Then we repeatedly swap the characters
//  at the left and right pointers and move both pointers toward the center. When the pointers meet or cross, the entire string 
// has been reversed. Finally, we join the array back into a string and return it.

// Complexity
// Type	Complexity
// Time	O(n)
// Space	O(n)