import './styles.scss'

// FILE INPUT ----------

const dropContainer = document.querySelector('.form__dropzone')
const fileInput = document.querySelector('.fileInput')
const fileName = document.querySelector('.filePreview__name')
const fileDetails = document.querySelector('.filePreview__details')
const filePreview = document.querySelector('.form__filePreview')
const fileThumbnail = document.querySelector('.filePreview__thumbnail')
const addButton = document.querySelector('.btn--add')
const trashBin = document.querySelector('.filePreview__bin')

dropContainer.addEventListener('dragenter', dndHandler)
dropContainer.addEventListener('dragover', dndHandler)
dropContainer.addEventListener('drop', dndHandler)

function dndHandler(e) {
    if (e.type === 'drop') {
        fileInput.files = e.dataTransfer.files
        createFilePreview(e)
    }
    e.preventDefault()
}

fileInput.onchange = (e) => {
    createFilePreview(e)
}

addButton.onclick = (e) => {
    fileInput.click()
    e.preventDefault()
}

trashBin.onclick = () => {
    fileInput.value = ''
    fileThumbnail.src = ''
    filePreview.classList.toggle('hide')
}

const createFilePreview = (e) => {
    const obj = (e.type === 'drop') ? e.dataTransfer.files[0] : e.target.files[0]
    const { name, size } = obj
    const formattedSize = String(size / 1024 / 1024).slice(0, 3) + ' mb'
    const dotIndex = name.indexOf('.')
    const justName = name.substring(0, dotIndex)
    const fileExtension = name.substring(dotIndex + 1).toUpperCase()

    fileThumbnail.src = URL.createObjectURL(obj)
    fileName.innerHTML = justName
    fileDetails.innerHTML = fileExtension + ' ' + formattedSize
    filePreview.classList.remove('hide')
}

// SLIDER --------------

const images = document.querySelectorAll('.slider__wrapper .slider__line img')
const sliderLine = document.querySelector('.slider__line')
let count = 0
let width;

const init = () => {
    width = document.querySelector('.slider__wrapper').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 0.7 + 'px'
        item.style.height = 'auto'
    })
    moveSlider()
}

init()
window.addEventListener('resize', init)

document.querySelector('.slider--prev').addEventListener('click', () => {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    moveSlider()
})

document.querySelector('.slider--next').addEventListener('click', () => {
    count++
    if (count >= images.length) {
        count = 0
    }
    moveSlider()
})

function moveSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}


