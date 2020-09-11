//Group Section
document.querySelector(".group__link").addEventListener("click",function(){
    let leftPosition=document.querySelector(".header");
    leftPosition.style.left=0;
});

// Header Cross Button
document.querySelector(".header__link").addEventListener("click",function(){
    document.querySelector(".header").style.left=-40+"rem";
});


//Pop up Section
let popupShow=document.querySelector(".popup");
let popupLink=document.querySelector(".popup__link");

document.querySelector(".header__search-icon").addEventListener("click", function () {
    popupShow.classList.add("popup--show");
});

document.querySelector(".popup__link").addEventListener("click", function () {
    popupShow.classList.remove("popup--show");
});


//The Project Jacket Box Section
setInterval(() => {
    document.querySelector(".main__project-jacket-box").classList.toggle("show-1");
}, 2000);


//Creating a Timer and Append it to the Discount Text section
let CountDownDate = new Date("Oct 7, 2020 21:40:59").getTime();

setInterval(() => {
    let todayDate = new Date().getTime();
    let subtractDistance = CountDownDate - todayDate;

    let days = Math.floor(subtractDistance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((subtractDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let minutes = Math.floor((subtractDistance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((subtractDistance % (1000 * 60)) / 1000);

    document.querySelector(".main__discount-timer").innerHTML= days+ "<span>Day</span> "+ hours+"<span>Hour</span> "+minutes+"<span>Min</span> " +seconds+"<span>Sec</span> ";

}, 1000);