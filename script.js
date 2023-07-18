let text = document.getElementById("text");

function increaseSize(){
    text.style.fontSize = parseInt(window.getComputedStyle(text).fontSize)+2+"px"
}

function decreaseSize(){
    text.style.fontSize = parseInt(window.getComputedStyle(text).fontSize)-2+"px"
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.key === "_" && e.shiftKey){
        decreaseSize()
    }
    if(e.key === "+" && e.shiftKey){
        increaseSize()
    }
})