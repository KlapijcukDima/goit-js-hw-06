'use strict'



const form = document.querySelector('.login-form')

form.addEventListener('submit', submit)

function submit(event) {
    event.preventDefault()
    const {
        elements: { 
            email,
            password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Будь ласка заповніть всі поля!!')
    }
    const user = { email: email.value, Password: password.value }
    
    console.log(user)
    event.currentTarget.reset()
}