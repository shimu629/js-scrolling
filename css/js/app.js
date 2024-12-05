let body = document.querySelector('body')
let scrollPage = document.querySelector('.scroll')

window.addEventListener('scroll', ()=>{
    let totalHeight = body.clientHeight; //5000
    let scrollToTop = window.scrollY; // 10
    let innerHeight = window.innerHeight;

   let countedHeight = totalHeight - innerHeight 
   let result = Math.round((100 / countedHeight) * scrollToTop)
   scrollPage.style.background =  `conic-gradient(red, red ${result}% , green ${result}%);`

})