const countFrequency=(str)=>{
    let  frequency={}
    for(let char of str){
    if(frequency[char]){
        frequency[char]++
    }else{
        frequency[char]=1
    }
}
return frequency

}

let str='hello'
console.log(countFrequency(str))