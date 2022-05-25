window.addEventListener('DOMContentLoaded', () => {

    const myform = document.querySelector('form')
    const inputName = myform.querySelector('#name')
    const inputEmail = myform.querySelector('#email')
    const inputPhone = myform.querySelector('#phone')
    const inputMessage = myform.querySelector('#message')
    const submitButton = myform.querySelector('#submit')


    
    submitButton.addEventListener('click', (event) => {
       
        const contactInfo = {
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            message: inputMessage.value

        }
        window.localStorage.setItem('contact', JSON.stringify(contactInfo))
        console.log(contactInfo)
    })
   
})