/*
    *** Add Data To The Local Storage ***
*/
const addDataToLocalStorage = (id) => {
    // step1: create a object which one we want to store into local storage
    const shoppingCart = {};

    // step2: get stored shopping cart from the local storage
    const storedCart = localStorage.getItem("shopping-cart");

    // step3: check it stored or not,if stored, assign this object to shopping cart
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // step4: check id, is already exist on object or not, if exists increment quantity
    // otherwise, added this id as key and added value 1
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    // step5: set shopping cart into local storage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

/*
    *** Get Data From Local Storage ***
*/
const getDataFromLocalStorage = () => {
    // step1: create object for storing data from local storage
    const shoppingCart = {};

    // step2: get desire data from the local storage
    const storedCart = localStorage.getItem("shopping-cart");

    // step3: check storeCart it has or not in the local storage, if it has
    // assign store data into shopping cart object
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
};

/*
    *** Remove Data By Specific Id From the Local Storage ***
*/
const removeDataByIdFromLocalStorage = (id) => {
    // step1: get data from the localStorage
    const storedCart = localStorage.getItem("shopping-cart");

    // step2: check shoppingCart it has or not in the local storage
    // if it has, converting stringify data to object
    // then check id has in this object, delete id from this object
    // finally set updated object into local storage
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
};

/*
    *** Permanently Remove Data From Local Storage ***
*/
const permanentlyRemovedFullDataFromLocalStorage = () => {
    localStorage.removeItem("shopping-cart");
}
