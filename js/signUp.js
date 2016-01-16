Parse.initialize("31D4grqqykf9DaDyMbzWjmhBbea5vgtVGgWHW7pW", "ejrcLnAAXVGTVSUOtexLG0weUybapOHe2T3aaOsZ");

function createUser(username, email, pass) {
	var newUser = new Parse.User();
	newUser.set("username", username);
	newUser.set("email", email);
	newUser.set("password", pass);

	newUser.signUp(null, {
		success: function(newUser) {
			
		},
		error: function(newUser, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});

}

function logIn(username, pass) {
	Parse.User.logIn(username, pass, {
		success: function(user) {
			// Do stuff after successful login
		},
		error: function(user, error) {
			// Login failed. Check error to see why
		}
	});
}

function onClickSignup() {
	var fullName = document.getElementById("fullname").value;
	var userName = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var pw = document.getElementById("pw").value;
	var confirmPw = document.getElementById("confirmPw").value;

	createUser(userName, email, pw);

	//window.location.href = "index.html";

}