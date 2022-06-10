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

function itertools(iterable, operator) {
    return {
        chain
    };
}

/**
 * function chain
 * Takes a series of iterables and return them as one long iterable
 * @param{object[]} args - a variable argument iterable object
*/
function chain(...args) {
    if(args.length > 1) {
        let arr = [];
        for(let ar of args) {
            ar.map(i => arr.push(i))
        }
        return arr;
    }
    return args;
}




module.exports.itertools = itertools;