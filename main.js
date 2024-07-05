const firstSection = document.querySelector("#ratingStart")
const secondSection = document.querySelector("#thankYouStart")
const yourSelection = document.querySelector("#yourSelection")
const CallToActionButton = document.querySelector("button")
const className = document.querySelectorAll(".options")

className.forEach(function(eachClass){
    eachClass.addEventListener('click', (event)=>{
        eachClass.style.backgroundColor = "hsl(0, 0%, 100%)"
        eachClass.style.color = "black"
        yourSelection.innerText = eachClass.innerText
    })
})

CallToActionButton.addEventListener('click', (event)=>{
    firstSection.style.display = "none"
    secondSection.style.display = "block"
})