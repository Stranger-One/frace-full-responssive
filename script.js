let labels = document.querySelectorAll(".button-container label")
let labelContainer = document.querySelector(".button-container")

labelContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LABEL") {
        labels.forEach((label) => {
            label.classList.remove("active-label")
        })
        e.target.classList.add("active-label")
    }
})


let menu = document.querySelector(".menu")
let navUl = document.querySelector("header nav ul")
let navCount = 0;
menu.addEventListener("click", ()=>{
    if(navCount == 0){
        navUl.style.right = "0%"
        navCount = 1
    } else {
        navUl.style.right = "-60%"
        navCount = 0
    }
})



// =========== GSAP Animations ==========

let tl1 = gsap.timeline()
tl1.from("nav", {
    y: -100,
    stagger: 0.3,
})
tl1.from(".hero-header", {
    opacity: 0,
    duration: 1,
    y: 100,
}, "same")
tl1.from(".hero-para", {
    opacity: 0,
    duration: 1,
}, "same")
tl1.from(".hero-btn", {
    opacity: 0,
    duration: 1,
}, "same")
tl1.from(".no-credit", {
    opacity: 0,
    duration: 1,
}, "same")
tl1.from(".hero-bottom-img", {
    y: 100,
    opacity: 0,
})

let elements = gsap.utils.toArray(".from-bottom");
elements.forEach((elements)=>{
    gsap.from(elements, {
        duration: 1, 
        opacity: 0,
        y: 50,
        scrollTrigger:{
            trigger: elements,
            start: "top 80%",
            end: "bottom 60%",
        }
    });
})

document.querySelector(".button-container").addEventListener("click", () => {
    gsap.from(".left-to-center", {
        x: -50,
        opacity: 0,
        duration: 1
    });
    gsap.from(".right-to-center", {
        x: 50,
        opacity: 0,
        duration: 1
    });
});

