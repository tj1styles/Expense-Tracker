let footer = document.getElementById('footer')
const body = document.getElementById("body")
const changeBg = document.createElement("button")
let i = document.createElement("i")
i.setAttribute("class","fas fa-power-off")
changeBg.append(i)
changeBg.setAttribute("class","Btn")
const div = document.getElementById("bgChanger")

div.append(changeBg)
changeBg.addEventListener("click", ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    body.style.background = `rgb(${r},${g},${b})`
})