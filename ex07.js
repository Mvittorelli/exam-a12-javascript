function moyenne(tab) {
	let sum = 0;

	if (tab !== " " || tab !== 0) {
		for (let i = 0; i < tab.length; i++) {
			sum += tab[i];
		}
		return sum / tab.length;
	}
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
console.log(moyenne([0]));
