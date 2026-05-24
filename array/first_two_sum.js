const find2Sum = (nums, target) => {
    let needed = 0
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        needed = target - current
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === needed) {
                // return [current, nums[j]]
            }
        }

    }

}
let nums = [1, 3, 4, 2]
// let target = 3
// console.log(find2Sum(nums, target))


// Is problem me hume array ke andar aise do numbers find karne hote hain jinka sum target value ke equal ho. Isliye sabse pehle hum outer loop chalate hain taki array ke har element ko ek-ek baar current number ke roop me pick kar saken. Har iteration me current variable array ka current element store karta hai.

// Uske baad hum needed variable banate hain. needed ka purpose ye hota hai ki target sum complete karne ke liye hume aur kaunsa number chahiye woh calculate karna. Isliye hum:

// needed = target - current

// karte hain. Example agar target 6 hai aur current number 2 hai, toh:

// 6 - 2 = 4

// Matlab hume 4 chahiye taki:

// 2 + 4 = 6

// ho sake.

// Uske baad hume check karna hota hai ki ye needed number array me present hai ya nahi. Isi liye second loop (inner loop) use karte hain. Inner loop remaining elements ko traverse karta hai aur har element ko needed value ke saath compare karta hai.

// Inner loop ko:

// j = i + 1

// se start karte hain, kyuki hume current element ko dobara compare nahi karna hota. Agar hum j = 0 ya j = 1 se start karein, toh same element khud se compare ho sakta hai, jo wrong result de sakta hai. i + 1 se start karne ka matlab hota hai ki hum sirf current element ke baad wale elements ko check karenge.

// Example:

// [1,3,4,2]

// Agar current number 1 hai, toh needed value:

// 5

// hogi. Ab inner loop current element ke baad wale numbers me 5 search karega.

// Agar kisi iteration me:

// nums[j] === needed

// true ho jata hai, iska matlab current number aur found number ka sum target ke equal hai. Tab hum required pair ya value return kar dete hain.




//using hashmap()

const find2Nums=(num,target)=>{
    let seen={}
    for(let i=0; i<num.length; i++){
       let current=num[i]
      
       let needed=target-current
       if(seen[needed]){

        return [current,needed]
       }
       seen[current] = true
    }
    return seen
}
let num=[1,3,2]
let target=5
console.log(find2Nums(num,target))


//Is approach me hum object/hashmap use karte hain taki hume baar-baar pura array search na karna pade. Sabse pehle hum ek empty object banate hain jo already visited numbers ko store karega. Fir hum array ko ek hi loop me traverse karte hain aur har iteration me current number ko pick karte hain.

// Uske baad hum calculate karte hain ki target sum complete karne ke liye hume aur kaunsa number chahiye. Isliye hum:

// needed = target - current

// nikalte hain. Ye needed value batati hai ki current number ke saath kaunsa second number add hoga toh target banega.

// Fir hum object/hashmap me check karte hain ki needed number pehle se present hai ya nahi. Agar needed value object me mil jaati hai, iska matlab current number aur previously stored number milkar target sum bana rahe hain. Tab hum pair return kar dete hain.

// Agar needed number object me present nahi hota, toh hum current number ko object me store kar dete hain taki future iterations me usko check kiya ja sake.

// Is approach ka main advantage ye hai ki hume second loop use nahi karna padta. Object/hashmap fast lookup provide karta hai, isliye hum ek hi traversal me pair find kar lete hain.