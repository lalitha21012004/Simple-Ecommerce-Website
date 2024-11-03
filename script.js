const products = [
    { id: 1, name: "SmartWatch", price: 1500, image: "images/image.png" },
    { id: 2, name: "Tablet", price: 5000, image: "images/image copy.png" },
    { id: 3, name: "Powerbank", price: 2000, image: "images/image copy 2.png" },
    { id: 4, name: "Stylus Pen", price: 3000, image: "images/image copy 3.png" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'product');
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = `Total: $${total}`;
}

// Initialize the product display
displayProducts();
