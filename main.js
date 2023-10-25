const video = document.querySelectorAll('.grid video');
const contPop = document.querySelector('.pop-video');
const popVideo = document.querySelector('.pop-video video');

video.forEach(element =>{
    element.onclick=()=>{
        contPop.style.display = "block";
        popVideo.src = element.getAttribute("src")   
    }
})

document.querySelector('.pop-video span').onclick = ()=>{
    contPop.style.display = "none";
}
