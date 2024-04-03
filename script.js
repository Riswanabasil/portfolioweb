const firstname = document.getElementById('name');
const firstname_error=document.getElementById('firstname_error')
const email=document.getElementById('email')
const email_error=document.getElementById('email_error')
const form = document.getElementById("submit-form");
form.addEventListener('submit',(e)=>
{
    var email_check=/^([A-Za-z0-9_\-\])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(firstname.value===''||firstname.value==null) 
   {
    e.preventDefault();
    firstname_error.innerHTML = "Name is required";
   }
   
 if(!email.value.match(email_check)){
    e.preventDefault();
    email_error.innerHTML = "Valid email is required";
}
})
