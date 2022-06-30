// let array = ['a', 'b', 'c', 'd']

// printArrayEvery(array)

// function printArrayEvery(arr) {
//   for (let i = 0; i < arr.length; i++) {;
//     (function(ind) {
//       setTimeout(function() {
//         console.log(arr[ind])
//       }, (ind === 0 && 1000) || 1000 * ind * 2)
//     })(i)
//   }
// }

// function duplicates(array) {
//   const uniqueElements = new Set(array)

//   const filteredElements = array.filter(item => {
//     if (uniqueElements.has(item)) {
//       uniqueElements.delete(item)
//         // duplicates.push(item)
//         // console.log(duplicates)
//     } else {
//       // console.log('no duplicates')
//       return item
//     }
//   })

//   return [...new Set(uniqueElements)]
// }

// const array = [1, 2, 1, 3, 4, 3, 5]
// const duplicateElements = duplicates(array)
// console.log(duplicateElements)
// const toFindDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(array)
// console.log(duplicateElements)

// let expr = ['{', '}', '(', ')', '[', ']']
// let expr = '{()}'

// if (areBracketsOpenedAndClosed(expr)) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// function areBracketsOpenedAndClosed(expr) {
//   let stack = []

//   // transverse expression
//   for (let i = 0; i < expr.length; i++) {
//     let x = expr[i]

//     if (x == '(' || x == '[' || x == '{') {
//       // Push the element in the stack
//       stack.push(x)
//       continue
//     }

//     // If current character is not opening
//     // bracket, then it must be closing.
//     // So stack cannot be empty at this point.
//     if (stack.length == 0) return false

//     let check
//     switch (x) {
//       case ')':
//         check = stack.pop()
//         if (check == '{' || check == '[') return false
//         break

//       case '}':
//         check = stack.pop()
//         if (check == '(' || check == '[') return false
//         break

//       case ']':
//         check = stack.pop()
//         if (check == '(' || check == '{') return false
//         break
//     }
//   }

//   // Check Empty Stack
//   return stack.length == 0
// }

/* A Naive recursive implementation of
	0-1 Knapsack problem */

// returns maximum of two integers

function getMaxValue(a, b) {
  return a > b ? a : b
}

// returns the maximum value that can
// be put in the bag of capacity

function bagCapacity(capacity, wc, price, n) {
  // Base Case
  if (n == 0 || capacity == 0) return 0

  if (wc[n - 1] > capacity) return bagCapacity(capacity, wc, price, n - 1)
  else
    return getMaxValue(
      price[n - 1] + bagCapacity(capacity - wc[n - 1], wc, price, n - 1),
      bagCapacity(capacity, wc, price, n - 1)
    )
}

// price per carrot
let price = [100, 150, 70]
  // weight per carrot
let wc = [5, 7, 3]
let capacity = 36
let n = price.length // number of elements

console.log(bagCapacity(capacity, wc, price, n))