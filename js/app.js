$(document).ready(function(){
	$('.encrypt form').on('submit', function(e){
		e.preventDefault();
		var clearTextField = $('.encrypt input[name="cleartext"]');
		var keywordField = $('.encrypt input[name="keyword"]');

		var clearText = cleanText(clearTextField.val().toUpperCase());
		var keyword = cleanText(keywordField.val().toUpperCase());
		keyword = cleanText((keyword == "") ? "*" : keyword);

		var encrypted = encrypt(clearText, keyword);

		clearTextField.val('');
		keywordField.val('');

		var newRow = $('<tr/>');
		newRow.append($('<td/>').addClass('break-word').html(clearText));
		newRow.append($('<td/>').addClass('break-word').html(keyword));
		newRow.append($('<td/>').addClass('break-all').html(encrypted));

		$('.encrypt .results-table tbody').append(newRow);
	});

	$('.decrypt form').on('submit', function(e){
		e.preventDefault();
		var cipherTextField = $('.decrypt input[name="ciphertext"]');
		var keywordField = $('.decrypt input[name="keyword"]');

		var cipherText = cleanText(cipherTextField.val().toUpperCase());
		var keyword = cleanText(keywordField.val().toUpperCase());
		keyword = cleanText((keyword == "") ? "*" : keyword);

		var decrypted = decrypt(cipherText, keyword);

		cipherTextField.val('');
		keywordField.val('');

		var newRow = $('<tr/>');
		newRow.append($('<td/>').addClass('break-all').html(cipherText));
		newRow.append($('<td/>').addClass('break-word').html(keyword));
		newRow.append($('<td/>').addClass('break-word').html(decrypted));

		$('.decrypt .results-table tbody').append(newRow);
	});
});