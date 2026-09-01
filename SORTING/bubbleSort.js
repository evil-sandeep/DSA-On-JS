const bubbleSort=(num)=>{
   
    let n=num.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1;j++){
            if(num[j]>num[j+1]){
                let temp=num[j]
                num[j]=num[j+1]
                num[j+1]=temp
            }
        }
    }
    return num

}

let num=[5,3,2,1,6,4,9]
console.log(bubbleSort(num))



// Bubble Sort me hum array ko multiple times traverse karte hain. Har pass me hum adjacent elements (side-by-side elements) ko compare karte hain. Agar left wala element right wale element se bada hota hai, toh dono ko swap kar dete hain. Is comparison aur swapping ki wajah se har pass ke baad sabse bada unsorted element dheere-dheere array ke end tak pahunch jata hai, bilkul pani me bubble ke upar aane ki tarah, isi liye iska naam Bubble Sort hai.

// Outer loop ka kaam passes ko control karna hota hai. Ek pass me pura array sort nahi hota, isliye hume array ko baar-baar traverse karna padta hai. Har pass ke baad ek element apni correct position par pahunch jata hai. Isliye inner loop har pass me thoda chhota ho jata hai kyunki end ke elements already sorted hote hain aur unhe dobara compare karne ki zarurat nahi hoti.

// Inner loop adjacent elements ko compare karta hai. Agar current element next element se bada hota hai, toh swap kiya jata hai. Swap karne ke liye temporary variable ka use kiya jata hai taaki pehle value lose na ho jaye. Is process ko baar-baar repeat karne se chhote elements left side ki taraf aur bade elements right side ki taraf move karte rehte hain.

// Example ke liye agar array [5,3,2,1] hai, toh pehle pass ke baad 5 sabse end me pahunch jayega. Dusre pass ke baad 3 aur 2 apni sahi position ki taraf move karenge. Aise hi har pass ke baad ek aur element fix hota jayega aur finally poora array sorted ho jayega.

// Ek Line Revision

// Bubble Sort repeatedly adjacent elements ko compare aur swap karta hai, jisse har pass me sabse bada unsorted element array ke end me chala jata hai. 🔥