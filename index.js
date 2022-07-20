  const firebaseConfig = {
    apiKey: "AIzaSyDhfhCYKmYt7-Rex5oZeeV7CaDpVYadozw",
    authDomain: "dine86-csce3444.firebaseapp.com",
    databaseURL: "https://dine86-csce3444-default-rtdb.firebaseio.com",
    projectId: "dine86-csce3444",
    storageBucket: "dine86-csce3444.appspot.com",
    messagingSenderId: "208407310787",
    appId: "1:208407310787:web:cb8178422ab1a3255bcd76",
    measurementId: "G-6CRG9D81MP"
  };
  
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref('Dine86');

document.getElementById('signupform').addEventListener('submit', submitForm);

fucntion submitForm(e){
	e.preventDefault();
	
	var name = getInput('oName');
	var phone = getInput('pNum');
	var email = getInput('email');
	var restaurant_name = getInput('rName');
	var restaurant_address = getInput('rAdd');
	var city = getInput('rCity');
	var state = getInput('rState');
	var zip = getInput('rZip');
	var passwrd = getInput('pass');
	var conf = getInput('cPass');
	sendInput(name, phone, email, restaurant_name, restaurant_address. city, state, zip, passwrd);
	document.getElementById("signupform").reset();
}
const getInput = (id) => {
	return document.getElementById(id).value;
}
const sendInput = (name, phone, email, restaurant_name, restaurant_address. city, state, zip, passwrd) => {
	var newRest = db.push();
	
	newRest.set({
		name : name,
		phone : phone,
		email : email,
		restaurant_name : restaurant_name,
		restaurant_address : restaurant_address,
		city : city,
		state : state,
		zip : zip,
		passwrd : passwrd,
	});
}	