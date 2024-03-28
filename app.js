import {getMe, register, login} from "./auth.js"
getMe()
let loginBtn = document.querySelector('#login-btn');
let registerBtn = document.querySelector('#register-btn');

loginBtn.addEventListener('click',e => {
    login()
})
registerBtn.addEventListener('click',e => {
    register()
})
