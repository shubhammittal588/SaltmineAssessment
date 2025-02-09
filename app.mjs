import ShoppingCart from './shoppingCart.mjs';

(async () => {
    const cart = new ShoppingCart();

    // Add products to the cart
    await cart.addProduct('cornflakes', 2); // 2 x cornflakes
    await cart.addProduct('weetabix', 1);   // 1 x weetabix

    // Get cart details
    const cartDetails = cart.getCartDetails();

    // Print the cart contents and totals
    console.log('Cart contains:');
    for (const [product, details] of Object.entries(cartDetails.items)) {
        console.log(`${details.quantity} x ${product} @ ${details.price.toFixed(2)} each`);
    }
    console.log('-----------------------------------');
    console.log(`Subtotal = ${cartDetails.subtotal.toFixed(2)}`);
    console.log(`Tax = ${cartDetails.tax.toFixed(2)}`);
    console.log(`Total = ${cartDetails.total.toFixed(2)}`);
})();
