const buyAndSell=(prices)=>{
    let buyPrices=prices[0];
    let profit=0;

    for(let i=1; i<prices.length; i++){
        if(prices[i]<buyPrices){
            buyPrices=prices[i]
        }else{
            let currentProfit=prices[i]-buyPrices
            profit=Math.max(currentProfit,profit)
        }

    }
    return profit 
}
let nums=[7,2,4,5,6,10,8,7];
console.log(buyAndSell(nums)) 