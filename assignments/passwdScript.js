let password = "secret";
let i;

while (i !== password){
    let i = prompt("Please enter the password:");
    if (i !== password) {
        alert("incorrect password");
    } else alert("correct password")
}