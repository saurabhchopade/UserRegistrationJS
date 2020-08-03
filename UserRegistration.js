//lib
const prompt = require('prompt-sync')();
//Regx patterns
const firstNameRegx = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegx = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegx = /^[a-z0-9]+[\.\-\+]?[a-z0-9]+[\@][a-z0-9]{1,}[\.][a-z]+([\.]?[a-z]+)$/;
const phoneNumberRegx = /^(91)[ ][0-9]{10}$/;
const passwordRegx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}[\\@\\#][a-zA-Z0-9]*$/;

	function checkRegx(input, regx){
 		if(input.match(regx)){
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
		console.log("5 validate password");
		console.log("6 EXIT");

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
            let  password = prompt("Enter password =");
            checkRegx(password,   passwordRegx);
            break;

			case "6":
				return false;
			default:
				console.log("\nInvalid Choice")
		}
}

