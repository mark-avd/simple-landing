import './styles.scss'

// FILE INPUT ----------

const dropContainer = document.querySelector('.form__dropzone')
const fileName = document.querySelector('.filePreview__name')
const fileInput = document.querySelector('.fileInput')
const fileDetails = document.querySelector('.filePreview__details')
const fileThumbnail = document.querySelector('.filePreview__thumbnail')
const addButton = document.querySelector('.button_add')
const delButton = document.querySelector('.filePreview__bin')

dropContainer.addEventListener('dragenter', (event) => dragDropHandler(event))
dropContainer.addEventListener('dragover', (event) => dragDropHandler(event))
dropContainer.addEventListener('drop', (event) => dragDropHandler(event))
fileInput.addEventListener('change', (event) => createFilePreview(event))
addButton.addEventListener('click', (event) => {
    fileInput.click()
    event.preventDefault()
})
delButton.addEventListener('click', () => {
    fileInput.value = ''
    fileThumbnail.src = ''
    filePreview.classList.toggle('hide')
    validation['file'] = false
    checkValidationStatus()
})

const dragDropHandler = (event) => {
    event.preventDefault()
    if (event.type === 'drop') {
        fileInput.files = event.dataTransfer.files
        createFilePreview(event)
        validation['file'] = true
        checkValidationStatus()
    }
}

const createFilePreview = (event) => {
    const file = (event.type === 'drop') ? event.dataTransfer.files[0] : event.target.files[0]
    const { name, size } = file
    const formattedSize = String(size / 1024 / 1024).slice(0, 3) + ' mb'
    const dotIndex = name.indexOf('.')
    const fileExtension = name.substring(dotIndex + 1).toUpperCase()
    let nameWithoutExtension = name.substring(0, dotIndex)

    if (nameWithoutExtension.length > 15) {
        nameWithoutExtension = nameWithoutExtension.substring(0, 16) + '...'
    }
    fileThumbnail.src = URL.createObjectURL(file)
    fileName.innerHTML = nameWithoutExtension
    fileDetails.innerHTML = fileExtension + ' ' + formattedSize
    filePreview.classList.remove('hide')
}

// VALIDATION ----------

const form = document.querySelector('.form__main')
const section = document.querySelector('.section')
const dropZone = document.querySelector('.form__dropzone')
const formFiles = document.querySelector('.form__files')
const filePreview = document.querySelector('.form__filePreview')
const sendButton = document.querySelector('.button_send')
const formSend = document.querySelector('.form__sending-status')
const regExp = /^[a-zA-Z\s]*$/

const validation = {
    name: false,
    gender: false,
    country: false,
    city: false,
    dateOfBirth: false,
    file: false
}

const validateElem = (element) => {
    if (element.name === 'name' || element.name === 'country' || element.name === 'city') {
        if (element.value === '') {
            element.nextElementSibling.textContent = 'The field is required'
            element.classList.add('input_error')
            validation[`${element.name}`] = false
        }
        if (!regExp.test(element.value)) {
            element.nextElementSibling.textContent = 'Only latin letters and spaces are allowed'
            element.classList.add('input_error')
            validation[`${element.name}`] = false
        }
        if (element.value !== '' && regExp.test(element.value)) {
            element.nextElementSibling.textContent = ''
            element.classList.remove('input_error')
            validation[`${element.name}`] = true
        }
    }

    if (element.name === 'gender') {
        if (element.value !== 'default') {
            validation['gender'] = true
        }
    }

    if (element.name === 'bDate') {
        if (Date.parse(element.value) < Date.parse('1940-01-01')) {
            element.nextElementSibling.textContent = 'Enter correct date of birth'
            element.classList.add('input_error')
            validation['dateOfBirth'] = false
        }
        if (Date.parse(element.value) > Date.parse('1940-01-01')) {
            element.nextElementSibling.textContent = ''
            element.classList.remove('input_error')
            validation['dateOfBirth'] = true
        }
        if (Date.parse(element.value) > Date.parse('2008-01-01')) {
            element.nextElementSibling.textContent = 'Enter correct date of birth'
            element.classList.add('input_error')
            validation['dateOfBirth'] = false
        }
    }

    if (element.name === 'file' && element.files.length) {
        validation['file'] = true
    }
}

const checkValidationStatus = () => {
    const status = Object.values(validation).reduce((prevValue, currentValue) => prevValue + currentValue)
    if (status >= 6) {
        sendButton.disabled = false
    }
    if (status < 6) {
        sendButton.disabled = true
    }
}

const showSection = (element) => {
    validateElem(element)
    checkValidationStatus()
    if (validation.name && validation.gender) {
        section.classList.remove('hide')
        if (validation.dateOfBirth && validation.city && validation.country) {
            dropZone.classList.remove('hide')
        }
    }
}

const submit = () => {
    form.reset()
    formFiles.removeChild(filePreview)
    sendButton.disabled = true
    formSend.classList.remove('hide')
}

for (let element of form.elements) {
    if (element.tagName !== 'BUTTON') {
        element.addEventListener('input', () => showSection(element))
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    submit()
})

window.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()
    }
})

// SLIDER --------------

const images = document.querySelectorAll('.slider__wrapper .slider__line .slider__slide')
const sliderLine = document.querySelector('.slider__line')
const dots = document.querySelectorAll('.slider__dot')

let count = 0
let width;

const setActiveDot = () => {
    dots.forEach(dot => dot.classList.remove('slider__dot_active'))
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
        sliderLine.style.transform = 'translate(-'+ 100 * (1 / 3) + '%)'
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
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = '535px'
    })
    moveSlider()
    setActiveDot()
}

window.addEventListener('resize', init)
init()
