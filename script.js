var nameerror=document.getElementById("name-error");
var emailerror=document.getElementById("email-error");
var messageerror=document.getElementById("message-error");
var submiterror=document.getElementById("submit-error");
var subjecterror=document.getElementById("subject-error")

function validateName(){
    var name=document.getElementById('contact-name').value

    if(name.length == 0){ 
    nameerror.innerHTML='name is required';
    return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='write full name';
        return false;
    }
    nameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateemail(){
    var email=document.getElementById('contact-email').value
    if(email.length==0){
        emailerror.innerHTML='email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='invalid email';
        return false;
    }
    emailerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatemessage(){
    var message=document.getElementById('contact-message').value
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageerror.innerHTML= left + 'more characters required';
        return false;
    }
    messageerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
} 
function validatesubject(){
    var subject=document.getElementById('contact-subject').value
    var required = 10;
    var left = required - subject.length;

    if(left>0){
        subjecterror.innerHTML= left + 'more characters required';
        return false;
    }
    subjecterror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
} 
function validateForm(){
if(!validateName()||!validateemail()||!validatemessage()){
    submiterror.style.display='block';
    submiterror.innerHTML='please fix the error to submitt';
    setTimeout(function(){submiterror.style.display='none';},3000);
}
}
