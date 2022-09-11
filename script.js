let weight = document.getElementById("poid-input");
let height = document.getElementById("longueur-input");
let button = document.querySelector("button");
let output = document.getElementById("output");

function calculate() {
  let weightValue = Number(weight.value);
  console.log(weightValue);
  let heightValue = Number(height.value);
  console.log(weightValue);
  let BMI = (weightValue / (heightValue * heightValue)).toPrecision(2);

  if (weightValue == 0 || heightValue == 0) {
    alert("Enter Your weight and height please ");
    console.log("enter that shit");
  } else {
    if (isNaN(weightValue) || isNaN(heightValue)) {
      alert("we want numbers please");
    } else {
      if (BMI < 18.5) {
        output.textContent = `Your BMI ${BMI} which means you are underweight . Is your name Indomie ?? beacuse damn you are noodle .`;
      } else if (BMI >= 18.5 && BMI < 25) {
        output.textContent = `Your BMI ${BMI} which means your weight is normal , I'm jealous of you. `;
      } else if (BMI >= 25 && BMI < 30) {
        output.textContent = `Your BMI ${BMI} which means you're overweight, stop eating you fat fuck.  `;
      } else if (BMI >= 30 && BMI < 40) {
        output.textContent = `Your BMI ${BMI} which means you're Obese , damn you really let yourself go , start a diet bestie. `;
      } else {
        output.textContent = `Your BMI ${BMI} which means you're Extremly Obese , You and a whale are bestfriends , I recommend going to a doctor ASAP. `;
      }
    }
    weightValue = "";
    console.log(weightValue);
    heightValue = "";
    console.log(heightValue);
  }
}

button.addEventListener("click", calculate);

/* if (BMI<18.5) {
    output.textContent=`Your BMI ${BMI} which means you are underweight , go eat something bestie.`
}
else if (BMI>=18.5 && BMI<25){
    output.textContent=`Your BMI ${BMI} which means your weight is normal , I'm jealous of you. `
}
else if (BMI>=25 && BMI<30){
    output.textContent=`Your BMI ${BMI} which means you're overweight, stop eating you fat fuck.  `
}
else if (BMI>=30 && BMI<40){
    output.textContent=`Your BMI ${BMI} which means you're Obese , damn you really let yourself go , start a diet bestie. `
}
else {
    output.textContent=`Your BMI ${BMI} which means you're Extremly Obese , You and a whale are bestfriends , I recommend going to a doctor ASAP. `
} */
