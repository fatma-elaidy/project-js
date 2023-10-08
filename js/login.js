// login code 
let username = document.getElementById("name") 
let password = document.getElementById("pwd")
let login = document.getElementById("login")

let getname = localStorage.getItem("username")
let getpass = localStorage.getItem("password")
login.addEventListener("click",function(e){
    e.preventDefault()
    if (username.value === "" || password.value === ""){
        alert("Full your data !")
    }
    else{
        if(getname && getname.trim() === username.value  && getpass && getpass.trim() === password.value){
                setTimeout(() => {
                    window.location ="../index.html"
                },1000 );
        }
        else{
            alert("Username Or Password is incorrect ! ")
        }
    }
})