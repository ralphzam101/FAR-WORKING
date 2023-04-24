// + - button
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

// calendar getting values and submit button
const checkBtn = document.querySelector("#checkBtn");
const todayDateInput = document.querySelector("#checkIn");
const today = new Date();
const todayDate = today.toISOString().substr(0, 10);

todayDateInput.value = todayDate;

checkBtn.addEventListener('click', checkAvail);

function checkAvail(e) {
  event.preventDefault();
  const checkIn = document.getElementById('checkIn');
  const checkinDate = checkIn.value;
  console.log(checkinDate);

  const checkOut = document.getElementById('checkOut');
  const checkoutDate = checkOut.value;
  console.log(checkoutDate);
}


