// Show pages
function showPage(page) {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    document.getElementById(page).classList.add("active");
}

// Cart
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    alert(name + " added to cart");
    showCart();
}

function showCart() {
    let items = document.getElementById("cartItems");
    let total = 0;
    items.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        items.innerHTML += "<p>" + cart[i].name + " - ₹" + cart[i].price + "</p>";
        total += cart[i].price;
    }
    document.getElementById("total").innerText = "Total: ₹" + total;
}
