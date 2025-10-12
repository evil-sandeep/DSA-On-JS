//remove duplicate from sorted array 

var removeDuplicates = function (nums) {
    let i = 0;//1st index is always unique
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {//1st 0=0 skip, 2nd-1=/=0
            i++;                //1
            nums[i] = nums[j]     //0,1
        }
    }
    return i + 1
};

// let nums=[0,0,1,1,1,2,2,2,3,4,5,5,5,6]
// let k=removeDuplicates(nums)
// console.log(k)
// console.log(nums.slice(0,k))

//remove element from an array

// var removeElement=function(nums,val){ //nums=[3,2,2,3], val =3
//     let i=0; 
//     for(let j=0;j<nums.length;j++){
//         if(nums[j]!==val){         //0->3=3-skip,1->2=/=3,2->2=/=3,3->3=3-skip
//             nums[i]=nums[j]       // interchange->3=2, [2,2,2,3] ,2=2,[2,2,2,3]
//             i++                    //0 ,incr-1, incr - 2
//         }
//     }
//     return i                        // indices return
// }

// let nums=[3,2,2,3] ,val =3
//  let k=removeElement(nums,val)
//  console.log(k)
//  console.log(nums.slice(0,k))


//  3-Reverse Strings
// var reverseString = function(s) {
//     return s.reverse()
// };

// console.log(reverseString(["h","e","l","l","o"]))
// var reverseString = function(s) {
//     let left=0
//     for(let right=s.length-1;left<right;right--){//right=4,0<4->true, right=3,1<3 , right=2,2<2
//        let temp=s[right]                             //temp=s[4]='o',temp=s[3]='l' 
//        s[right]=s[left]                              //s[4]=s[0]='h',s[3]=s[1]='e'
//        s[left]=temp                                 //s[0]='o'      ,s[1]='l'     
//        left ++                                      //left 0->1     ,left 1->2    
//     }
//     return s
// };

// console.log(reverseString(["h","e","l","l","o"]))

// 4-->leetcode->121->Best time to buy and sell stock 
let maxProfit = (prices) => {
    let min = prices[0];
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        const profit = prices[i] - min
        max = Math.max(profit, max)
    }
    return max
}

console.log(maxProfit([7,1,5,3,7,2]))