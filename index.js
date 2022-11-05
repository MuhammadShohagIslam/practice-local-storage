/*
    *** Add Data To The Local Storage ***
*/

const addDataToLocalStorage = (id) =>{
    // step1: create a object which one we want to store into local storage
    const shoppingCart = {};
    
    // step2: get stored shopping cart from the local storage
    const storedCart = localStorage.getItem("shopping-cart");

    // step3: check it stored or not,if stored, assign this object to shopping cart
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // step4: check id, is already exist on object or not, if exists increment quantity
    // otherwise, added this id as key and added value 1
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    // step5: set shopping cart into local storage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}