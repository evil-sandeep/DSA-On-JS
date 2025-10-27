
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }


// let mergedTwoLists = (list1, list2) => {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergedTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergedTwoLists(list1, list2.next);
//         return list2;
//     }
// };

// list1 = [1, 2, 4]
// list2 = [1, 3, 4, 6]
// console.log(mergedTwoLists(l