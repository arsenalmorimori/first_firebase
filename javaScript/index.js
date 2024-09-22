import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://playground-edf2c-default-rtdb.asia-southeast1.firebasedatabase.app"
                
};

const app = initializeApp(appSettings);
const database = getDatabase(app);


const cart = document.getElementById("cart");
const cartInDB = ref(database, "cart");


const _itemTextBox = document.getElementById("itemTextBox");
const _addButton = document.getElementById("addButton");
const _cartList = document.getElementById("cartList");

_addButton.onclick = function clicked1() {
    
    //////////////// ADD
    let itemToCart = itemTextBox.value;
    console.log(itemToCart);
    push(cartInDB, itemToCart);

    clearInputFieldEl();
    console.log(`${itemToCart} added to database`);
}






onValue(cartInDB, function(snapshot){
        let cartArray = Object.values(snapshot.val());
        
            let len = cartArray.length;
            clearList();
            for(let a = 0 ; a<len ; a++){
                console.log(cartArray[a])
                apphendItemToCartList(cartArray[a])
            }
});








function clearInputFieldEl(){
    _itemTextBox.value=""
}

function clearList(){
    cartList.innerHTML = ""
}

function apphendItemToCartList(itemValue){
    cartList.innerHTML += `<li>${itemValue}</li>`
}










// BOOKS

// const books = document.getElementById("books");
// const booksInDB = ref(database, "books");
// onValue(booksInDB, function(snapshot){

//     let booksArray = Object.values(snapshot.val());
//     let len = booksArray.length;
//     console.log("loo");
//     console.log(booksArray[0]);
//     let a;

//     clearInputFieldEl();
//     for(a=0; a<len; a++){

//         console.log(booksArray[a])
//         apphendItemToCartList(booksArray[a])

//     } 
//     a=len;
// });

// function apphendItemToCartList(itemValue){
//      cartList.innerHTML += `<li>${itemValue}</li>`
// }
//  function clearInputFieldEl(){
//      cartList.innerHTML=""
//  }
