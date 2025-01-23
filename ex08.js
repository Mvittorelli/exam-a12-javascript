function sommePairs(tab) {
	let sum = 0;
	for (i = 0; i < tab.length; i++) {
		if (tab[i] % 2 === 0) {
			sum += tab[i];
		}
	}
	return sum;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
