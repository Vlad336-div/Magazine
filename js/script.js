let sign				= document.querySelector(".sign"),
	modalWindowSign		= document.querySelector(".modal-sign"),
	closeWindowSign		= document.querySelector('.close');

sign.addEventListener('click', function() {
	modalWindowSign.classList.add('active-sign');
});

closeWindowSign.addEventListener('click', function(){
	modalWindowSign.classList.remove('active-sign');
});