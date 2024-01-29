const boxes = document.querySelectorAll(".box")
const main = document.querySelector("main")



boxes.forEach(function(box){
  box.addEventListener("click", function(elem){
    main.style.backgroundColor = box.id
  })
})