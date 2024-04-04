import { 
    getCourses,
    renderPopularCourses,
    getArticles,
    getPopularCourses,
    getArticles,
    getPopularArticles,
    getNotifications
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

const renderPopularCourses = () => {
    let popularCourses = getPopularCourses()
    console.log("Render Popular Courses => ", popularCourses);
}

const renderNotifications = () => {
    const notifications = getNotifications();
    console.log("Render Notifications => ", notifications);
}

export{
    renderCourses,
    renderArticles,
    renderPopularCourses,
    renderPopularCourses,
    renderPopularArticles,
    renderNotifications
}
