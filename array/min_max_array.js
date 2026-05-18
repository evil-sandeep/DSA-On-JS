const minmax = (num) => {
    let min = num[0];//1
    let max = num[0];//1
    for (let i = 1; i < num.length; i++) {//2
        if (num[i] < min) {//2<1
            min = num[i]
        } else if (num[i] > max) {
            max = num[i]//
        }
    }
    
return {min,max}
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1,45,7,45,6,4,821,4,8,0,84,548,1,5
    
]
console.log(minmax(num))