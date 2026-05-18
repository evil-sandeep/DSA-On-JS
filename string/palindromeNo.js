const palindrome=(str)=>{
    let rev='';
    for(let i=str.length-1; i>=0; i--){
        rev=rev+str[i]
    }
     if(rev===str){
        return ('yes it is a palindrome no')
    }else{
        return('no its not a palindrome no')
    }

}
let str='madsweram'
// console.log(palindrome(str))

const palindrome2=(str)=>{
     let i=0;
     for(let j=str.length-1; j>=0; j--){
        if(str[i]===str[j]){
            i++
        }else{
            return false
        }
     }
     return true
}
console.log(palindrome2(str))

const palindrome3 = (str) => {

    // Left pointer start se
    let left = 0;

    // Right pointer end se
    let right = str.length - 1;

    // Jab tak left < right
    while (left < right) {

        // Agar characters same nahi hain
        // toh palindrome nahi hai
        if (str[left] !== str[right]) {
            return false;
        }

        // Left ko aage badhao
        left++;

        // Right ko peeche lao
        right--;
    }

    // Sab characters same nikle
    return true;
}

console.log(palindrome3("madam")); // true
console.log(palindrome3("hello")); // false