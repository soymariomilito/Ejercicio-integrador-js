const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => container.classList.add("hover-left"));

left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

right.addEventListener("mouseenter", () => container.classList.add("hover-right"));

right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));

const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
const pass_field2 = document.querySelector(".pass-key2");
const showBtn2 = document.querySelector(".show2");
showBtn.addEventListener("click", function () {
    if(pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
    }else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
})

showBtn2.addEventListener("click", function () {
    if(pass_field2.type === "password") {
        pass_field2.type = "text";
        showBtn2.textContent = "HIDE";
        showBtn2.style.color = "#3498db";
    }else {
        pass_field2.type = "password";
        showBtn2.textContent = "SHOW";
        showBtn2.style.color = "#222";
    }
})
