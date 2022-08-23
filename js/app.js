let moon = document.getElementById('moon');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log(value)

    moon.style.marginLeft = value * -0.8 + 'px';
    moon.style.marginTop = value * 0.8 + 'px';
    // moon.style.height= 80 + '%';
    // moon.style.width= 80 + '%';
    moon.style.rotate= value * 0.1 + 'deg';
    moon.style.zIndex=-9;
})