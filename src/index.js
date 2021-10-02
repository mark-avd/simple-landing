import './styles.scss'

// FILE INPUT ----------

const dropContainer = document.querySelector('.form__dropzone')
const fileName = document.querySelector('.filePreview__name')
const fileInput = document.querySelector('.fileInput')
const fileDetails = document.querySelector('.filePreview__details')
const fileThumbnail = document.querySelector('.filePreview__thumbnail')
const addButton = document.querySelector('.btn--add')
const delButton = document.querySelector('.filePreview__bin')

dropContainer.addEventListener('dragenter', (e) => dndHandler(e))
dropContainer.addEventListener('dragover', (e) => dndHandler(e))
dropContainer.addEventListener('drop', (e) => dndHandler(e))
fileInput.addEventListener('change', (e) => createFilePreview(e))
addButton.addEventListener('click', (e) => {
    fileInput.click()
    e.preventDefault()
})
delButton.addEventListener('click', () => {
    fileInput.value = ''
    fileThumbnail.src = ''
    filePreview.classList.toggle('hide')
    isValidated = false
    sendButton.disabled = true
})

const dndHandler = (e) => {
    if (e.type === 'drop') {
        fileInput.files = e.dataTransfer.files
        createFilePreview(e)
    }
    e.preventDefault()
}

const createFilePreview = (e) => {
    const obj = (e.type === 'drop') ? e.dataTransfer.files[0] : e.target.files[0]
    const { name, size } = obj
    const formattedSize = String(size / 1024 / 1024).slice(0, 3) + ' mb'
    const dotIndex = name.indexOf('.')
    const fileExtension = name.substring(dotIndex + 1).toUpperCase()
    let justName = name.substring(0, dotIndex)

    if (justName.length > 15) {
        justName = justName.substring(0, 16) + '...'
    }
    fileThumbnail.src = URL.createObjectURL(obj)
    fileName.innerHTML = justName
    fileDetails.innerHTML = fileExtension + ' ' + formattedSize
    filePreview.classList.remove('hide')
}

// VALIDATION ----------

const form = document.querySelector('.form__main')
const section = document.querySelector('.section')
const userName = document.querySelector('#name')
const genderSelect = document.querySelector('#gender')
const userCity = document.querySelector('#city')
const userCountry = document.querySelector('#country')
const userBirthday = document.querySelector('#bDate')
const dropZone = document.querySelector('.form__dropzone')
const formFiles = document.querySelector('.form__files')
const filePreview = document.querySelector('.form__filePreview')
const sendButton = document.querySelector('.btn--send')
const formSend = document.querySelector('.form__completed')
const regExp = /^[a-zA-Z\s]*$/
let isValidated = false

const validateElem = (elem) => {

    if (elem.name === 'name' || elem.name === 'country' || elem.name === 'city') {
        if (!regExp.test(elem.value)) {
            elem.nextElementSibling.textContent = 'Only latin letters and spaces allowed'
            elem.classList.add('error__input')
            isValidated = false
        } else {
            elem.nextElementSibling.textContent = ''
            elem.classList.remove('error__input')
            isValidated = true
        }
    }
}

const showSection = (elem) => {
    if (genderSelect.value !== 'default' && regExp.test(userName.value)) {
        section.classList.remove('hide')
        if (userBirthday.value !== '' && regExp.test(userCity.value) && regExp.test(userCountry.value)) {
            dropZone.classList.remove('hide')
            if (fileInput.files.length !== 0) {
                sendButton.disabled = false
                isValidated = true
            } else {
                validateElem(elem)
                sendButton.disabled = true
                isValidated = false
            }
        } else {
            validateElem(elem)
            sendButton.disabled = true
        }
    } else {
        validateElem(elem)
        sendButton.disabled = true
    }
}

const submit = () => {
    form.reset()
    formFiles.removeChild(filePreview)
    sendButton.disabled = true
    formSend.classList.remove('hide')
}

for (let elem of form.elements) {
    if (elem.tagName !== 'BUTTON') {
        elem.addEventListener('input', () => showSection(elem))
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isValidated) {
        submit()
    }
})

window.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()
    }
})

// SLIDER --------------

const images = document.querySelectorAll('.slider__wrapper .slider__line .slide')
const sliderLine = document.querySelector('.slider__line')
const dots = document.querySelectorAll('.slider__dot')

let count = 0
let width;

const setActiveDot = () => {
    dots.forEach(dot => dot.classList.remove('dot--active'))
    dots[count].classList.add('dot--active')
}

const moveSlider = () => {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

const setSlider = (e) => {
    if (e.target.classList.contains('dot1')) {
        sliderLine.style.transform = 'translate(0)'
        count = 0
    }
    if (e.target.classList.contains('dot2')) {
        sliderLine.style.transform = 'translate(-'+ 100 * (1 / 3) + '%)'
        count = 1
    }
    if (e.target.classList.contains('dot3')) {
        sliderLine.style.transform = 'translate(-' + 100 * (2 / 3) + '%)'
        count = 2
    }
    setActiveDot()
}

const switchSlide = (e) => {
    console.log(e.target)
    if (e.target.classList.contains('prev')) {
        count--
        if (count < 0) {
            count = images.length - 1
        }
    }
    if (e.target.classList.contains('next')) {
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
document.querySelector('.slider--prev').addEventListener('click', switchSlide)
document.querySelector('.slider--next').addEventListener('click', switchSlide)

const init = () => {
    width = document.querySelector('.slider__wrapper').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = '535px'
    })
    moveSlider()
    setActiveDot()
}

window.addEventListener('resize', init)
init()
