require('./index.js');

const array = [1, 2, 3, 4, 5, 5, [6, 7], [8, [9, 10]], 'a', true, null, undefined, {}, []];

console.log(array.sum()); // Output: 15
console.log(array.unique()); // Output: [1, 2, 3, 4, 5, [6, 7], [8, [9, 10]], 'a', true, null, undefined, {}, []]
console.log(array.average()); // Output: 3
console.log(array.max()); // Output: 5
console.log(array.min()); // Output: 1
console.log(array.product()); // Output: 120
console.log(array.countOccurrences(3)); // Output: 1
console.log(array.flatten()); // Output: [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 'a', true, null, undefined, {}, []]
console.log(array.intersect([3, 4, 5, 6])); // Output: [3, 4, 5, 5]
console.log(array.difference([3, 4, 5, 6])); // Output: [1, 2]
