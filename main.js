        
function validation (){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let password = document.getElementById("password").value;
   let text_pass= document.getElementById("text-pass")
    let passPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
if(email.match(pattern)  ){
   form.classList.add("valid");
   form.classList.remove("invalid");
  
    text.innerHTML ="Your Email Address in Valid.";
    text.style.color ="#00ff00";
   
}else{
    form.classList.remove("valid");
   form.classList.add("invalid");
    text.innerHTML =" Please Enter Valid Email Address .";
    text.style.color ="#ff0000";
   
}
    
if(email == ""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML =" ";
    text.style.color ="#00ff00";

}


if( password.match(passPattern) ){
    form.classList.add("validation");
    form.classList.remove("invalidation");
     text_pass.innerHTML = "Your password in Valid.";
     text_pass.style.color ="#00ff00";
 }else{
     form.classList.remove("validation");
    form.classList.add("invalidation");
     text_pass.innerHTML = "Your Password in Valid.";
     text_pass.style.color ="#ff0000";
 }




if(password == ""){
    form.classList.remove("validation");
    form.classList.remove("invalidation");
    text_pass.innerHTML =" ";
    text_pass.style.color ="#00ff00";

}

}