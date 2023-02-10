let inputNumber = document.getElementById("input-number")

function length() {
  //Clone the input and enter it into the document
  document.getElementById("meters-start").textContent = inputNumber.textContent
  document.getElementById("feet-start").textContent = inputNumber.textContent
  //Create the variables for the maths
  let operand = inputNumber.textContent
  // length conversion: 1 ft = 0.3048M 1M = 3.280839895ft
  let mToF = operand * 3.281
  let fToM = operand * 0.3048
  document.getElementById("meters-to-feet").textContent = mToF.toFixed(2)
  document.getElementById("feet-to-meters").textContent = fToM.toFixed(2)
}

function volume() {
  //Clone the input and enter it into the document
  document.getElementById("liters-start").textContent = inputNumber.textContent
  document.getElementById("gallons-start").textContent = inputNumber.textContent
  //Create the variables for the maths
  let operand = inputNumber.textContent
  // length conversion: 1 l = 0.219969gl | 1gl = 4.54609l
  let lToG = operand / 4.546
  let gToL = operand * 4.546
  document.getElementById("liters-to-gallons").textContent = lToG.toFixed(2)
  document.getElementById("gallons-to-liters").textContent = gToL.toFixed(2)
}

function mass() {
  //Clone the input and enter it into the document
  document.getElementById("kilos-start").textContent = inputNumber.textContent
  document.getElementById("pounds-start").textContent = inputNumber.textContent
  //Create the variables for the maths
  let operand = inputNumber.textContent
  // length conversion: 1kg = 2.20462lbs | 1lbs = 0.453592kg
  let kToP = operand * 2.205
  let pToK = operand / 2.205
  document.getElementById("kilos-to-pounds").textContent = kToP.toFixed(2)
  document.getElementById("pounds-to-kilos").textContent = pToK.toFixed(2)
}


length()
volume()
mass()