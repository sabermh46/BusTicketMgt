var bus = document.querySelector('.busContainer');
var wheel = document.querySelectorAll('.wheel');

window.addEventListener('scroll', (e)=>{
    var scY = window.scrollY;
    if(scY < 501){
        bus.style.transform = `translateX(-${scY}px)`;
        wheel.forEach(wh => {
            wh.style.transform = `rotate(-${scY * 2}deg)`;
        })
    }
    
    console.log(scY);
})