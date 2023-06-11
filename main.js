function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);

   
}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent =  message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent =  "";
}

function setInputSuccess(inputElement, message){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-success-message").textContent = message;
}





document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e=> {
        e.preventDefault();
        setFormMessage(loginForm, "error","Invalid username/ password combination" );
    });

    document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e =>{

            if(e.target.id == "createPassword"  && e.target.value.length > 0 && e.target.value.length < 6){
                setInputError(inputElement, "Password must be more than 6 characters")
            }
        
        });

        inputElement.addEventListener("input", e=> {
            clearInputError(inputElement);
        });
        
    });
    


});
