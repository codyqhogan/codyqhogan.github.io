import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDhfhCYKmYt7-Rex5oZeeV7CaDpVYadozw",
    authDomain: "dine86-csce3444.firebaseapp.com",
    databaseURL: "https://dine86-csce3444-default-rtdb.firebaseio.com",
    projectId: "dine86-csce3444",
    storageBucket: "dine86-csce3444.appspot.com",
    messagingSenderId: "208407310787",
    appId: "1:208407310787:web:cb8178422ab1a3255bcd76",
    measurementId: "G-6CRG9D81MP"
  };
  
//firebase.initializeApp(firebaseConfig);
//let db = firebase.database().ref("Dine86");

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const addSignUpForm = document.querySelector('.signup')
addSignUpForm.addEventListener('submit', (e) =>{
	e.preventDefault()

	const reference = ref(db, 'restaurants/' + addSignUpForm.oName.value);
 
	set(reference, {
		owner_name: addSignUpForm.oName.value,
		phone: addSignUpForm.pNum.value,
		email : addSignUpForm.email.value,
		restaurant_name: addSignUpForm.rName.value,
		restaurant_address : addSignUpForm.rAdd.value,
		city : addSignUpForm.rCity.value,
		state : addSignUpForm.rState.value,
		zip : addSignUpForm.rZip.value,
		password : addSignUpForm.pass.value
	})

	addSignUpForm.reset();

 
})

/*document.getElementById("signupform").addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	
	var name = getInput("oName");
	var phone = getInput("pNum");
	var email = getInput("email");
	var restaurant_name = getInput("rName");
	var restaurant_address = getInput("rAdd");
	var city = getInput("rCity");
	var state = getInput("rState");
	var zip = getInput("rZip");
	var passwrd = getInput("pass");
	var conf = getInput("cPass");
	
	sendInput(name, phone, email, restaurant_name, restaurant_address, city, state, zip, passwrd);
	document.getElementById("signupform").reset();
}

function getInput(id) {
	return document.getElementById(id).value;
}

function sendInput(name, phone, email, restaurant_name, restaurant_address, city, state, zip, passwrd) {
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
*/