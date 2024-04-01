import { 
    getCourses,
    getArticles,
    getPopularCourses
     } from "./utils.js";

const renderCourses = () => {
    const courses = getCourses()
    console.log("Render Courses => ", courses);
}
const renderArticles = () => {
    let articles = getArticles();
    console.log(articles)
}

const renderPopularCourses = () => {
    let popularCourses = getPopularCourses()
    console.log("Render Popular Courses => ", popularCourses);
}

export{
    renderCourses,
    renderArticles,
    renderPopularCourses
}
