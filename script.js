let darkMode=localStorage.getItem("dark-mode");
let themeSwitch=document.querySelector(".toggle")

function enableDarkMode(){
document.body.classList.add("dark-mode")    
localStorage.setItem("dark-mode","active")
}

if(darkMode ==="active") enableDarkMode()

function disableDarkMode(){
document.body.classList.remove("dark-mode")    
localStorage.setItem("dark-mode","null")

}

themeSwitch.addEventListener("click",()=>{
let darkMode=localStorage.getItem("dark-mode");

    darkMode !=="active" ? enableDarkMode() :disableDarkMode()  
})