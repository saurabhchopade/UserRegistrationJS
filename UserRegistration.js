///Packege
const prompt = require('prompt-sync')();
//Regx patterns
const firstNameRegx = "^[A-Z]{1}[a-z]{2,}$";
var  firstName = prompt('Enter your firstname');
	if(firstName.match(firstNameRegx))
	{
		console.log("Valid firstName");
	}
	else{
		console.log("Invalid lastName");
	}

