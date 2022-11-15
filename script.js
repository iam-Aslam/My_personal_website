var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');



function validateName(){
    var name=document.getElementById('contact-name').value;

    if(name.length==0){
        document.getElementById('name-error').innerHTML ='Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)){
        nameError.innerHTML='Write Fullname';
        return false;
    }

    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){

    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML ='Phone is required';
        return false;
    }

    if(phone.length !==10){
        phoneError.innerHTML='Phone Number Should Be 10 Digits';
        return false;
    }
    if(!phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
        phoneError.innerHTML='Input Numbers';
        return false;
    }

    phoneError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true

}

function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML ='Email is required';
        return false;
    }
    if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        emailError.innerHTML='Enter a valid Email';
        return false;
    }

    
    emailError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;

    
    if(message.length<30){
        messageError.innerHTML ='Minimum 30 Characters Required';
        return false;
    }

    messageError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true
}

function validateForm(){
    if(!validateName()|| !validatePhone()|| !validateEmail()|| !validateMessage() ){
        submitError.style.display='block'
        submitError.innerHTML='Please Fill All Properties'
        setTimeout(function(){submitError.style.display='none'},3000)
        return false 
    }
}