const increaseButtonEl = document.querySelector(".counter_button--increase");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const resetButtonEl = document.querySelector(".counter_reset-button");
const counterValueEl = document.querySelector(".counter_value");

resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
});


decreaseButtonEl.addEventListener("click", function () {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber - 1;
  if(newValue < 0){
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
});


increaseButtonEl.addEventListener("click", function () {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueEl.textContent = newValue;
});

document.addEventListener("keyup", function () {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueEl.textContent = newValue;
});