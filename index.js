const BASE_URL = ("http://localhost:3000/dishes")

fetch(BASE_URL)
    .then(resp => resp.json())
    .then(dish => {
        dish.forEach(renderFood);
        // console.log(dish); //to test the fetch results
    });
    

//to display each item on the menu
function renderFood(dish){

    //grab menu div    
    const dishMenu = document.getElementById("mexican-menu");

    //create image elements
    const images = document.createElement('img');
    
    //link image source
    images.src = dish.image;

    //append the image
    dishMenu.appendChild(images);

    //click events
    images.addEventListener("click", () => {
        document.getElementById("detail-image").src = dish.image;
        document.getElementById("name").textContent = dish.name;
        document.getElementById("description").textContent = dish.description;
        document.getElementById("price").textContent = dish.price;
        selectedDish = dish;
    })


}

const addDish = document.getElementById("button")

let totalPrice = 0;

addDish.addEventListener("click", () => {
        
    const dishName = document.getElementById("name").textContent;
        
    // const dishPrice = document.getElementById("price").innerText;
    const dishPrice = selectedDish.price;
    // console.log(dishPrice);

    const newOrder = document.getElementById("order");

    const newDish = document.createElement('h3');

    newDish.textContent = dishName;

    newOrder.appendChild(newDish);

    totalPrice = totalPrice + dishPrice;

    // console.log(totalPrice);

    const finalPrice = document.getElementById("total");
    
    const priceLocation = document.createElement("h2");

    priceLocation.textContent = `Total Price: $${totalPrice}`;
    // priceLocation.textContent = "Total Price: Who cares? Just eat as much as you can!"

    finalPrice.replaceChildren(priceLocation);

    });



