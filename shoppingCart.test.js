// shoppingCart.test.js
const ShoppingCart = require('./shoppingCart.mjs');
const PriceApi = require('./priceApi');

describe('ShoppingCart', () => {
    let cart;
    let priceApi;

    beforeEach(() => {
        priceApi = new PriceApi();
        cart = new ShoppingCart(priceApi);
    });

    test('should add a product to the cart', async () => {
        await cart.addProduct('cornflakes', 2);
        const details = cart.getCartDetails();
        expect(details.items['cornflakes'].quantity).toBe(2);
        expect(details.items['cornflakes'].price).toBe(2.52);
    });

    test('should calculate subtotal correctly', async () => {
        await cart.addProduct('cornflakes', 2);
        await cart.addProduct('weetabix', 1);
        expect(cart.calculateSubtotal()).toBe(15.02);
    });

    test('should calculate tax correctly', async () => {
        await cart.addProduct('cornflakes', 2);
        await cart.addProduct('weetabix', 1);
        expect(cart.calculateTax(cart.calculateSubtotal())).toBe(1.88);
    });

    test('should calculate total correctly', async () => {
        await cart.addProduct('cornflakes', 2);
        await cart.addProduct('weetabix', 1);
        expect(cart.calculateTotal()).toBe(16.90);
    });

    test('should handle non-existent products gracefully', async () => {
        await cart.addProduct('nonexistent', 1);
        const details = cart.getCartDetails();
        expect(details.items).toEqual({});
    });
});