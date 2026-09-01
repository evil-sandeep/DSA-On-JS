const palindrome=(no)=>{
    let i=0;
    for(let j=no.length-1; i<j; j--){
        if(no[i]===no[j]){
            i++
        }else{
            return'not palindrome'
        }
         
    }
    return ' yes no is palindrome no '
}


let no='madam'
console.log(palindrome(no))