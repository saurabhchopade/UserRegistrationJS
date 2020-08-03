///Packege00
const prompt = require('prompt-sync')();
//Regx patterns
const firstNameRegx = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegx = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegx = /^[a-z0-9]+[\.\-\+]?[a-z0-9]+[\@][a-z0-9]{1,}[\.][a-z]+([\.]?[a-z]+)$/;
const phoneNumberRegx = /^(91)[ ][0-9]{10}$/;

	function checkRegx(validate, regx){
 		if(validate.match(regx)){
      	console.log("\nValid input");
   	}
   	else{
      	console.log("\nInvalid input");
   	}
	}

	while(true){
		console.log("\n====Select one option====");
		console.log("1 validate firstname");
		console.log("2 validate lastname");
		console.log("3 validate email");
		console.log("4 validate phone");
		console.log("5 EXIT");

		let choice = prompt("\nEnter your choice =");
		switch(choice){
			case "1":
				let  firstName = prompt("Enter firstname =");
				checkRegx(firstName, firstNameRegx);
				break;
			case "2":
				let  lastName = prompt("Enter lastname =");
            checkRegx(lastName, lastNameRegx);
				break;
			 case "3":
            let  email = prompt("Enter email =");
            checkRegx(email, emailRegx);
            break;
			 case "4":
            let  phoneNumber = prompt("Enter phoneNumber =");
            checkRegx(phoneNumber,  phoneNumberRegx);
            break;
			case "5":
				return false;
			default:
				console.log("\nInvalid Choice")
		}
}

