function itungvocal(text) {
	var vokal = ["a","i","u","e","o"];
	var counter = 0; 
	for(var x of text.toLowerCase()) {
		if (vokal.includes  (x)) {
			counter ++
		}

	}
	return counter;
}
console.log (itungvocal("BISMILLAH"));

ol>li*20