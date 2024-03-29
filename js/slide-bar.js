let slider = document.querySelector(".slider");
let change = new Event('change')
let onArrow = true;
let scrollPos = 0;

window.addEventListener("keydown", event => {
    if(onButton === false && onArrow === true){
        if(event.keyCode === 37){
            if(slider.value <= 104 && slider.value > 78){
                slider.value = 77;
                slider.dispatchEvent(change);
            }else if(slider.value <= 78 && slider.value > 52){
                slider.value = 51;
                slider.dispatchEvent(change);    
            }else if(slider.value <= 52 && slider.value > 26){
                slider.value = 25;
                slider.dispatchEvent(change);
            }else if(slider.value <= 26 && slider.value >= 0){
                slider.value = 1;
                slider.dispatchEvent(change);
            }
        }else if(event.keyCode === 39){
            if(slider.value >= 0 && slider.value <= 26){
                slider.value = 27;
                slider.dispatchEvent(change);
            }else if(slider.value > 26 && slider.value <= 52){
                slider.value = 53;
                slider.dispatchEvent(change);    
            }else if(slider.value > 52 && slider.value <= 78){
                slider.value = 79;
                slider.dispatchEvent(change);
            }
        }

        onArrow = false;
    }
    setTimeout(()=>{
        onArrow = true;
    }, 1000);
});

slider.onchange = function(){
    if(slider.value >= 0 && slider.value <= 26){
        gsap.to(slider, {duration: 2, value: 13, ease: "elastic.out(1, 0.5)"})
    }else if(slider.value > 26 && slider.value <= 52){
        gsap.to(slider, {duration: 2, value: 39, ease: "elastic.out(1, 0.5)"})     
    }else if(slider.value > 52 && slider.value <= 78){
        gsap.to(slider, {duration: 2, value: 65, ease: "elastic.out(1, 0.5)"})
    }else{
        gsap.to(slider, {duration: 2, value: 91, ease: "elastic.out(1, 0.5)"})
    }

    if(slider.value <= 26){
        gsap.to(".left-bar", {duration: 0.5, opacity:0, display: "none"});
        gsap.to(".right-bar", {duration: 0.5, opacity:0, display: "none"});
        
        gsap.to(".talk-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".medician-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".express-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".image-2", {duration: 1, x: 0, display: "block", opacity: 1});
        if(scrWidth >= 720){
            gsap.to(".image-1", {duration: 1, y: 0, display: "block", opacity: 1});
            gsap.to(".image-3", {duration: 1, x: 0, display: "block", opacity: 1});
            gsap.to(".image-4", {duration: 1, y: 0, display: "block", opacity: 1});
        }

        if(scrWidth <= 475){
            gsap.to(".main-title", {duration: 1.5, fontSize: "28px", marginTop: "129x"})
            gsap.to(".slider", {duartion: 1.5, top: "380px"});
            gsap.to(".dots", {duartion: 1.5, top: "381.5px"});
        }else{
            gsap.to(".main-title", {duration: 0.5, fontSize: "48px", marginTop: "181px"});
        }
        
        gsap.to(".main-text", {duration: 1, opacity: 1});

        document.querySelector('.talk-audio').pause();
        document.querySelector('.medician-audio').pause();
        document.querySelector('.express-audio').pause();
        document.querySelector('.talk-audio').load();
        document.querySelector('.medician-audio').load();
        document.querySelector('.express-audio').load();
    }
    else if(slider.value > 26 && slider.value <= 52){
        if(barPos === 3){
            gsap.to(".left-bar", {duration: 0.5, borderRadius: "100px 0 0 0"});
            gsap.to(".right-bar", {duration: 0.5, borderRadius: " 0 0 100px 0"});
            gsap.to(".left-bar", {duration: 1.5, x: scrWidthToBar, opacity: 1, display:"block"});
            gsap.to(".right-bar", {duration: 1.5, x: -scrWidthToBar, opacity: 1, display:"block"});
            barPos = 1;
        }else{
            gsap.to(".left-bar", {duration: 0.5,borderRadius: "0 0 100px 0"});
            gsap.to(".right-bar", {duration: 0.5, borderRadius: " 100px 0 0 0"});
            gsap.to(".left-bar", {duration: 1.5, x: 0, opacity: 1, display:"block"});
            gsap.to(".right-bar", {duration: 1.5, x: 0, opacity: 1, display:"block"});
            barPos = 1;
        }

        if(scrWidth <= 475){
            gsap.to(".main-title", {duration: 1.5, fontSize: "22px", marginTop: "112px"})
            gsap.to(".slider", {duartion: 1.5, top: "524px"});
            gsap.to(".dots", {duartion: 1.5, top: "525.5px"});
        }else{
            gsap.to(".main-title", {duration: 0.5, fontSize: "24px", marginTop: "65px"});
        }

        gsap.to(".image-1", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".image-2", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".image-3", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".image-4", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".main-text", {duration: 0.5, opacity: 0});

        gsap.to(".medician-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".express-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".talk-title", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".talk-text", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".talk-img", {duration: 1, opacity: 0.9, display: "block"});

        if(onVoice == true){
            document.querySelector('.talk-audio').play();
        }

        document.querySelector('.medician-audio').pause();
        document.querySelector('.express-audio').pause();
        document.querySelector('.medician-audio').load();
        document.querySelector('.express-audio').load();
        
    }else if(slider.value > 52 && slider.value <= 78){
        gsap.to(".left-bar", {duration: 0.5, borderRadius: "100px 0 0 0"});
        gsap.to(".right-bar", {duration: 0.5, borderRadius: " 0 0 100px 0"});
        gsap.to(".left-bar", {duration: 1.5, x: scrWidthToBar, opacity: 1, display:"block"});
        gsap.to(".right-bar", {duration: 1.5, x: -scrWidthToBar, opacity: 1, display:"block"});
        barPos = 2;

        gsap.to(".image-1", {duration: 0.5, opacity: 0});
        gsap.to(".image-2", {duration: 0.5, opacity: 0});
        gsap.to(".image-3", {duration: 0.5, opacity: 0});
        gsap.to(".image-4", {duration: 0.5, opacity: 0});
        if(scrWidth <= 475){
            gsap.to(".main-title", {duration: 1.5, fontSize: "22px", marginTop: "112px"});
            gsap.to(".slider", {duartion: 1.5, top: "524px"});
            gsap.to(".dots", {duartion: 1.5, top: "525.5px"});
        }else{
            gsap.to(".main-title", {duration: 0.5, fontSize: "24px", marginTop: "65px"})
        }
        gsap.to(".main-text", {duration: 0.5, opacity: 0});

        gsap.to(".talk-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".express-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".express-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".medician-title", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".medician-text", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".medician-img", {duration: 1, opacity: 0.9, display: "block"});

        if(onVoice == true){
            document.querySelector('.medician-audio').play();
        }

        document.querySelector('.talk-audio').pause();
        document.querySelector('.express-audio').pause();
        document.querySelector('.talk-audio').load();
        document.querySelector('.express-audio').load();

    }else if(slider.value > 78 && slider.value <= 104){
        if(barPos === 1){
            gsap.to(".left-bar", {duration: 0.5, borderRadius: "100px 0 0 0"});
            gsap.to(".right-bar", {duration: 0.5, borderRadius: " 0 0 100px 0"});
            gsap.to(".left-bar", {duration: 1.5, x: scrWidthToBar, opacity: 1, display:"block"});
            gsap.to(".right-bar", {duration: 1.5, x: -scrWidthToBar, opacity: 1, display:"block"});
            barPos = 3;
        }else{
            gsap.to(".left-bar", {duration: 0.5, borderRadius: "0 0 100px 0"});
            gsap.to(".right-bar", {duration: 0.5, borderRadius: "100px 0 0 0"});
            gsap.to(".left-bar", {duration: 1.5, x: 0, opacity: 1, display:"block"});
            gsap.to(".right-bar", {duration: 1.5, x: 0, opacity: 1, display:"block"});
            barPos = 3;
        }

        gsap.to(".image-1", {duration: 0.5, opacity: 0});
        gsap.to(".image-2", {duration: 0.5, opacity: 0});
        gsap.to(".image-3", {duration: 0.5, opacity: 0});
        gsap.to(".image-4", {duration: 0.5, opacity: 0});
        if(scrWidth <= 475){
            gsap.to(".slider", {duartion: 1.5, top: "524px"});
            gsap.to(".dots", {duartion: 1.5, top: "525.5px"});

            gsap.to(".main-title", {duration: 1.5, fontSize: "22px", marginTop: "112px"})
        }else{
            gsap.to(".main-title", {duration: 0.5, fontSize: "24px", marginTop: "65px"})
        }
        gsap.to(".main-text", {duration: 0.5, opacity: 0});

        gsap.to(".talk-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".talk-img", {duration: 0.5, opacity: 0, display: "none"});

        gsap.to(".medician-title", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-text", {duration: 0.5, opacity: 0, display: "none"});
        gsap.to(".medician-img", {duration: 0.5, opacity: 0, display: "none"});
        
        gsap.to(".express-title", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".express-text", {duration: 1, opacity: 1, display: "block"});
        gsap.to(".express-img", {duration: 1, opacity: 0.9, display: "block"});

        if(onVoice == true){
            document.querySelector('.express-audio').play();
        }

        document.querySelector('.talk-audio').pause();
        document.querySelector('.medician-audio').pause();
        document.querySelector('.talk-audio').load();
        document.querySelector('.medician-audio').load();
    }


}

