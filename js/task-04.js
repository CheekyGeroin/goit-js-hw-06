const counter = {
  counterValue: 0,
  increment() {
    {
      this.counterValue += 1;
    }
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.counterValue;
  console.log(counter);
});
decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
  console.log(counter);
});
