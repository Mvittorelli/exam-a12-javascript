function isString(myString) {
	if (typeof myString === "string") {
		return true;
	} else {
		return false;
	}
}

console.log(isString("Marc")); // Résultat attendu : true
console.log(isString(2)); // Résultat attendu : false
