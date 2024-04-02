import {getMe, login, register} from "./auth.js"
import { hideLoader, showLoader } from "./utils.js";
import { 
    renderCourses,
    renderArticles,
    renderPopularCourses,
    renderPopularCourses,
    renderPopularArticles
 } from "./shared.js";
getMe()
let loginBtn = document.querySelector('#login-btn');
let registerBtn = document.querySelector('#register-btn');

loginBtn.addEventListener('click',e => {
    showLoader();
    login()
    hideLoader()
})
registerBtn.addEventListener('click',e => {
    showLoader();
    register()
    hideLoader()
})

window.addEventListener('load', () => {
    renderCourses()
    renderArticles()
    renderPopularCourses()
    renderPopularArticles(); 

    hideLoader()
})
