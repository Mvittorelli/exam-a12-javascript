function moyenne(tab) {
	let sum = 0;
	let nb = 0;

	for (let i = 0; i < tab.length; i++) {
		sum += tab[i];
		nb++;
	}

	return sum / nb;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
