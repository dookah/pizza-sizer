/* 

1 -- 10 inch: £20

2 -- 2 x 10 inch: £10

Pizza 1:
--------
Area: 3.14 * 9^2 = 243inches^2


Pizza 2:
--------
Area: 3.14 * 6^2 = 113inches^2 * 2 = 226
*/

let pizzavalue = document.getElementById("pizza_valuation")

let pizza1slider = document.getElementById('pizza1')
let pizza2slider = document.getElementById('pizza2')

let pizza1label = document.getElementById('pizza1label');
let pizza2label = document.getElementById('pizza2label');

let pizza1price = document.getElementById('pizza1price')
let pizza2price = document.getElementById('pizza2price')

let set_pizza_text = (label, inches) => {
    label.innerText = inches + " inches"
}

set_pizza_text(pizza1label, pizza1slider.value)
set_pizza_text(pizza2label, pizza2slider.value)

pizza1slider.addEventListener('input', function(){
    set_pizza_text(pizza1label, pizza1slider.value)
    calculateValue(pizza1slider.value, pizza2slider.value)
})
pizza2slider.addEventListener('input', function(){
    set_pizza_text(pizza2label, pizza2slider.value)
    calculateValue(pizza1slider.value, pizza2slider.value)
})
pizza1price.addEventListener('input', function(){
    calculateValue(pizza1slider.value, pizza2slider.value)
})
pizza2price.addEventListener('input', function(){
    calculateValue(pizza1slider.value, pizza2slider.value)
})

let area = (diameter) => {
    return Math.pow(Math.PI * (diameter / 2), 2)
}

let calculateValue = (pizza1diameter, pizza2diameter) => {
    /* 
    This function calculates the price
    :param pizza1diameter: <int> The diameter of the first pizzas (there are two) TODO: make this flexible - I like pizza
    :param pizza2diameter: <int> The diameter of the second pizza
    */
    let volumepizza1 = 2 * area(pizza1diameter)
    let volumepizza2 = area(pizza2diameter)

    if(price_per_area(volumepizza1, pizza1price.value) < price_per_area(volumepizza2, pizza2price.value)){
        pizzavalue.innerText = "BUY THE SINGLE PIZZA NOW"
    }else if(price_per_area(volumepizza1, pizza1price.value) == price_per_area(volumepizza2, pizza2price.value)){
        pizzavalue.innerText = "NEUTRAL"
    }else{
        pizzavalue.innerText = "BUY THE 2 PIZZAS NOW"
    }
}

let price_per_area = (price, pizza_area) => {
    return price / pizza_area
}