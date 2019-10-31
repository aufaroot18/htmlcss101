// Variable
let myImg = document.querySelector('img');
let mySrc;
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myBody = document.querySelector('body');

// Function
function setUsername() {
	let myName = prompt('Hai, nama kamu siapa?');
	localStorage.setItem('name', myName);
	myHeading.textContent = "Selamat Datang " + myName;
}

// check image if exist in local storage
function checkImage() {
	if (localStorage.getItem('image')) {
		let myImgSaved = localStorage.getItem('image');
		myImg.setAttribute('src', myImgSaved);
	}

	else {
		localStorage.setItem('image', 'img/linux.png');
		let myImgSaved = localStorage.getItem('image');
		myImg.setAttribute('src', myImgSaved);	
	}
}

// check username if exist in local storage
function checkUsername() {
	if (localStorage.getItem('name')) {
		let mySavedName = localStorage.getItem('name');
		myHeading.textContent = 'Selamat Datang ' + mySavedName;
	}

	else {
		setUsername();
	}
}

// Events
myImg.onclick = function() {
	mySrc = myImg.getAttribute('src');
	if (mySrc === 'img/linux.png') {
		myImg.setAttribute('src', 'img/firefox-icon.png');
		localStorage.setItem('image', 'img/firefox-icon.png');
	}

	else {
		myImg.setAttribute('src', 'img/linux.png');
		localStorage.setItem('image', 'img/linux.png');
	}
}

myButton.onclick = function() {
	setUsername();
}

// event onload running after body has been loaded
myBody.onload = function() {
	checkImage();
	checkUsername();
}