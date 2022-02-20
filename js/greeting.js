const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const doing = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGretting(userName);
};

const paintGretting = (username) => {
    greeting.innerText = `HELLO ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGretting(saveUserName);
    console.log("todo");
}
