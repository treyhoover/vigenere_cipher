// Vigenère cipher

ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .,/?`~[]\\;':!@#$%^&*()_+-=";

function cleanText(text) {
	var textArray = text.split('');
	var cleanText = "";

	for (var i = 0; i < text.length; i++){
		if (ALPHABET.indexOf(textArray[i]) < 0) {
			// skip this character
		} else {
			cleanText += textArray[i];
		}
	}

	return cleanText;
}

// take two letters and return the intersecting letters
function getIntersect(a, b) {
	var posA = ALPHABET.indexOf(a);
	var posB = ALPHABET.indexOf(b);

	var intersectPos = (posA + posB) % ALPHABET.length;

	return ALPHABET[intersectPos];
}

function repeatMatchLength(matchStr, matchedStr) {
	var charDiff = matchStr.length - matchedStr.length;

	if (charDiff > 0) {
		// repeat chars in keyword charDiff times
		for (var i = 0; i < charDiff; i++){
			matchedStr += matchedStr[i%matchedStr.length];
		}
	}

	return matchedStr;
}

function encrypt(plainText, keyword) {
	plainText = cleanText(plainText);
	var cipherText = "";

	keyword = repeatMatchLength(plainText, keyword);

	for (var i = 0; i < plainText.length; i++){
		var a = plainText[i];
		var b = keyword[i];
		var c = getIntersect(a, b);
		cipherText += c;
	}

	return cipherText;
}

function decrypt(cipherText, keyword) {
	cipherText = cleanText(cipherText);
	var clearText = "";

	keyword = repeatMatchLength(cipherText, keyword);

	for (var i = 0; i < cipherText.length; i++){
		// iterate over each letter pair
		var a = cipherText[i];
		var b = keyword[i];

		// find offsets
		var posA = ALPHABET.indexOf(a);
		var posB = ALPHABET.indexOf(b);
		var posC = (posA - posB) >= 0 ? (posA - posB) : ALPHABET.length + (posA - posB);

		var c = ALPHABET[posC];

		clearText += c;
	}

	return clearText;
}

// console.log(encrypt('ATTACKATDAWN', 'LEMON'));
// console.log(decrypt('LXFOPVEFRNHR', 'LEMON'));