import { getCourses } from "./utils.js";

const renderCourses = () => {
    const courses = getCourses()
    console.log("Render Courses => ", courses);
}

export{
    renderCourses
}