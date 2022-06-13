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
    combinations
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



module.exports.itertools = itertools;