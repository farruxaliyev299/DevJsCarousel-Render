const leftArrow = document.querySelector(".welcome-border .left-arrow");
const rightArrow = document.querySelector(".welcome-border .right-arrow");

const carousel = document.querySelector(".carousel");


leftArrow.addEventListener("click",()=>{
    let activeImage = document.querySelector(".carousel .active");
    // console.log(activeImage);
    if(activeImage.previousElementSibling === null){
        activeImage.classList.remove("active");
        carousel.lastElementChild.classList.add("active");
        carousel.lastElementChild.classList.remove("d-none");
    }
    else{
        activeImage.classList.remove("active");
        activeImage.previousElementSibling.classList.add("active");
        activeImage.previousElementSibling.classList.remove("d-none");
    }
    carousel.childNodes.forEach(element => {
        if(!element.classList.contains("active")){
            element.classList.add("d-none");
        }
    });
})

rightArrow.addEventListener("click",()=>{
    let activeImage = document.querySelector(".carousel .active");
    // console.log(activeImage);
    if(activeImage.nextElementSibling === null){
        activeImage.classList.remove("active");
        carousel.firstElementChild.classList.add("active");
        carousel.firstElementChild.classList.remove("d-none");
    }
    else{
        activeImage.classList.remove("active");
        activeImage.nextElementSibling.classList.add("active");
        activeImage.nextElementSibling.classList.remove("d-none");
    }
    carousel.childNodes.forEach(element => {
        if(!element.classList.contains("active")){
            element.classList.add("d-none");
        }
    });
})