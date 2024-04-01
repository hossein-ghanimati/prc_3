import { 
    getCourses,
     getArticles,
     getPopularArticles
     } from "./utils.js";

const renderCourses = () => {
    const courses = getCourses()
    console.log("Render Courses => ", courses);
}
const renderArticles = () => {
    const articles = getArticles();
    console.log("Render Articles => ", articles);
}

const renderPopularArticles = () => {
    const popularArticles = getPopularArticles()
    console.log("Render PopularArticles => ", popularArticles);
}

export{
    renderCourses,
    renderArticles,
    renderPopularArticles
}
