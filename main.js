const firstSection = document.querySelector("#ratingStart");
const secondSection = document.querySelector("#thankYouStart");
const yourSelection = document.querySelector("#yourSelection");
const firstButton = document.querySelector("#numberOne");
const secondButton = document.querySelector("#numberTwo");
const thirdButton = document.querySelector("#numberThree");
const fourthButton = document.querySelector("#numberFour");
const fifthButton = document.querySelector("#numberFive");
const realButton = document.querySelector("button");

firstButton.addEventListener('click', ()=>{
    yourSelection.innerText = "1"
    firstButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    firstButton.style.color = "black";
})

secondButton.addEventListener('click', ()=>{
    yourSelection.innerText = "2"
    secondButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    secondButton.style.color = "black";
})

thirdButton.addEventListener('click', ()=>{
    yourSelection.innerText = "3"
    thirdButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    thirdButton.style.color = "black";
})

fourthButton.addEventListener('click', ()=>{
    yourSelection.innerText = "4"
    fourthButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    fourthButton.style.color = "black";
})

fifthButton.addEventListener('click', ()=>{
    fifthButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    fifthButton.style.color = "black";
    yourSelection.innerText = "5"
})
realButton.addEventListener('click', ()=>{
    firstSection.style.display = "none"
    secondSection.style.display = "block";
    return
})


// function changeOutput1(){
//     firstButton.style.backgroundColor = "hsl(0, 0%, 100%)";
//     firstButton.style.color = "black";
//     yourSelection.innerText = `${(firstButton.value)}`
// }
// function changeOutput2(){
//     secondButton.style.backgroundColor = "hsl(0, 0%, 100%)";
//     secondButton.style.color = "black";
//     yourSelection.innerText = `${(secondButton.value)}`
// }
// function changeOutput3(){
//     thirdButton.style.backgroundColor = "hsl(0, 0%, 100%)";
//     thirdButton.style.color = "black";
//     yourSelection.innerText = `${(thirdButton.value)}`
// }
// function changeOutput4(){
//     fourthButton.style.backgroundColor = "hsl(0, 0%, 100%)";
//     fourthButton.style.color = "black";
//     yourSelection.innerText = `${(fourthButton.value)}`
// }
// function changeOutput5(){
//     fifthButton.style.backgroundColor = "hsl(0, 0%, 100%)";
//     fifthButton.style.color = "black";
//     yourSelection.innerText = `${(fifthButton.value)}`
// }
// realButton.addEventListener('click', ()=>{
//     firstSection.style.display = "none"
//     secondSection.style.display = "block";
//     return
// });
