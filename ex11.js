function premiereLettreMajuscule(chaine) {
	const mots = chaine.split(" ");

	for (let i = 0; i < mots.length; i++) {
		mots[i] = mots[i][0].toUpperCase() + mots[i].substr(1);
	}

	return mots.join(" ");
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
