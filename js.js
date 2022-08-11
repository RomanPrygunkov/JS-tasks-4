const coffees = ["Latte", "Cappuccino", "Americano"];
let coffeeIndex = 0
let coffeeName = prompt("Поиск кофе по названию:", "").toLowerCase()
coffeeName = coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1)

if (coffees.includes(coffeeName)) {
    coffeeIndex = coffees.findIndex(item => {      // Посмотрел гайд на ютубе
        if (item  === coffeeName) {
            return true
        }
    } )
    alert(`Держите ваш любимый кофе coffee. Он ${coffeeIndex + 1} по популярности в нашей кофейне.`)
    
} else {
alert ("К сожалению, такого вида кофе нет в наличии")
}
  
