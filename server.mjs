import express from 'express';
import fs from 'fs/promises'; // i have used promises version of fs for async/await
const app = express();
const PORT = 3001;

// Load product data from db.json
let products = [];
const loadProducts = async () => {
    try {
        const data = await fs.readFile('db.json', 'utf8');
        products = JSON.parse(data).products;
    } catch (err) {
        console.error('Error reading db.json:', err);
    }
};

// Endpoint to get the price of a product
app.get('/products/:product', (req, res) => {
    const productId = req.params.product.toLowerCase();
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json({ price: product.price });
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

// Start the server
const startServer = async () => {
    await loadProducts();
    app.listen(PORT, () => {
        console.log(`Price API is running at http://localhost:${PORT}`);
    });
};

startServer();
