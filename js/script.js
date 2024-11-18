// Array to store items in the cart
let cart = [];

// Function to add a product to the cart
function addToCart() {
    cart.push("Produit");  // You can add actual product data here
    alert("Produit ajouté au panier !");
    console.log(cart);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";  // Clear the current cart

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");
        cartItemElement.innerHTML = `<p>${item}</p>`;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Checkout process (basic alert for now)
function checkout() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
    } else {
        alert("Merci pour votre achat !");
    }
}
