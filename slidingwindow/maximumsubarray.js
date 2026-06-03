const slidingwindow = (no, k) => {

    let windowSum = 0;

    // First window sum
    for(let i = 0; i < k; i++){ //0<3

        windowSum += no[i];//8
    }

    let maxSum = windowSum;//8

    // Slide the window
    for(let i = k; i < no.length; i++){//i=3,3<6;

        windowSum = windowSum - no[i-k] + no[i];//8-0+1=9

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

let no = [2,1,5,1,3,2];
let k = 3;

console.log(slidingwindow(no, k));