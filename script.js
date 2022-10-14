const firstElement = document.getElementById("first-element")
const secondElement = document.querySelector("#second-element");
const addButton = document.getElementById("add")
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const removeButton = document.getElementById("remove")
let size = 500

const img = document.querySelector("#img")

firstElement.addEventListener("click", function(){
	if(!firstElement.classList.contains('active'))
		firstElement.classList.add('active')
	else
		firstElement.classList.remove('active')
});

secondElement.addEventListener("click", function(e){
	e.stopPropagation()
	if(!secondElement.classList.contains('active'))
		secondElement.classList.add('active')
	else
		secondElement.classList.remove('active')
});	


addButton.addEventListener("click", function(e){
	const place = document.querySelector("#img-place")
	place.appendChild(img)
});

increaseButton.addEventListener("click", function(e){
	if(document.getElementsByClassName("img-inner")[0]){
		size += 50
		document.getElementsByClassName("img-inner")[0].style.width = size + "px"
	}
});

decreaseButton.addEventListener("click", function(e){
	if(document.getElementsByClassName("img-inner")[0]){
		size -= 50
		document.getElementsByClassName("img-inner")[0].style.width = size + "px"
	}
});

removeButton.addEventListener("click", function(e){
	const place = document.querySelector("#img-place")
	place.removeChild(img)
});