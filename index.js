const pass_field=document.querySelector(".pass-key");
const showBtn=document.querySelector(".show");
showBtn.addEventListener("click",function(){
    if(pass_field.type==="password"){
        pass_field.type="text";
    }else{
        pass_field.type="password";
        
    }
});
function verifyPassword() 
{
    var pw = document.getElementById("pswd").value;
    if(pw.length < 8) {
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
       return false;
    }
    if(pw.length > 15) {
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
       return false;
    } 
    else{
       reload();
       alert("Password is correct");        
    }
}


  
