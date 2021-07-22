AOS.init({
    easing: 'ease-in-out-sine'
});
const menuBtn = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-times");
const menu = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const upBtn = document.querySelector(".up-btn");
menuBtn.addEventListener("click", () =>{
    menu.style.left = ".5rem";
    menuBtn.style.display = "none";
    menuClose.style.display = "block";
});
menuClose.addEventListener("click", () =>{
    menu.style.left = "-210px";
    menuBtn.style.display = "block";
    menuClose.style.display = "none";
});
if(window.matchMedia("(min-width: 600px) and (max-width: 991px)").matches){
    menuBtn.addEventListener("click", () =>{
        menu.style.width = "200px";
    });
    menuClose.addEventListener("click", () =>{
        menu.style.width = "4rem";
        menu.style.left = "0";
    });
    menu.addEventListener("mouseover",() =>{
        menu.style.width = "200px";
        menuBtn.style.display = "none";
        menuClose.style.display = "block";
    })
    menu.addEventListener("mouseleave",() =>{
        menu.style.width = "4rem";
        menuBtn.style.display = "block";
        menuClose.style.display = "none";
    })
}
upBtn.addEventListener("click", () =>{
    window.scrollTo(0,0);
})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $("header").addClass("header-bg")
            $("header nav").removeClass("nav-radius")
            $(".up-btn").fadeIn()
        }else{
            $("header").removeClass("header-bg")
            $("header nav").addClass("nav-radius")
            $(".up-btn").fadeOut()
        }
    })
    $('.submit').click(function (event){
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div><i class="fas fa-check-circle"></i>Email is valid</div>')
            $(".status div").eq(0).css("color","#2b72f5")
        }else{
            status.append('<div><i class="fas fa-times-circle"></i>Email is not valid</div>')
            $(".status div").eq(0).css("color","#ff4141")
            event.preventDefault()
        }
        if(subject.length >= 2){
            status.append('<div><i class="fas fa-check-circle"></i>Subject is valid</div>')
            $(".status div").eq(1).css("color","#2b72f5")
        }else{
            status.append('<div><i class="fas fa-times-circle"></i>Subject must have 2 characters</div>')
            $(".status div").eq(1).css("color","#ff4141")
            event.preventDefault()
        }
        if(message.length >= 10){
            status.append('<div><i class="fas fa-check-circle"></i>Message is valid</div>')
            $(".status div").eq(2).css("color","#2b72f5")
        }else{
            status.append('<div><i class="fas fa-times-circle"></i>Message is too short</div>')
            $(".status div").eq(2).css("color","#ff4141")
            event.preventDefault()
        }
    })
})
