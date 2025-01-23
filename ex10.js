function filtrerNegatifs(tab) {
	let nb = [];

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] > 0) {
			nb.push(tab[i]);
		}
	}
	return nb;
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
