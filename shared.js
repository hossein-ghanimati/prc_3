import { 
    getCourses,
    renderPopularCourses,
    getArticles,
    getPopularCourses,
    getArticles,
    getPopularArticles,
    getNotifications,
    createCourseData,
    sendCourseData,
    createArticleData,
    sendArticleData
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

const uploadCourse = () => {
    const courseData = createCourseData();
    const sendReq = sendCourseData(courseData);

    if (sendReq.status == 201) {
        console.log("Uploading Course Was Successful");
    }
}

const uploadArticle = () => {
    const articleData = createArticleData();
    const sendReq = sendArticleData(articleData);

    if (sendReq.status == 201) {
        console.log("Uploading Article Was Successful");
    }
}

export{
    renderCourses,
    renderArticles,
    renderPopularCourses,
    renderPopularCourses,
    renderPopularArticles,
    renderNotifications,
    uploadCourse,
    uploadArticle
}
