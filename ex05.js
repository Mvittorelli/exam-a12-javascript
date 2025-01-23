function compterVoyelles(chaine) {
	const voyelles = "aeiouyAEIOUY";
	let nbVoyelles = 0;
	for (let i = 0; i < chaine.length; i++) {
		if (voyelles.includes(chaine[i])) {
			nbVoyelles++;
		}
	}
	return nbVoyelles;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
