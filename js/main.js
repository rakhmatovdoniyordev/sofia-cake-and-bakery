const header = document.querySelector(".header")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        header.classList.add("shrink")
    }else{
        header.classList.remove("shrink")
    }
})

const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 300)
    })
    scrollBtn.addEventListener('click', () =>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })