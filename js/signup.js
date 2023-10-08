// Signup code 
let username = document.getElementById("name") 
let email = document.getElementById("email")
let password = document.getElementById("pwd")
let signUp = document.getElementById("signUp")


signUp.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || email.value==="" || password.value===""){
        alert("Please Enter your data !!")
    }
    else{
        //for save the values of them
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        // after full your data you will show LOGIN page
        setTimeout(()=>{
            window.location = "login.html"
        },1000)
    }
})
