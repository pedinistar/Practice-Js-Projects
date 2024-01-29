const time = document.querySelector("h3")


setInterval(function(){
  let date = new Date()
  time.innerText = date.toLocaleTimeString()
},100)