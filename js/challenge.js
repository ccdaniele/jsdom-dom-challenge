
const counter = document.getElementById('counter');
counterNumber = parseInt(counter.innerHTML)

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click',counterIncrease)

const minusButton = document.getElementById('minus');

minusButton.addEventListener('click',function(){
    counterNumber -= 1
    counter.innerText = counterNumber 
})

function counterIncrease() {
    counterNumber += 1
    counter.innerText = counterNumber 
};

setInterval(counterIncrease, 1000)

form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    pTag = document.createElement('p');
    divTag = document.querySelector('div');
    divTag.appendChild(pTag);
   const inputBox = event.target['comment'].value;
    pTag.innerText = inputBox
    form.reset()

    });