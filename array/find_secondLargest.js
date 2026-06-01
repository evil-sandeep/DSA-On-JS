const findSecLarg = (nums) => {
    let largest = -Infinity;
    let secLargest = -Infinity
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]//10,9

        if (current > largest) {//10>inf,9>10
            secLargest = largest;//inf,
            largest = current//10
        } else if (current > secLargest && current !== largest) { //9>inf
            secLargest = current//9

        }
    }
    return secLargest
}

console.log(findSecLarg([10, 9, 2]))

// Step 1

// Sabse pehle hum 2 variables lenge:

// largest
// secondLargest

// Kyuki:

// ek variable largest number store karega
// doosra second largest number store karega
// Step 2

// Ab dono variables ko:

// -Infinity

// denge.

// Kyuki:

// array me negative numbers bhi ho sakte hain
// -Infinity sabse chhota value hota hai

// Example:

// let largest = -Infinity
// let secondLargest = -Infinity
// Step 3

// Ab ek for loop chalayenge.

// Taaki:

// array ke har number ko one-by-one check kar saken
// Step 4

// Loop ke andar current value nikalenge:

// let current = nums[i]

// Ye current number hoga jo abhi check ho raha hai.

// Step 5

// Ab current value ko check karenge:

// kya current largest se bada hai?

// Example:

// if(current > largest)

// Agar YES:

// Toh:

// purana largest → secondLargest ban jayega
// current → new largest ban jayega

// Example:

// largest = 10
// current = 15

// Then:

// secondLargest = 10
// largest = 15
// Step 6

// Agar current largest se bada nahi hai,

// Tab check karenge:

// kya current secondLargest se bada hai?

// Aur:

// current largest ke equal bhi nahi hona chahiye

// Example:

// else if(current > secondLargest && current !== largest)

// Agar YES:

// secondLargest = current
// Step 7

// Loop complete hone ke baad:

// secondLargest

// me final answer store hoga.

// Usko return kar denge ✅

// Final Logic Short Summary 🚀
// Condition   Action
// current > largest   largest update + old largest becomes secondLargest
// current > secondLargest secondLargest update
// current === largest duplicate ignore



const sLargst=(numss)=>{
    let lar=-Infinity
    let slar=-Infinity
    for(let i=0; i<numss.length; i++){
        let cur=numss[i]
        if(cur>lar){
            slar=lar;
            lar=cur
        }else if(cur>slar && cur !==lar){
slar=current
        }
    }
    return slar

}

console.log(sLargst([2,3,1]))