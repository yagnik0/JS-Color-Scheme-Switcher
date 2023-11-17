const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const reset = document.querySelector('.reset')

buttons.forEach(function(button){
    button.addEventListener ('click',function(e){
        if (e.target.id === "grey" 
        || e.target.id === "red" 
        || e.target.id === "blue"
        || e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
    })
})

reset.addEventListener('click',function(set){
    body.style.backgroundColor = "white"
})