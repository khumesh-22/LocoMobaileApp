export const validateLoginForm = (inputs) => {
	let errors = {};
  
	const user_name = /^[0-9]+$/;
  
	// LogIn Validation
	if (!inputs.email) {
		errors.email = 'Please input email';
	  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		errors.email = 'Please enter a valid email address';
	  }
	
  
	if (!inputs.password) {
	  errors.password = 'Please input password';
	} else if (inputs.password.length < 8) {
	  errors.password = 'Min password length of 8';
	}
  
	return errors;
  };
  
  export const validateSignUpForm = (inputs) => {
	let errors = {};
  
	const user_name = /^[0-9]+$/;
	const name = /^[a-zA-Z]+$/;
  
	// SignUp Validation
	if (!inputs.name) {
	  errors.name = 'Please input name';
	} else if (!name.test(inputs.name)) {
	  errors.name = 'Name should contain only letters';
	}
  
	if (!inputs.email) {
	  errors.email = 'Please input email';
	} else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
	  errors.email = 'Please enter a valid email address';
	}
  
	if (inputs.age && !/^\d+$/.test(inputs.age)) {
	  errors.age = 'Age should contain only digits';
	}
  
	if (inputs.password && inputs.password.length < 8) {
	  errors.password = 'Min password length of 8';
	}
  
	// Make profile_picture optional
	if (inputs.profile_picture && inputs.profile_picture.uri) {
	  // Handle cases where a valid profile picture is selected
	}
  
	return errors;
  };
  