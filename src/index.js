import './styles.scss'

// VALIDATION ----------

const form = document.querySelector('.form__main')
const userName = document.querySelector('#name')
const userCity = document.querySelector('#city')
const userCountry = document.querySelector('#country')
const userBirthday = document.querySelector('#bDate')
const section = document.querySelector('.section')
const fileInput = document.querySelector('.fileInput')
const genderSelect = document.querySelector('#gender')
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
        if (regExp.test(userCity.value) && regExp.test(userCountry.value) && userBirthday.value !== '') {
            dropZone.classList.remove('hide')
            if (fileInput.value !== '') {
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
            dropZone.classList.add('hide')
        }
    } else {
        validateElem(elem)
        sendButton.disabled = true
        section.classList.add('hide')
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

window.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isValidated) {
        submit()
    }
})


// FILE INPUT ----------

const dropContainer = document.querySelector('.form__dropzone')
const fileName = document.querySelector('.filePreview__name')
const fileDetails = document.querySelector('.filePreview__details')
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

const images = document.querySelectorAll('.slider__wrapper .slider__line .slide')
const sliderLine = document.querySelector('.slider__line')
let count = 0
let width;

const init = () => {
    width = document.querySelector('.slider__wrapper').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = '535px'
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
