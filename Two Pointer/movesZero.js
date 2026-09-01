const movesZero=(no)=>{
     let i=0;
     for(let j=0; j<no.length; j++){
       if(no[j]!==0){
        
        no[i]=no[j]
        i++
       }
     }

     while(i<no.length){
        no[i++]=0
     }
     return no
}

let no=[1,2,0,3,0]
let k=movesZero(no)
console.log(no.splice(0,k))