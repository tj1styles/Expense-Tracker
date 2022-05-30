let footer = document.getElementById('footer')
const body = document.getElementById("body")
const changeBg = document.createElement("button")
let i = document.createElement("i")
i.setAttribute("class","fas fa-power-off")
const para = document.createElement("p")
para.textContent = "Incognito"
para.setAttribute("class","para")
changeBg.append(i,para)
changeBg.setAttribute("class","Btn")
const div = document.getElementById("bgChanger")

div.append(changeBg)
const nameInput = document.getElementById("nameInput")
const mailInput = document.getElementById("mailInput")
const commentInput = document.getElementById("commentInput")
function sendEmail(){
     let templateParams = {
         to_name:`PlaccDios`,
         from_name: `${mailInput.value}`,
         message: `${commentInput.value}`,
         name: `${nameInput.value}`
     }
     emailjs.sendForm("service_852dk7p", "template_b43cwdd", templateParams, "ExOdRziphq0uu20nT").then(function (response){
        alert("Message Sent Successfully")
        console.log("Success",response.status,response.text)
     },
       function (error) {
           alert("Message not sent")
           alert (error)
       }
     );
}
changeBg.addEventListener("click", ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    body.style.background = `rgb(${r},${g},${b})`
})



let day = document.getElementById('day')
let hour = document.getElementById('hour')
let mins = document.getElementById('mins')
let sec = document.getElementById('sec')
let session = document.getElementById('session')
let year = document.getElementById('year')


function animateTime(){
    let Dates = new Date()
    let hrs = Dates.getHours();
    hour.textContent = hrs;
    mins.textContent = Dates.getMinutes();
    sec.textContent = Dates.getSeconds();
    year.textContent = Dates.getFullYear();
   

    if (hrs >= 12) {
      session.textContent = 'PM';
    } else {
      session.textContent = 'AM';
    }

}

setInterval(animateTime, 1000)

