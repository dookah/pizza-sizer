let pizza1slider = document.getElementById('pizza1')
let pizza2slider = document.getElementById('pizza2')

let pizza1label = document.getElementById('pizza1label');
let pizza2label = document.getElementById('pizza2label');

pizza1slider.addEventListener('input', function(){
    pizza1label.textContent = 'Two Pizzas of : ' + pizza1slider.value + ' inches'

    
})

pizza2slider.addEventListener('input', function(){
    pizza2label.textContent = 'One Pizzas of : ' + pizza2slider.value + ' inches'
})

let calculateValue = (pizza1diameter, pizza2diameter) => {
    let volumepizza1 = 2 * Math.pow((Math.PI * (pizza1diameter/2),2))
    let volumepizza2 = Math.pow((Math.PI * (pizza2diameter/2),2))
}