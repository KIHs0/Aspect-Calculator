let widthinput = document.getElementById("widthinput");
let heightinput = document.getElementById("heightinput");
let widthvalue = document.getElementById("width");
let heightvalue = document.getElementById("height");
console.log(widthinput.value);
console.log(heightinput.value);

function calcwidth() {
  let aspectratio = widthinput.value / heightinput.value;
  let x = parseFloat(aspectratio.toFixed(2));
  widthvalue.value = heightvalue.value * x;
  console.log(widthvalue.value);
}

function calcheight() {
  let aspectratio = widthinput.value / heightinput.value;
  let x = parseFloat(aspectratio.toFixed(2));
  height.value = widthvalue.value / x;
  console.log(height.value);
}

widthinput.addEventListener("input", calcheight);
heightinput.addEventListener("input", calcwidth);
