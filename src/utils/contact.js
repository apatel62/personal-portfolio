//javascript code for the contact page
//functions are exported and the contact.jsx file imports them 

//for each input in the form, it adds an event listener to see whether the user leaves it blank or not and if they do it will display the corresponding notification
export function inputChecks(inputs){
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const errorMessage = document.getElementById(`${input.id}-error`);
            if (!input.value.trim()) {
                errorMessage.classList.add('active');
            } else {
                errorMessage.classList.remove('active');
            }
        });
    });
}

//adds an event listener to the email input on the form so as the user is typing their email address is checks whether it is valid
//the error notification is appear right after they type a letter and will only disappear after writing a valid email address
export function emailCheck(emailInput, emailError){
    emailInput.addEventListener('input', function(){
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //defined regular expression (regex) of a valid email
        if (!validEmail.test(emailInput.value.trim())) {
            emailError.classList.add('active'); 
        } else {
            emailError.classList.remove('active');
        }
    });
}

//prevents the submit button from reloading the page
export function noSubmit(form) {
    form.addEventListener('submit', function(event){
        event.preventDefault();
    });
}

