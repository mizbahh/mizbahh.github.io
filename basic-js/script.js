function tickUp() {
  let counter = document.getElementById('counter');
  counter.textContent = parseInt(counter.textContent) + 1;
}

function tickDown() {
  let counter = document.getElementById('counter');
  counter.textContent = parseInt(counter.textContent) - 1;
}

function runForLoop() {
  let count = parseInt(document.getElementById('counter').textContent);
  let result = '';
  for (let i = 0; i <= count; i++) {
    result += i;
    if (i < count) result += ', ';
  }
  document.getElementById('forLoopResult').textContent = result;
}

function showOddNumbers() {
  let count = parseInt(document.getElementById('counter').textContent);
  let result = '';
  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      result += i + ' ';
    }
  }
  document.getElementById('oddNumberResult').textContent = result.trim();
}

function addMultiplesToArray() {
  let count = parseInt(document.getElementById('counter').textContent);
  let multiplesArr = [];
  for (let i = 5; i <= count; i += 5) {
    multiplesArr.unshift(i);
  }
  console.log(multiplesArr);
}

function printCarObject() {
  let carObj = {
    cType:  document.getElementById('carType').value,
    cMPG:   document.getElementById('carMPG').value,
    cColor: document.getElementById('carColor').value
  };
  console.log(carObj);
}

function loadCar(carNumber) {
  let car;
  if (carNumber === 1) {
    car = carObject1;
  } else if (carNumber === 2) {
    car = carObject2;
  } else if (carNumber === 3) {
    car = carObject3;
  }
  document.getElementById('carType').value  = car.cType;
  document.getElementById('carMPG').value   = car.cMPG;
  document.getElementById('carColor').value = car.cColor;
}

function changeColor(colorNumber) {
  let colors = { 1: 'red', 2: 'green', 3: 'blue' };
  document.getElementById('styleParagraph').style.color = colors[colorNumber];
}
