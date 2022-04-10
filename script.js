
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone-number');
const password=document.getElementById('password');
const cnfpassword=document.getElementById('cnfpassword');

//Adding the Event 
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validation();
})

//Advance validation of email

const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1) return false;
    var dot=emailVal.lastIndexOf(".");
    if(dot<atSymbol + 2) return false;
    if(dot===emailVal.length - 1) return false;

    return true;
} 



// We defne the validation function and then call it

const validation=()=>{
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const phoneVal=phone.value.trim();
    const passwordVal=password.value.trim();
    const cnfpasswordVal=cnfpassword.value.trim();
    
    //username validation 

    if(usernameVal===""){
        setErrorMsg(username, "Username can not be blank !");
    }
    else if(usernameVal.length<=3){

        setErrorMsg(username, "Username can'nt  be less  than 3 !");

    }else if(usernameVal.length>=15){

        setErrorMsg(username, 'Username cant not be greater than 15');

    }
    else{
        setSuccessMsg(username);
    }


//Email validation

    if(emailVal===""){
        setErrorMsg(email,"Email can not be blank");
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
    }
    else {
        setSuccessMsg(email);
    }

    // Phone number validation 

    if(phoneVal===""){
        setErrorMsg(phone, 'Phone number can not be blank');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid phone Number');
    }
    else{
        setSuccessMsg(phone);
    }

//password validation

if(passwordVal===''){
    setErrorMsg(password, "Password can not be blank!");
}
else if(passwordVal.length<=6){
    setErrorMsg(password, 'Password muste be greater than 6');
}
else {
    setSuccessMsg(password);
}

//confirm password validation

if(cnfpasswordVal===''){
    setErrorMsg(cnfpassword, "Confirm Password Can not be blank");
}
else if(cnfpasswordVal != passwordVal){
    setErrorMsg(cnfpassword, "Confirm password not match");
}
else{
    setSuccessMsg(cnfpassword);
}



    function setErrorMsg(input, errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
// add error class in the form control
        formControl.className ="form-control error";

        small.innerText=errormsgs;
    }
    

    // create success function

    function setSuccessMsg(input){
        const formControl=input.parentElement;
    // add success  class in the form 
        formControl.className="form-control success";


    }

}     