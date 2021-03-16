//1.	Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's
// corresponding value squared in the second array. The frequency of
// values must be the same
Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x == value).length
    },
  },
})

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  else {
    const squareArr2 = arr2.map((el) => Math.pow(el, 2)) // Square array 2
    for (let el1 of arr1) {
      const el1CountInArr1 = arr1.count(el1) // Count el1 in array 1
      const el1CountInArr2 = arr2.count(el1) // Count el1 in array 2
      if (el1CountInArr1 !== el1CountInArr2) {
        return false
      } else {
        const squareEl1 = el1 * el1 // Square of el1
        if (squareArr2.includes(squareEl1)) return true
      }
    }
  }
}
const arr = [1, 1, 4, 2]
const arr2 = [3, 5, 4, 2]
// const arr2 = [3, 2, 4, 2]
// const arr2 = [1, 4, 2, 1]
// console.log(arr.map((el) => Math.pow(el, 2)))
// console.log(sameSquared(arr, arr2))

// 2.	Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair where
// the sum is 0. Return an array that includes both values that sum
// to zero or undefined if a pair does not exist.

const sumZero = (arr) => {
  let hashMap = {},
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      return [hashMap[arr[i]], arr[i]]
    } else {
      hashMap[0 - arr[i]] = arr[i]
    }
  }
  return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, -1, -1, 0, 1.5, 2, 2, 2, 3, 3, 4, 5, 6]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([-1, 1, 2, 3]))
