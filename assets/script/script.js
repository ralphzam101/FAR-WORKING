function incrementRoom() {
  let value = parseInt(document.getElementById('rooms').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('rooms').value = value;
}

function decrementRoom() {
  let value = parseInt(document.getElementById('rooms').value, 10);
  value = isNaN(value) ? 1 : value;
  value--;
  document.getElementById('rooms').value = value < 1 ? 1 : value;
}

function incrementAdult() {
  let value = parseInt(document.getElementById('adults').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('adults').value = value;
}

function decrementAdult() {
  let value = parseInt(document.getElementById('adults').value, 10);
  value = isNaN(value) ? 1 : value;
  value--;
  document.getElementById('adults').value = value < 1 ? 1 : value;
}