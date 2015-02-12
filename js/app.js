$(document).ready(function(){
	$('.encrypt form').on('submit', function(e){
		e.preventDefault();
		var clearTextField = $('.encrypt input[name="cleartext"]');
		var keywordField = $('.encrypt input[name="keyword"]');

		var clearText = clearTextField.val().toUpperCase();
		var keyword = keywordField.val().toUpperCase();

		var encrypted = encrypt(clearText, keyword);

		clearTextField.val('');
		keywordField.val('');

		var newRow = $('<tr/>');
		newRow.append($('<td/>').html(clearText));
		newRow.append($('<td/>').html(keyword));
		newRow.append($('<td/>').html(encrypted));

		$('.encrypt .results-table tbody').append(newRow);
	});

	$('.decrypt form').on('submit', function(e){
		e.preventDefault();
		var cipherTextField = $('.decrypt input[name="ciphertext"]');
		var keywordField = $('.decrypt input[name="keyword"]');

		var cipherText = cipherTextField.val().toUpperCase();
		var keyword = keywordField.val().toUpperCase();

		var decrypted = decrypt(cipherText, keyword);

		cipherTextField.val('');
		keywordField.val('');

		var newRow = $('<tr/>');
		newRow.append($('<td/>').html(cipherText));
		newRow.append($('<td/>').html(keyword));
		newRow.append($('<td/>').html(decrypted));

		$('.decrypt .results-table tbody').append(newRow);
	});
});