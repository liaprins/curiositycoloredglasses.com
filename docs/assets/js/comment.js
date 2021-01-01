// NOT WORKING! NEED TO TEST

var postACommentFirst = document.getElementById('postacommentsummary');

function commentFocus() {
	var nameField = document.getElementById('name');
	nameField.focus();
}



postACommentFirst.addEventListener('click', commentFocus, false);