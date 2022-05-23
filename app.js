let footer = document.getElementById('footer')
const changeBg = document.createElement("button")
const body = document.getElementById("body")
changeBg.textContent = "Change Bg"
footer.append(changeBg)
changeBg.addEventListener("click", ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    body.style.background = `rgb(${r},${g},${b})`
})