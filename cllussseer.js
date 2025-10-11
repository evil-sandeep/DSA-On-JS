// const createGenerateId=()=>{
// const createGenerateId=()=>{
//     let id=0;
//     return newId=()=>{
//         id++
//        return id

//     }
// }
// const getId=createGenerateId()
// console.log(getId())
// console.log(getId())
// console.log(getId())
// console.log(getId())


// const once=(fn)=>{
//     return ()=>{
//         return "Hello world"
//     }
// }

// const hello=once();
// console.log(hello())
// console.log(hello())


// const add=a=>b=>c=>a+b+c


// console.log(add(2)(3)(4)); // 9


// 1. Find the Largest Element in an Array



// Problem:
// Write a program to find the maximum element in an array.

// Example Input:
// arr = [2, 5, 1, 9, 3]
// Output:
// 9

// let arr=[2,5,1,9,3,99,-9]
// let big=0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>big){
//         return  big=arr[i]
//     }
// }
// console.log(big)



// let newAr=arr.map((elem)=>{
// // console.log(elem)
// if(elem>big){
//     big=elem
// }
// })
// console.log(big)
// 2. Reverse an Array

// Problem:
// Write a program to reverse the given array without using built-in functions.

// Example Input:
// arr = [1, 2, 3, 4, 5]
// Output:
// [5, 4, 3, 2, 1]

// let arr = [1, 2, 3, 4, 5]
// // let str = arr.sort((a, b) => {
// //     if (a > b) {
// //         return -1
// //     } else if (a < b) {
// //         return +1
// //     } else {
// //         return 0
// //     }
// // });

// let unch=[...arr].sort((a,b)=>{
//    return  b-a
// })
// console.log(unch)
// // console.log(str)
// console.log(arr)


// 3. Count the Frequency of Each Element

// Problem:
// Write a program to count how many times each element appears in the array.

// Example Input:
// arr = [1, 2, 2, 3, 1, 4, 2]
// Output:

// 1 → 2 times
// 2 → 3 times
// 3 → 1 time
// 4 → 1 time
// arr = [1, 2, 2, 3, 1, 4, 2]

// freq={}

// for(let i=0; i<arr.length ; i++){
//     let num=arr[i];//1
//     if(freq[num]){
//         freq[num]+1
//     }else{
//         freq[num=1]
//     }
// }

// for(let elem in freq){
//     const times=freq[key]===1
// }
// console.log(freq)


// 4. Find the Second Largest Element

// Problem:
// Write a program to find the second largest element in an array.

// Example Input:
// arr = [12, 35, 1, 10, 34, 1]
// // Output:
// // 34
// let unch=[...new Set(arr)].sort((a,b)=>b-a);
// console.log(unch[1])

// 5. Rotate Array by K Positions

// Problem:
// Write a program to rotate the array to the right by k positions.

// Example Input:
// arr = [1, 2, 3, 4, 5, 6], k = 2
// Output:
// [5, 6, 1, 2, 3, 4]

// arr = [1, 2, 3, 4, 5, 6], k = 2


// for(let i=0; i<k; i++){
//      let last =arr.pop()
//      arr.unshift(last)
// }
// // // console.log(arr)?

// // dds
// sdsd

// Reverse a string


let str = 'sandeep kumar sahoo'
let splitWords = str.split(' ')
let reversed = splitWords.map((words) => {
      
     let wor= words.split('').reverse().join('')
    let len=wor.length
    return `${wor}-${len}`

     
})
// let count=reversed.map((ee)=>{
//      return ee.length
// })
// console.log(count)

// console.log(reversed)
// console.log( ` name = ${reversed}  and character is ${noCount} `)

// let reversed=s.split("").reverse().join("")
// console.log(reversed) //split("") → string → array of characters

// reverse() → reverse array order

// join("") → array → back to string




// let news=s.reduce((acc,ele)=>{
//      ele+acc
// })
// console.log(news)

// Find max in an array

// let mx = [1, 2, 4, 5, 2, 3, 2, 42, 4, 242]

// for (let i = 1; i < mx.length; i++) {
//      let n =[0];
//      if (mx[i] > n) {
//            n = mx[i]

//      }

// console.log(n)

// }
// let no=0;
// let maxno=mx.map((elem)=>{
//      if(elem>no){
//           no=elem
//      }

// })

// console.log(no)


// console.log(mx)
// let news = mx.sort((a, b) => {
//      if (a < b) {
//           return -1
//      } else if (a > b) {
//           return +1
//      } else {
//           return 0
//      }
// })


// console.log(mx[news.length - 1])


// Check even/odd number
// let mx = 201

// if (mx % 2 === 0) {
//      // console.log('even no')

// } else {
//      // console.log('odd')
// }

// Sum of array elements
// let mxx = [1, 2, 4, 5, 2, 3, 2, 42, 4, 242]
// let bew = mxx.map((elem) => {
//      return elem
// })
// console.log(bew)

// Count vowels in a string


// let str = 'sandeep kumar sahoo'
// let vouwles='aeiouAEIOU';
// let indexes=[]

// for(let i=0; i<str.length; i++) {
// if(vouwles.includes(str[i])){
//      indexes.push(`${str[i]}-${i}`)
// }
// }
// console.log(indexes) // both character and position
// // forof
// for( let ch of name){
//      if( vouwles.includes(ch)){
//            count ++
//      }
// }
// console.log(count)
// /reduce??
// let count = str.split("").reduce((acc, ch) => {
//      return "aeiouAEIOU".includes(ch) ? acc + 1 : acc
// }, 0)
// console.log(count)


