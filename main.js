let left = document.getElementById("increase");
let right = document.getElementById("decrease");
let middle = document.getElementById("result");

let count = 0;
left.onclick = function() {
    count += 1;
    middle.innerHTML = count;
  };
  right.onclick = function() {
    count -= 1;
    middle.innerHTML = count;
  };