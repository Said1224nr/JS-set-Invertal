let countDate = document.querySelector('.countDate')

const UpdateDate = () => {
    let NowData = new Date()
    let sec = NowData.getSeconds()
    let min = NowData.getMinutes()
    let hour = NowData.getHours()
    
    counter = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
    countDate.textContent = `${counter}`
}

setInterval(() => {
    UpdateDate()
}, 1000)