export function getmeta() {
    const API_KEYS = ['AIzaSyCBbXEoPBl5b0kGeXK8g_21wX1jgnybHDw']
    const randomIndex = Math.floor(Math.random() * API_KEYS.length);
    let prams = {apiKey:API_KEYS[randomIndex],blogId:'8834362630445859962',postId:'5091986909373452557'}
    return JSON.stringify(prams);
}