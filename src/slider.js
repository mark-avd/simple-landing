const images = document.querySelectorAll('.slider__slide')
const sliderLine = document.querySelector('.slider__line')
const dots = document.querySelectorAll('.slider__dot')

let count = 0
let width

const setActiveDot = () => {
    dots.forEach((dot) => dot.classList.remove('slider__dot_active'))
    dots[count].classList.add('slider__dot_active')
}

const moveSlider = () => {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

const setSlider = (event) => {
    if (event.target.classList.contains('dot1')) {
        sliderLine.style.transform = 'translate(0)'
        count = 0
    }
    if (event.target.classList.contains('dot2')) {
        sliderLine.style.transform = 'translate(-' + 100 * (1 / 3) + '%)'
        count = 1
    }
    if (event.target.classList.contains('dot3')) {
        sliderLine.style.transform = 'translate(-' + 100 * (2 / 3) + '%)'
        count = 2
    }
    setActiveDot()
}

const switchSlide = (event, type) => {
    if (type === 'prev') {
        count--
        if (count < 0) {
            count = images.length - 1
        }
    }
    if (type === 'next') {
        count++
        if (count >= images.length) {
            count = 0
        }
    }
    moveSlider()
    setActiveDot()
}

sliderLine.addEventListener('click', setActiveDot)
dots[0].addEventListener('click', setSlider)
dots[1].addEventListener('click', setSlider)
dots[2].addEventListener('click', setSlider)
document.querySelector('.slider__switch_left').addEventListener('click', (event) => {
    switchSlide(event, 'prev')
})
document.querySelector('.slider__switch_right').addEventListener('click', (event) => {
    switchSlide(event, 'next')
})

const init = () => {
    width = document.querySelector('.slider__wrapper').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach((item) => {
        item.style.width = width + 'px'
        item.style.height = '535px'
    })
    moveSlider()
    setActiveDot()
}

init()
window.addEventListener('resize', init)
