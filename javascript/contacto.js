window.addEventListener('DOMContentLoaded', () => {

    const myform = document.querySelector('form')
    const inputName = myform.querySelector('#name')
    const inputEmail = myform.querySelector('#email')
    const inputPhone = myform.querySelector('#phone')
    const inputMessage = myform.querySelector('#message')
    const submitButton = myform.querySelector('#submit')
    


    
    submitButton.addEventListener('click', (event) => {

        //event.preventDefault()

        const contactInfo = {
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            message: inputMessage.value

        }
        // window.localStorage.setItem('contact', JSON.stringify(contactInfo))
        const savedData = JSON.parse(localStorage.getItem('contacts'))  || []
        const newItemData = contactInfo
        //console.log(contactInfo)
        localStorage.setItem('contacts', JSON.stringify([...savedData, newItemData]))

    })
   
})