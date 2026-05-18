const reverseString=(str)=>{
    str=str.split('')

    let left=0;
    let right=str.length-1;
    let temp;
    // for(;left<right;right--){
    //     temp=str[right]
    //     str[right]=str[left]
    //     str[left]=temp
    //     left++
    // }
    while(left<right){
        temp=str[right]
        str[right]=str[left]
        str[left]=temp
        left++
        right--
    }
return str.join('')
}
let str='hello'
console.log(reverseString(str))

