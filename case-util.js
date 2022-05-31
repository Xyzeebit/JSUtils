/**
 * @{author} Xyzeebit
 * A Map class for holding character codes
*/
class Map {
	keys = [];
	values = [];
	
	set(key, value) {
		this.keys.push(key);
		this.values.push(value);
	}
	
	get(key) {
		if(this.keys.includes(key)) {
			let idx = this.keys.indexOf(key);
		 return this.values[idx];
		}
	}
	
	has(key) {
		let idx = this.keys.indexOf(key);
		return idx > -1;
	}
	
	entries() {
		let entries = {};
		for(let i in this.keys) {
			entries = { ...entries, [(this.keys[i])]: this.values[i] }
		}
		return entries;
	}
	
	size() {
		return this.keys.length;
	}
	
}

/**
 * @param{number} code - ASCII code that will be use
 * to compute the upper or lower case of character
 * @return{number} ASCII number that maps to a
 * string character
*/
function getCase(code) {
	let mapUpperToLower = new Map();
	let mapLowerToUpper = new Map();
	
	for(let i = 65, j = 97; i < 91, j < 123; i++, j++) {
		mapUpperToLower.set(i, j);
		mapLowerToUpper.set(j, i);
	}
	
	// upper case
	if(code > 64 && code < 91) {
		// return lower case
        return mapUpperToLower.get(code);
	}
	
	// lower case
	if(code > 96 && code < 123) {
		// return upper case
        return mapLowerToUpper.get(code);
	}
}


/** 
 * @param{string} str - A string argument to be change
 * to upper case
 * @return{string} returns the upper case of
 * the string argument
*/
function toUpper(str) { 
	let newString = '';
	
	for(let i = 0; i < str.length; i++) {
		
		let charCode = str.charCodeAt(i);
		let char = str.charAt(i);
		
		if(charCode > 96 && charCode < 123) {
			  let up = getCase(charCode);
			   let s = String.fromCharCode(up);
			  newString += s;
		} else {
			newString += char;
		}
		
	}

	return newString;
}

/** 
 * @param{string} str - A string argument to be change
 * to lower case
 * @return{string} returns the lower case of
 * the string argument
*/
function toLower(str) {
	let newString = '';
	
	for(let i = 0; i < str.length; i++) {
		
		let charCode = str.charCodeAt(i);
		let char = str.charAt(i);
		
		if(charCode > 64 && charCode < 91) {
			  let low = getCase(charCode);
			  let s = String.fromCharCode(low);
			  newString += s;
		} else {
			newString += char;
		}
		
	}

	return newString;
}

/**
* how to use function
*

* let result = toUpper('@lov5e');
* console.log(result)
* 
* result = toLower('LO5Ve');
* console.log(result)
*/




module.exports = {
    toLower,
    toUpper
}