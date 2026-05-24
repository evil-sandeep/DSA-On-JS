const moveZero = (nums) => {
     let intialValue = 0;

     for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) {//0=0,1!=0,0=0,2!=0
               nums[intialValue] = nums[i]// ,[1], ,[1,2]
               intialValue++// ,1,2
          }
     }
     while (intialValue < nums.length) {//2<4
          nums[intialValue++] = 0 //[0,0]
     }
     return nums
}

console.log(moveZero([0, 1, 0, 2]))


//Move zeros to end problem me hum directly zeros ko move karne ki koshish nahi karte, kyuki usme swapping aur shifting ka logic thoda confusing ho jata hai. Isliye hum ek simple approach use karte hain: hum sirf non-zero values ko correct position par place karte hain. Sabse pehle hum ek variable lete hain insertPosition, jo batata hai ki next non-zero value array me kaha insert hogi. Initially iska value 0 hota hai, kyuki pehla non-zero element array ke first position par aayega.

// Ab hum array par loop chalate hain aur har element ko one-by-one check karte hain. Agar current element zero nahi hota, iska matlab woh useful value hai aur usko front side me rakhna hai. Toh hum us value ko insertPosition wale index par place kar dete hain aur phir insertPosition ko increase kar dete hain, taki next non-zero value next position par ja sake. Agar current element zero hota hai, toh usko ignore kar dete hain aur loop aage continue hota hai.

// Jab pura loop complete ho jata hai, tab tak saare non-zero values array ke starting positions me aa chuke hote hain. Lekin array ke remaining positions me old values ya duplicate values reh sakti hain. Isliye end me hum ek while loop chalate hain aur insertPosition se lekar array ke last tak saare positions me 0 fill kar dete hain. Is tarah final array me pehle saare non-zero values aate hain aur saare zeros automatically end me move ho jaate hain.