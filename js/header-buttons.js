//Voice Button

let btnVoice = document.querySelector(".btn-voice");
let btnVoiceBg = document.querySelector(".btn-voice-bg");
let textBtnVoice = document.querySelector(".txt-btn-voice");
let iconBtnVoice = document.querySelector(".icon-btn-voice");
let talkAudio = document.querySelector(".talk-audio");
let medicianAudio = document.querySelector(".medician-audio");
let expressAudio = document.querySelector(".express-audio");
let onVoice = true;

if(scrWidth > 1024){
    btnVoice.addEventListener("mouseenter", () => {
        gsap.to(btnVoiceBg, {duration: 0.2, opacity: 1, width: "174px"});
        setTimeout(() => {
            gsap.to(textBtnVoice, {duration: 0.2, opacity: 1});
        }, 100);
    });
    
    btnVoice.addEventListener("mouseleave", () => {
        gsap.to(textBtnVoice, {duration: 0.2, opacity: 0});
        setTimeout(() => {
            gsap.to(btnVoiceBg, {duration: 0.2, opacity: 0, width: "46px"});
        }, 100);
    });
}

btnVoice.addEventListener("click", () => {
    if(onVoice == true){
        iconBtnVoice.classList.remove("fa-volume-up");
        iconBtnVoice.classList.add("fa-volume-mute");
        textBtnVoice.textContent = "ligar voz";
        document.querySelector('.talk-audio').pause();
        document.querySelector('.medician-audio').pause();
        document.querySelector('.express-audio').pause();
        onVoice = false;
    }else{
        iconBtnVoice.classList.remove("fa-volume-mute");
        iconBtnVoice.classList.add("fa-volume-up");
        textBtnVoice.textContent = "desligar voz";
        document.querySelector('.talk-audio').load();
        document.querySelector('.medician-audio').load();
        document.querySelector('.express-audio').load();
        onVoice = true;
    }
});

//Light button

let btnLight = document.querySelector(".btn-light");
let btnLightBg = document.querySelector(".btn-light-bg");
let textBtnLight = document.querySelector(".txt-btn-light");
let iconBtnLight = document.querySelector(".icon-btn-light");
let onLight = true;

if(scrWidth > 1024){
    btnLight.addEventListener("mouseenter", () => {
        gsap.to(btnLightBg, {duration: 0.2, opacity: 1, width: "174px"});
        setTimeout(() => {
            gsap.to(textBtnLight, {duration: 0.2, opacity: 1});
        }, 100);
    });
    
    btnLight.addEventListener("mouseleave", () => {
        gsap.to(textBtnLight, {duration: 0.2, opacity: 0});
        setTimeout(() => {
            gsap.to(btnLightBg, {duration: 0.2, opacity: 0, width: "46px"});
        }, 100);
    });
}

btnLight.addEventListener("click", () => {
    if(onLight == true){
        iconBtnLight.classList.remove("fas");
        iconBtnLight.classList.add("far");
        textBtnLight.textContent = "acender luz"
        gsap.to("html", {duration: 0.5, backgroundColor: "black"});
        gsap.to(".left-buttons-hover div", {duration: 0.5, backgroundColor: "white"});
        gsap.to(".slider", {duration: 0.5, backgroundColor: "white"});
        gsap.to(".dot", {duration: 0.5, backgroundColor: "white"});
        gsap.to("h1", {duration: 0.5, color: "white"});
        gsap.to("p", {duration: 0.5, color: "#B2B2B2"});
        onLight = false;
    }else{
        iconBtnLight.classList.remove("far");
        iconBtnLight.classList.add("fas");
        textBtnLight.textContent = "apagar luz"
        gsap.to("html", {duration: 0.5, backgroundColor: "white"});
        gsap.to(".left-buttons-hover div", {duration: 0.5, backgroundColor: "#E0E0E0"});
        gsap.to(".slider", {duration: 0.5, backgroundColor: "rgb(218, 218, 218)"});
        gsap.to(".dot", {duration: 0.5, backgroundColor: "rgb(85, 85, 85)"});
        gsap.to("h1", {duration: 0.5, color: "black"});
        gsap.to("p", {duration: 0.5, color: "#767676"});
        onLight = true;
    }
});

//Menu button

let btnMenu = document.querySelector(".btn-menu");
let btnMenuBg = document.querySelector(".btn-menu-bg");
let textBtnMenu = document.querySelector(".txt-btn-menu");
let iconBtnMenu = document.querySelector(".icon-btn-menu");
let onMenu = true;

if(scrWidth > 1024){
    btnMenu.addEventListener("mouseenter", () => {
        gsap.to(btnMenuBg, {duration: 0.2, opacity: 1, width: "125px"});
        setTimeout(() => {
            gsap.to(textBtnMenu, {duration: 0.2, opacity: 1});
        }, 100);
    });
    
    btnMenu.addEventListener("mouseleave", () => {
        gsap.to(textBtnMenu, {duration: 0.2, opacity: 0});
        setTimeout(() => {
            gsap.to(btnMenuBg, {duration: 0.2, opacity: 0, width: "46px"});
        }, 100);
    });
}

btnMenu.addEventListener("click", () => {
    if(onMenu == true){
        iconBtnMenu.classList.remove("fa-ellipsis-v");
        iconBtnMenu.classList.add("fa-times");
        textBtnMenu.textContent = "fechar"
        gsap.to(".menu", {duration: 1, right: "0px", display: "flex", ease: "bouce.out(1, 0.3)"});
        gsap.to(".blur", {duration: 1, opacity: 0.3, display: "block"});
        gsap.to(".right-buttons", {duration: 0.5, right: "260px"});
        gsap.to(".right-buttons-hover", {duration: 0.5, right: "258px"});
        onMenu = false;
    }else{
        iconBtnMenu.classList.remove("fa-times");
        iconBtnMenu.classList.add("fa-ellipsis-v");
        textBtnMenu.textContent = "menu";
        gsap.to(".menu", {duration: 1, right: "-250px", display: "none", ease: "bouce.out(1, 0.3)"});
        gsap.to(".blur", {duration: 1, opacity: 0, display: "none"});
        gsap.to(".right-buttons", {duration: 1, right: "38px"});
        gsap.to(".right-buttons-hover", {duration: 1, right: "35px"});
        onMenu = true;
    }
});

//Info button

let btnInfo = document.querySelector(".btn-info");
let btnInfoBg = document.querySelector(".btn-info-bg");
let textBtnInfo = document.querySelector(".txt-btn-info");
let iconBtnInfo = document.querySelector(".icon-btn-info");

if(scrWidth > 1014){
    btnInfo.addEventListener("mouseenter", () => {
        gsap.to(btnInfoBg, {duration: 0.2, opacity: 1, width: "125px"});
        setTimeout(() => {
            gsap.to(textBtnInfo, {duration: 0.2, opacity: 1});
        }, 100);
    });
    
    btnInfo.addEventListener("mouseleave", () => {
        gsap.to(textBtnInfo, {duration: 0.2, opacity: 0});
        setTimeout(() => {
            gsap.to(btnInfoBg, {duration: 0.2, opacity: 0, width: "46px"});
        }, 100);
    });   
}