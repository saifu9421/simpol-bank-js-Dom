// step-1: add  click  event handler with the submit button  
document.getElementById('btn-submit').addEventListener('click',function(){
    //  step-2: get the email  address inside the email input field
    // always  remember  to use .value to get text form an  input field 
    const emailField = document.getElementById('user-email');
    const email  =  emailField.value;
//    step-3: get password
// 3.a: set id on  the html element 
// 3.b: get the element 
// 3.c:get the value form the element 
  const passwordFiled = document.getElementById('user-password');
  const password =  passwordFiled.value;
// DANGER: Do  Not  Verify  email  password  on the client  site 
// step-4:verify email and password
    if(email=== 'saif@gmail.com' && password === '123'){
     window.location.href='bank.html';

    }else{
        alert('Non valid user');
    }
});


