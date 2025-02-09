document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Fetch and display products from an API
    async function loadProducts() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            productList.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        }
    }

    // Display products dynamically
    function displayProducts(products) {
        productList.innerHTML = ""; // Clear existing products
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px;">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Add product to cart
    window.addToCart = (id, title, price) => {
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id, title, price, quantity: 1 });
        }
        saveCart();
        alert(`${title} has been added to your cart.`);
    };

    // Save cart to local storage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Display cart items (console-based for now)
    window.viewCart = () => {
        console.log("Cart Items:", cart);
        alert(`You have ${cart.length} items in your cart. Check the console for details.`);
    };

    // Load products on page load
    loadProducts();
});
