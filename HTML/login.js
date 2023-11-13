import './mysql_db'
import mysql from "mysql";


var username_field = document.getElementById("username-field");

if (sessionStorage.getItem("autosave")) {
    username_field.value = sessionStorage.getItem("autosave");
};

username_field.addEventListener("change", () => {
    sessionStorage.setItem("autosave", username_field.value);
  });

function detail_check (username, password) {

    const login_details = {
        kalibh: "halford"
    };
    if (Object.keys(login_details).includes(username) && login_details[username] == password) {
        return true;
    } else {
        return false;
    };
};

function login() {
    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;
    result = detail_check(username, password);
    if (result) {
        document.getElementById("login-button").textContent = "Login"
        location.replace("./user.html")
    } else {
        document.getElementById("login-result").textContent = "Password or Username is incorrect."
    };
};