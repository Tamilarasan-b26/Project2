// script.js

// Fetch data from the Fake Store API
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Display the first 20 products
        displayProducts(products.slice(0, 20));
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// Function to display products
const displayProducts = (products) => {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        `;
        container.appendChild(productDiv);
    });
};

// Call the fetchProducts function
fetchProducts();