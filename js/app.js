window.onload = function() {
  let loading = document.querySelector('.loading');
  let container = document.querySelector('.container');
  document.body.classList.add('no-scroll');
  container.style.opacity = '0';
  setTimeout(function() {
    loading.style.opacity = '0';
    loading.style.visibility = 'hidden';
    container.style.opacity = '1';
    setTimeout(function() {
      loading.remove();
      document.body.classList.remove('no-scroll');
    }, 400);
  }, 2500);

};

let moon = document.getElementById('moon');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    if(x>768){
        moon.style.marginLeft = value * -0.8 + 'px';
        moon.style.marginTop = value * 0.8 + 'px';
        moon.style.rotate= value * 0.1 + 'deg';
        moon.style.zIndex=-9;
    }
    else{
        // moon.style.marginLeft = value * -0.8 + 'px';
        moon.style.marginTop = value * 0.8 + 'px';
        moon.style.rotate= value * 0.1 + 'deg';

        moon.style.zIndex=-9;
    }
    
})

const slider1 = document.querySelector('#slider')
const canvas1 = document.querySelector('#canvas')

const slider2 = document.querySelector('#slider2')
const canvas2 = document.querySelector('#canvas2')

const slider3 = document.querySelector('#slider3')
const canvas3 = document.querySelector('#canvas3')

const slider4 = document.querySelector('#slider4')
const canvas4 = document.querySelector('#canvas4')

const slider5 = document.querySelector('#slider5')
const canvas5 = document.querySelector('#canvas5')

const slider6 = document.querySelector('#slider6')
const canvas6 = document.querySelector('#canvas6')

const slider7 = document.querySelector('#slider7')
const canvas7 = document.querySelector('#canvas7')

const slider8 = document.querySelector('#slider8')
const canvas8 = document.querySelector('#canvas8')

slider1.addEventListener('input', handleInputSlider1)
slider2.addEventListener('input', handleInputSlider2)
slider3.addEventListener('input', handleInputSlider3)
slider4.addEventListener('input', handleInputSlider4)
slider5.addEventListener('input', handleInputSlider5)
slider6.addEventListener('input', handleInputSlider6)
slider7.addEventListener('input', handleInputSlider7)
slider8.addEventListener('input', handleInputSlider8)
const ctx1 = canvas1.getContext('2d')
const ctx2 = canvas2.getContext('2d')
const ctx3 = canvas3.getContext('2d')
const ctx4 = canvas4.getContext('2d')
const ctx5 = canvas5.getContext('2d')
const ctx6 = canvas6.getContext('2d')
const ctx7 = canvas7.getContext('2d')
const ctx8 = canvas8.getContext('2d')

const images1 = []
const images2 = []
const images3 = []
const images4 = []
const images5 = []
const images6 = []
const images7 = []
const images8 = []
window.addEventListener('load', pageLoaded)
function pageLoaded() {
  for (let i = 1; i <=22; i += 1) {
    const number = i.toString().padStart(2, '00')
    // const url2 = `../assets/img/Planet-360/${number}.png`
    const url = `/Planets/assets/img/Planet-360/${number}.png`
    const image1 = new Image()
    const image2 = new Image()
    const image3 = new Image()
    const image4 = new Image()
    const image5 = new Image()
    const image6 = new Image()
    const image7 = new Image()
    const image8 = new Image()
    image1.src = url
    image2.src = url
    image3.src = url
    image4.src = url
    image5.src = url
    image6.src = url
    image7.src = url
    image8.src = url
    image1.addEventListener('load', () => {
      images1[i] = image1
      if (i === 1) {
        loadImage(i)
      }
    })
    image2.addEventListener('load', () => {
        images2[i] = image2
        if (i === 1) {
          loadImage2(i)
        }
    })

    image3.addEventListener('load', () => {
        images3[i] = image3
        if (i === 1) {
          loadImage3(i)
        }
    })
    image4.addEventListener('load', () => {
        images4[i] = image4
        if (i === 1) {
          loadImage4(i)
        }
    })
    image5.addEventListener('load', () => {
        images5[i] = image5
        if (i === 1) {
          loadImage5(i)
        }
    })
    image6.addEventListener('load', () => {
        images6[i] = image6
        if (i === 1) {
          loadImage6(i)
        }
    })
    image7.addEventListener('load', () => {
        images7[i] = image7
        if (i === 1) {
          loadImage7(i)
        }
    })
    image8.addEventListener('load', () => {
        images8[i] = image8
        if (i === 1) {
          loadImage8(i)
        }
    })
    
  }
}
function loadImage(index) {
  ctx1.drawImage(images1[index], 0, 0, canvas1.width, canvas1.height)
}
function loadImage2(index) {
  ctx2.drawImage(images2[index], 0, 0, canvas2.width, canvas2.height)
}
function loadImage3(index) {
  ctx3.drawImage(images3[index], 0, 0, canvas3.width, canvas3.height)
}
function loadImage4(index) {
  ctx4.drawImage(images4[index], 0, 0, canvas4.width, canvas4.height)
}
function loadImage5(index) {
  ctx5.drawImage(images5[index], 0, 0, canvas5.width, canvas5.height)
}
function loadImage6(index) {
  ctx6.drawImage(images6[index], 0, 0, canvas6.width, canvas6.height)
}
function loadImage7(index) {
  ctx7.drawImage(images7[index], 0, 0, canvas7.width, canvas7.height)
}
function loadImage8(index) {
  ctx8.drawImage(images8[index], 0, 0, canvas8.width, canvas8.height)
}



// HANDLE 
function handleInputSlider1() {
  loadImage(this.value)
}
function handleInputSlider2() {
    loadImage2(this.value)
}
function handleInputSlider3() {
    loadImage3(this.value)
  }
function handleInputSlider4() {
      loadImage4(this.value)
  }
  function handleInputSlider5() {
    loadImage5(this.value)
  }
  function handleInputSlider6() {
      loadImage6(this.value)
  }
  function handleInputSlider7() {
    loadImage7(this.value)
  }
  function handleInputSlider8() {
      loadImage8(this.value)
  }