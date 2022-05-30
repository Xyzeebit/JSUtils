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
		 //return {[(this.keys[idx])]: this.values[idx]};
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

let result = toUpper('@lov5e');
console.log(result)

result = toLower('LO5Ve');
console.log(result)



//console.l

//{
  //"101": "e",
  //"108": "l",
  //"111": "o",
  //"118": "v"
//}

// small 97 - 122
// cap 90 - 65
// num 48 - 57




