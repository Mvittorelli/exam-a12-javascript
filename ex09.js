function compterMots(chaine) {
	const count = (s) => s.trim().split(/\s+/).length;
	return count(chaine);
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4
