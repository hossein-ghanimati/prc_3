const hideLoader = () => {
    console.log('Data Loaded')
}

const showLoader = (data) => {
    console.log(`Loadin ${data}... Pleas Wait.`)
}

const getCourses = () => {
    return [
        {_id : 1, name : "Canvas"},
        {_id : 2, name : "HTML"},
        {_id : 3, name : "CSS"}
    ]
}
const getArticles = () => {
    return [
        {_id : 1, name : "Canvas"},
        {_id : 2, name : "HTML"},
        {_id : 3, name : "CSS"}
    ]
}


const getPopularCourses  = () => {
  return [
        {_id : 1, name : "Canvas"},
        {_id : 2, name : "HTML"},
        {_id : 3, name : "CSS"}
    ]
}
const getPopularArticles = () => {

    return [
        {_id : 1, name : "Canvas"},
        {_id : 2, name : "HTML"},
        {_id : 3, name : "CSS"}
    ]
}

const getNotifications = () => {
    return [
        {_id : 1, name : "Notification_1"},
        {_id : 2, name : "Notification_2"},
        {_id : 3, name : "Notification_3"}
    ]
}

const createCourseData = () => {
    return {
        _id : 10,
        name : "React"
    }
}
const sendCourseData = data => {
    return {
        msg : "Data Sent Successfully",
        status : 201
    }
}
const sendArticleData = data => {
    return {
        msg : "Data Sent Successfully",
        status : 201
    }
}

export {
    hideLoader,
    showLoader,   
    getCourses,
    getArticles,
    getPopularCourses,
    getPopularArticles,
    getNotifications,
    createCourseData,
    sendCourseData,
    sendArticleData
}
