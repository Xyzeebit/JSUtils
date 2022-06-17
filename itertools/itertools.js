/**
 * The itertools module is a collection of tools intented to be 
 * fast and use memory efficiently when handling iterators (like lists or 
 * dictionaries). The module standardizes a core set of fast, memory efficient
 * tools that are useful by themselves or in combination. Together, they 
 * form an “iterator algebra” making it possible to construct specialized tools succinctly 
 * and efficiently in pure JavaScript.
 * @param{object} iterable - an iterable object 
 * @param{function} operator - a function to apply to the iterable object 
*/

const itertools = {
    chain,
    combinations,
    compress,
    count,
    cycle,
    product,
    repeat
}

/**
 * function chain
 * Takes a series of iterables and return them as one long iterable
 * @param{object[]} args - a variable argument iterable object
*/
function chain(...args) {
    const arrData = [];
    const objData = {};
    for(let object of args) {
        if(Array.isArray(object)) {
            object.forEach(arr => arrData.push(arr));
        } else {
            Object.entries(object).map((obj, i) => objData[obj[0]] = obj[1])
        }
    }
    
    if(arrData.length && Object.entries(objData).length) {
        arrData.push(objData);
        return arrData;
    }
    if(arrData.length) {
        return arrData;
    } 
    if(Object.entries(objData).length) {
        return objData;
    }
}

/**
 * Takes an iterable and an interger.This will creatr all 
 * the unique combination that have n member
 * @param{Array} iterable
 * @param{number} n - number of combinations
*/
function combinations(iterable, n) {
    if(n > iterable.length || n < 1) return;
    if(n === iterable.length) return iterable;
    
    const data = [];
    for(let i = 0; i < iterable.length; i++) {
        let arr = [iterable[i]];
        for(let j = i; j < iterable.length; j++) {
            if(arr.includes(iterable[j])) {
                continue;
            }
            arr.push(iterable[j])
            if(arr.length === n) {
                data.push(arr)
                arr = [iterable[i]];
            }
            
        }
    }
    return data;
}


/**
 * filters one iterable with the other
 * @param{Array} iterable
 * @param{Array} filter - an array of boolean values
*/
function compress(iterable, filter) {
    return iterable.map((arr, i) => {
        if(filter[i]) {
            return arr;
        }
    }).filter(i => i !== undefined);
}

/**
 * Makes a iterator that returns evenly spaced values
 * starting with number start
 * @param{number} start - the start number of the iterator, initial of 0
 * @param{number} step - the skip position, initail of 1
 * @param{number} stop - the base length to stop the iterator when it is execeeded. Initial is 10;
*/
function count(start = 0, step = 1, stop = 10) {
    return new Array(stop).fill(0).map((arr, i) => {
        if(i === 0) return start;
        return start += step;
    });
}

/**
 * Cycle through an iterable repeatedly
 * @param{Array} iterable
 * @param{number} repeat - Cycles the total value of repeat
*/
function cycle(iterable, repeat = 1) {
    if(repeat === 1) return iterable;
    let data = [];
    for(let i = 0; i < repeat; i++) {
        data = [...data, ...iterable];
    }
    return data
}


/**
 * Create a cartesian product from a series of iterables
 * @param{Array} numbers - an array of numbers
 * @param{Array} alphaData - an array of alphabets
 * @return{Array} returns a multi dimentional array
*/
function product(numbers, alphaData) {
    const data = [];
     for(let a of numbers) {
         for(let b of alphaData) {
             data.push([a, b]);
         }
     }
    return data;
}

/**
 * This function will repeat the object for the total times provided
 * @param{Object} object - the object to repeat
 * @param{number} times - the times to repeat object
 * @return{Array} returns an array of the object provided
*/
function repeat(object, times = 0) {
    if(times === 0) return [object];
    const data = [];
    for(let i = 0; i < times; i++) {
        data.push(object);
    }
    return data;
}

module.exports.itertools = itertools;