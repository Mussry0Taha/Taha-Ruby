let cart = [];
let cartCount = 0;

// Add to Cart Function
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    updateCart();
}

// Toggle Cart Visibility
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'none') {
        cartModal.style.display = 'block';
    } else {
        cartModal.style.display = 'none';
    }
}

// Update Cart Items
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.name} - $${item.price}`;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        cartCount = 0;
        document.getElementById('cart-count').innerText = cartCount;
        updateCart();
        toggleCart();
    }
}

// Scroll to Category
function scrollToCategory(categoryId) {
    const categorySection = document.getElementById(categoryId);
    categorySection.scrollIntoView({ behavior: 'smooth' });
}
