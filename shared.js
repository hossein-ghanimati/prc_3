import { getCourses, getArticles } from "./utils.js";

const renderCourses = () => {
    const courses = getCourses()
    console.log("Render Courses => ", courses);
}
const renderArticles = () => {
    let articles = getArticles();
    console.log(articles)
}

export{
    renderCourses,
    renderArticles
}
