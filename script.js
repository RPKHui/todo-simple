var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function toggleDone(event) {
	this.classList.toggle("done");
}

function removeOnClick(event) {
	this.parentElement.remove();
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("Remove"));
	li.addEventListener("click", toggleDone);
	button.addEventListener("click", removeOnClick);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i=0; i<li.length; i++) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Remove"));
	button.addEventListener("click", removeOnClick);
	li[i].addEventListener("click", toggleDone);
	li[i].appendChild(button);
}