document.querySelector('.xuathien').addEventListener('click',
 function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})