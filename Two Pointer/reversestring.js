const reversestring=(str)=>{
    let right=str.length-1;
    let left=0;
    let temp=''
    while(left<right){
        temp=str[right]
        right=str[left]
        left=temp
        right --
        left ++
    }
    return str

}
let str='sandeep'
console.log(reversestring(str))