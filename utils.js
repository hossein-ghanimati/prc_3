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

export {
    hideLoader,
    showLoader,   
    getCourses
}