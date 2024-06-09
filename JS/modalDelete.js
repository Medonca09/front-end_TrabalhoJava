// Get the modal
var modal = document.getElementById('deleteModal');

// Get the button that opens the modal
var trashIcons = document.querySelectorAll('.fa-trash');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Get the confirm and cancel buttons
var confirmBtn = document.getElementById('confirmDelete');
var cancelBtn = document.getElementById('cancelDelete');

// When the user clicks on the trash icon, open the modal
trashIcons.forEach((icon) => {
	icon.onclick = function(event) {
		event.preventDefault();
		modal.style.display = 'block';
	};
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks on the cancel button, close the modal
cancelBtn.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

// When the user clicks on the confirm button, proceed with delete action
confirmBtn.onclick = function() {
	// Add your delete logic here
	modal.style.display = 'none';
	alert('Item deletado com sucesso!'); // Example action
};
