import './slider'
import './styles.scss'

const formSectionTwo = document.querySelector('.form__section-two')
const form = document.querySelector('.form__main')
const formStatus = document.querySelector('.form__sending-status')
const dropContainer = document.querySelector('.form__dropzone')
const filePreview = document.querySelector('.file-preview')
const fileName = document.querySelector('.file-preview__name')
const fileDetails = document.querySelector('.file-preview__details')
const fileThumbnail = document.querySelector('.file-preview__thumbnail')
const delButton = document.querySelector('.file-preview__bin')
const fileInput = document.querySelector('.file-input')
const addButton = document.querySelector('.button_add')
const sendButton = document.querySelector('.button_send')
const regExp = /^[a-zA-Z\s]*$/

dropContainer.addEventListener('dragenter', (event) => dragDropHandler(event))
dropContainer.addEventListener('dragover', (event) => dragDropHandler(event))
dropContainer.addEventListener('drop', (event) => dragDropHandler(event))
fileInput.addEventListener('change', (event) => createFilePreview(event))

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
    const file = event.type === 'drop' ? event.dataTransfer.files[0] : event.target.files[0]
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
    filePreview.classList.add('file-preview_show')
}

const clearFilePreview = () => {
    fileInput.value = ''
    fileThumbnail.src = ''
    filePreview.classList.remove('file-preview_show')
}

const validation = {
    name: false,
    gender: false,
    country: false,
    city: false,
    dateOfBirth: false,
    file: false,
}

const validateElem = (element) => {
    if (element.name === 'name' || element.name === 'country' || element.name === 'city') {
        if (element.value === '') {
            element.nextElementSibling.textContent = 'The field is required'
            element.classList.add('form__input_error')
            validation[`${element.name}`] = false
        }
        if (!regExp.test(element.value)) {
            element.nextElementSibling.textContent = 'Only latin letters and spaces are allowed'
            element.classList.add('form__input_error')
            validation[`${element.name}`] = false
        }
        if (element.value !== '' && regExp.test(element.value)) {
            element.nextElementSibling.textContent = ''
            element.classList.remove('form__input_error')
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
            element.classList.add('form__input_error')
            validation['dateOfBirth'] = false
        }
        if (Date.parse(element.value) > Date.parse('1940-01-01')) {
            element.nextElementSibling.textContent = ''
            element.classList.remove('form__input_error')
            validation['dateOfBirth'] = true
        }
        if (Date.parse(element.value) > Date.parse('2008-01-01')) {
            element.nextElementSibling.textContent = 'Enter correct date of birth'
            element.classList.add('form__input_error')
            validation['dateOfBirth'] = false
        }
    }

    if (element.name === 'file' && element.files.length) {
        validation['file'] = true
    }
}

const checkValidationStatus = () => {
    const status = Object.values(validation).reduce(
        (prevValue, currentValue) => prevValue + currentValue
    )
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
        formSectionTwo.classList.add('form__section-two_show')
        if (validation.dateOfBirth && validation.city && validation.country) {
            dropContainer.classList.add('form__section-three_show')
        }
    }
}

const submit = () => {
    form.reset()
    clearFilePreview()
    sendButton.disabled = true
    formStatus.classList.add('form__sending-status_show')
}

for (let element of form.elements) {
    if (element.tagName !== 'BUTTON') {
        element.addEventListener('input', () => showSection(element))
    }
}

addButton.addEventListener('click', (event) => {
    fileInput.click()
    event.preventDefault()
})

delButton.addEventListener('click', () => {
    validation['file'] = false
    clearFilePreview()
    checkValidationStatus()
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    submit()
})

window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
    }
})
