const removeDuplicate=(no)=>{
    let i=0;
    for(let j=1; j<no.length; j++){
        if(no[i]!==no[j]){
            i++
            no[i]=no[j]
        }
    }
    return i+1
}

let no=[1,2,3,5,6,3,3,4]
console.log(removeDuplicate(no))