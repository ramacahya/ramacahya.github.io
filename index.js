let saklar = false
let counter = 0
function bulbSwitch () {
  let back = document.getElementsByClassName("background")
  let lampu = document.getElementById("lampu")
  let vid = document.getElementById("vid")
  
  if (!saklar) {
    back[0].style.backgroundColor = "white";
    lampu.src = "/Assets/off.png";
    saklar = true
  } else {
    back[0].style.backgroundColor = "black";
    lampu.src = "/Assets/on.png";
    saklar = false
  }
  counter++
  if (counter === 6) {
    vid.hidden = false
    vid.play()
    lampu.hidden = true
    vid.onended = function() {
      counter = 0
      vid.hidden = true
      lampu.hidden = false
  }
  }
}