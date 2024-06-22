// array-utils-hof/index.js

// 1. Sum of array
Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
};

// 2. Clear all repeated numbers
Array.prototype.unique = function() {
    return [...new Set(this)];
};

// 3. Average of array
Array.prototype.average = function() {
    const filteredArray = this.filter(item => typeof item === 'number');
    return filteredArray.length ? filteredArray.sum() / filteredArray.length : 0;
};

// 4. Find max value
Array.prototype.max = function() {
    const filteredArray = this.filter(item => typeof item === 'number');
    return filteredArray.length ? Math.max(...filteredArray) : undefined;
};

// 5. Find min value
Array.prototype.min = function() {
    const filteredArray = this.filter(item => typeof item === 'number');
    return filteredArray.length ? Math.min(...filteredArray) : undefined;
};

// 6. Product of array
Array.prototype.product = function() {
    return this.reduce((acc, curr) => acc * (typeof curr === 'number' ? curr : 1), 1);
};

// 7. Count occurrences of a value
Array.prototype.countOccurrences = function(value) {
    return this.filter(item => item === value).length;
};

// 8. Flatten nested arrays
Array.prototype.flatten = function() {
    return this.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.flatten() : curr), []);
};

// 9. Find intersection of arrays
Array.prototype.intersect = function(array) {
    return this.filter(value => array.includes(value));
};

// 10. Find difference of arrays
Array.prototype.difference = function(array) {
    return this.filter(value => !array.includes(value));
};

// Ensure module is compatible with CommonJS
module.exports = {};
