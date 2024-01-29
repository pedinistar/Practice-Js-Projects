// cm = cm/100 m


const height = document.getElementById("height")
const weight = document.getElementById("weight")
const bmi = document.getElementById("bmi")
const bmiLabel = document.getElementById("bmi-label")
const button = document.getElementById("btn")


button.addEventListener("click", function(){
  h = Number(height.value/100)
  w = Number(weight.value)
  bmiNUM = ( w / (h*h) ).toFixed(2)

  if (bmiNUM < 18.5) {
    bmi.innerHTML = `${bmiNUM} kg/m<sup>2</sup>`
    bmiLabel.innerText = "Underweight💀"
  }
  else if (bmiNUM > 18.5 && bmiNUM < 24.9) {
    bmi.innerHTML = `${bmiNUM} kg/m<sup>2</sup>`
    bmiLabel.innerText = "Normal Weight😮‍💨"
  }
  else if (bmiNUM > 25 && bmiNUM < 29.9) {
    bmi.innerHTML = `${bmiNUM} kg/m<sup>2</sup>`
    bmiLabel.innerText = "Overweight😭"
  }
  else if (bmiNUM >= 30){
    bmi.innerHTML = `${bmiNUM} kg/m<sup>2</sup>`
    bmiLabel.innerText = "Obese😵‍💫"
  }
  else {
    bmi.innerHTML = `0 kg/m<sup>2</sup>`
    bmiLabel.innerHTML = "Leaving The Blanks Empty!"
  }
})

