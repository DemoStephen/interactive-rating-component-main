const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll("[data-input]");
const rate = document.querySelector("[data-rate]");
const thanks = document.querySelector("[data-thanks]");
const rating = document.querySelector("[data-rating]");
const message = document.querySelector("[data-error]");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.checked) {
      rate.innerText = input.value;
      rating.classList.add("hidden");
      thanks.classList.remove("hidden");
    } else {
      message.classList.remove("hidden");
      setTimeout(() => {
        message.classList.add("hidden");
      }, 3000);
    }
  });
});
