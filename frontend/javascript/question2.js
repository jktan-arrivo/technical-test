// ** Obj O
const O = (function () {
	let obj = {
		a: 1,
		b: 2
	}
	return {
		get: (k) => obj[k] 
	}
})();
  
// Q2. How to edit property 'b' to 'c' of obj O without changing the above code
// Your Solution goes here. 