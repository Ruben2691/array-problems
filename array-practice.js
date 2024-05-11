const findMinimum = arr => {
  if(arr.length === 0){
    return undefined
  }else{
    return Math.min(...arr)
  }
};

// time complexity of this is O(n)
// the space complexity of this is also O(n) because of the return arr
const runningSum = arr => {
  let newArr = []
  let sum = 0
  for (const ele of arr) {
    sum += ele
    newArr.push(sum)
  }
  return newArr
};

// time complexity of this is O(n)
// space complexity of this is O(1)
const evenNumOfChars = arr => {
  let counter = 0
  for (const ele of arr) {
    if(ele.length % 2=== 0){
      counter++
    }
  }
  return counter
};

const smallerThanCurr = arr => {
  let newArr = []
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const element2 = arr[j];
      if(element1 > element2) counter++
    }
    newArr.push(counter)
    counter = 0
  }
  return newArr
};

// time complexity of this is O(n^2) because it has to loop over the arr more than once
// space complexity of this is O(1) because it is not storing anything
const twoSum = (arr, target) => {
 for (let i = 0; i < arr.length; i++) {
  const element1 = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
    const element2 = arr[j];
    if(element1 + element2 === target){
      return true
    }
  }
 }
 return false
};

// time complexity of this is O(n log n) because of the sort method
// space complexity of this is O(n) because im storing the sorted arr in a var
const secondLargest = (arr)=> {
  let sorted = arr.sort((a,b) => a-b)
  return sorted[sorted.length - 2]
};

const shuffle = (arr) => {

  // Your code here
};

// smallerThanCurr([8,1,2,2,3])
// secondLargest([1, 2, 3, 4])

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
