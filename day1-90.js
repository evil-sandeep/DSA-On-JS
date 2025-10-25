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
// let maxProfit = (prices) => {
//     let min = prices[0];
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         const profit = prices[i] - min
//         max = Math.max(profit, max)
//     }
//     return max
// }

// console.log(maxProfit([7,1,5,3,7,2]))

let maxProfit = (prices) => {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        let p = prices[i]
        if (p < min) {
            min = p
        } else {
            let profit = prices[i] - min
            if (profit > max) {
                max = profit
            }
        }
    }
    return max
}
// console.log(maxProfit([7, 11, 5, 30, 10, 55]))

//merge sorted array leetcode 88

// let merge = (nums1, m, nums2, n) => {
//     let first = m - 1;
//     let second = n - 1;
//     let i = m+n-1;
//     while (second >= 0) {
//         let fVal = nums1[first]
//         let sVal = nums2[second]

//         if (fVal > sVal) {
//             nums1[i] = fVal
//             i--
//             first--
//         } else {
//             nums1[i] = sVal
//             i--
//             second--
//         }
//     }
// }
// let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// merge(nums1, m, nums2, n);
// console.log(nums1)


//Day 5- leetcode Moves Zeores

// let movesZeros=(nums)=>{
//     let first=0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]!=0){
//             nums[first]=nums[i]
//             first++
//         }
//     }
//     while(first<nums.length){
//          nums[first++]=0
//     }
//     return nums;
// }

// let k=[0,2,1,0,4,0,13]
// console.log(movesZeros(k))

//Day 6 Leetcode 485-Max Consecutive Ones

// let maxNo=(nums)=>{
//     let trackOne=0
//     let best=0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]!=0){
//             trackOne++;
//             best=Math.max(best,trackOne)
//         }else{
//             trackOne=0
//         }
//     }
//     return best
// }

// console.log(maxNo([1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1]))

// if arr has -ve no , or 0 skip this and sum +ve integer , [1,1,2,3,0,3,4,2,4,-1,4,3,1,0,3,4,-4]=15 


let maxSum = (nums) => {
    let postive = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            postive += nums[i]
            sum = Math.max(sum, postive)
        } else {
            postive = 0
        }
    }
    return sum
}

// console.log(maxSum([1, 1, 2, 3, 0, 3, 4, 3, 4, -1, 4, 3, 1, 0, 3, 4, -4]))


//day -7 -missing numbers

let missingNo = (nums) => {
    let sortNums = nums.sort((a, b) => a - b)
    console.log(sortNums)

    if (sortNums[0] !== 0) return 0;

    for (let i = 0; i < sortNums.length; i++) {
        if (sortNums[i + 1] - sortNums[i] === 2) {
            return sortNums[i] + 1
        }
    }
    return sortNums[sortNums.length] + 1
}

// console.log(missingNo([0,1,2,8,4,6,7,5,9,10]))


//find single no 

let singleNO = (nums) => {
    let single = [0]

    for (let i = 0; i < nums.length; i++) {
        single = single ^ nums[i]
    }
    return single
}

// console.log(singleNO([1,2,2,3,3,4,1]))


//recursion.
//21 merged two sorted lists (recursion)

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


let mergedTwoLists = (list1, list2) => {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergedTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergedTwoLists(list1, list2.next);
        return list2;
    }
};

list1 = [1, 2, 4]
list2 = [1, 3, 4, 6]
console.log(mergedTwoLists(list1, list2));


//removed list from element
let removedElement = (head, val) => {
    if (head === null) return null;

    head.next = removedElement(head.next, val);

    if (head.val === val) {
        return head.next

    } else {
        return head;
    }
}
//another way using a dummy ListNode
let removeElement = (head, val) => {
    let dummy = new ListNode(-1)//create a dummy node with val -1
     dummy.next=head //connect dummy to start of the list 

    let curr = dummy;//a pointer is traverse the full list 
    while (curr.next != null) {  //if pointer have no value the return null either enter the loop
        if (curr.next.val === val) { // if cur val is equal to val the run if either else
            curr.next = curr.next.next; // skip the node with matching value
        } else {
            curr = curr.next// move to next node
        }
    }
    return dummy.next // return the new head
}

//reverse the linkedlist

var reverseList = function(head) {
     if(head===null) return null;
     if(head.next===null)return head

     let prev=null;
     let curr=head;
     while(curr !== null){
        let next=curr.next;
        curr.next=prev
        prev=curr;
        curr=next
     }
     head=prev
};