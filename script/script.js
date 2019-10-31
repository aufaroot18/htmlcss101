// # Image changer
let myImg = document.querySelector('img');
let mySrc;

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

// # Personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
	let myName = prompt('Hai, nama kamu siapa?');
	localStorage.setItem('name', myName);
	myHeading.textContent = "Selamat Datang " + myName;
}

function checkUsername() {
	if (localStorage.getItem('name')) {
		let mySavedName = localStorage.getItem('name');
		myHeading.textContent = 'Selamat Datang ' + mySavedName;
	}

	else {
		setUsername();
	}
}

myButton.onclick = function() {
	setUsername();
}

// # Check username and image in local storage

let myBody = document.querySelector('body');

myBody.onload = function() {
	checkImage();
	checkUsername();
}
