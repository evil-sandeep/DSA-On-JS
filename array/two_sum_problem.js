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




const bestTime=(price)=>{
    let buyPrice=price[0]
    let profit=0
    for(let i=1; i<price.length; i++){
       if(price[i]<buyPrice){
        buyPrice=price[i]
       }else{
        let currentprofit=price[i]-buyPrice
        profit=Math.max(currentprofit,profit)
       }
    }
    return profit
}
let price=[1,2,3,4]
console.log(bestTime(price))