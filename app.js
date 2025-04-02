function findSecondLargest(arr) {    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    
    if (secondLargest === -Infinity) {
        console.log("No second largest number found.");
    } else {
        console.log("Second largest number is:", secondLargest);
    }
}

const arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
findSecondLargest(arr);