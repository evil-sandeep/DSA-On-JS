const twoSum=(num,target)=>{
    let seen={}
    for(let i=0; i<num.length;i++){
        let current=num[i]
        let need=target-current
        if(seen[need]){
            return [current,need]
        }
        seen[current]=true
    }
    return seen
}
let num=[1,2,3]
let target=5
console.log(twoSum(num,target))


