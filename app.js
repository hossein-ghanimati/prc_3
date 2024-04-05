import {getMe, login, register} from "./auth.js"
import { hideLoader, showLoader } from "./utils.js";
import { 
    renderCourses,
    renderArticles,
    renderPopularCourses,
    renderPopularCourses,
    renderPopularArticles,
    renderNotifications,
    uploadCourse,
    uploadArticle
} from "./shared.js";
getMe()
let loginBtn = document.querySelector('#login-btn');
let registerBtn = document.querySelector('#register-btn');
let uploadCourseBtn = document.querySelector('#upload-course-btn');
let uploadArticleBtn = document.querySelector('#upload-article-btn');

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
uploadArticleBtn.addEventListener('click',e => {
    // showLoader();
    uploadArticle()
    // hideLoader()
})

window.addEventListener('load', () => {
    renderCourses()
    renderArticles()
    renderPopularCourses()
    renderPopularArticles(); 
    renderNotifications();
    hideLoader()
})
