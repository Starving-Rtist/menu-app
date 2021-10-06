const BASE_URL = ("http://localhost:3000/dishes")

fetch(BASE_URL)
    .then(resp => resp.json())
    .then(dish => {
        dish.forEach(renderFood);
        console.log(dish);
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
        document.getElementById("price").textContent = "$" + dish.price;
    })

}

const addDish = document.getElementById("button")

addDish.addEventListener("click", () => {
        
    const dishName = document.getElementById("name").textContent;
        
    const dishPrice = document.getElementById("price");
    console.log(dishPrice);  //need to get rid of the $ sign

    const newOrder = document.getElementById("order");

    const newDish = document.createElement('h3');

    newDish.textContent = dishName;

    newOrder.appendChild(newDish);
    

    });



