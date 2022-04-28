var btn = document.querySelector('.profile .btn');
var pro = document.querySelector('.profile');
var avatar = document.querySelector('.profile .avatar');
var user = document.querySelector('.profile .userName');
var cnt=0;

btn.addEventListener('click', ()=>{
    
    if(++cnt%2==0) {
        pro.style.transitionDelay = '2s, 1.25s';
        avatar.style.transitionDelay = '0s, 0.75s, 0.75s';
        user.style.transitionDelay = '2s, 0.75s, 0.75s';
    } else {
        pro.style.transitionDelay = '0s, 0.75s';
        avatar.style.transitionDelay = '0.75s, 0.75s, 0.75s';
        user.style.transitionDelay = '0s, 0.75s, 0.75s';
    }

    pro.classList.toggle('active');
})