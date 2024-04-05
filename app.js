import {getMe, login, register} from "./auth.js"
import { hideLoader, showLoader } from "./utils.js";
import { 
    renderCourses,
    renderArticles,
    renderPopularCourses,
    renderPopularCourses,
    renderPopularArticles,
    renderNotifications,
    uploadCourse
} from "./shared.js";
getMe()
let loginBtn = document.querySelector('#login-btn');
let registerBtn = document.querySelector('#register-btn');
let uploadCourseBtn = document.querySelector('#upload-course-btn');

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

uploadCourseBtn.addEventListener('click',e => {
    showLoader();
    uploadCourse()
    hideLoader()
})

window.addEventListener('load', () => {
    renderCourses()
    renderArticles()
    renderPopularCourses()
    renderPopularArticles(); 
    renderNotifications();
    hideLoader()
})
