const coffees = ["Latte", "Cappuccino", "Americano"];
let coffeeName = prompt("Поиск кофе по названию:", "").toLowerCase()
coffeeName = coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1)

let coffeeIndex = coffees.findIndex(function (word) {
    if (coffeeName === word) {
        return true
    }
    })   
    
coffeeIndex !== -1 ?
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffeeIndex + 1} по популярности в нашей кофейне.`) :
    alert("К сожалению, такого вида кофе нет в наличии")    


  

 
  

 
  
