const dataRatingStart = document.querySelector('[data-rating-start]');
const dataThankYouState = document.querySelector('[data-thankYou-state]');
const form = document.querySelector('[data-form]');
const radioButtons = document.querySelectorAll('[data-input]');
const errorMessage = document.querySelector('[data-error]');
const yourSelection = document.querySelector('#yourSelection');

let value = null;

for(const radioButton of radioButtons){
    radioButton.addEventListener('change',()=>{
        value = radioButton.value;
        console.log(value)
    })
    radioButton.addEventListener('click', ()=>{
        radioButtons.style.color = 'red'
    })
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(!value){
        errorMessage.innerText = 'Please select a rating'
        setTimeout(()=>{
            errorMessage.innerText = "";
        }, 5000)
        return
    }
    dataRatingStart.classList.add('d-none');
    dataThankYouState.classList.remove('d-none');
    yourSelection.innerText = `${value}`
});