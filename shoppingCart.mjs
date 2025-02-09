import fetch from 'node-fetch';

class ShoppingCart {
    constructor() {
        this.cart = {};
        this.taxRate = 0.125; // 12.5% as the tax rate taken, assuming nirmala tai going easy on us
    }

    async addProduct(productName, quantity) {
        const price = await this.getProductPrice(productName);
        if (price !== null) {
            if (this.cart[productName]) {
                this.cart[productName].quantity += quantity;
            } else {
                this.cart[productName] = { price, quantity };
            }
        } else {
            console.error(`Product ${productName} not found.`);
        }
    }

    async getProductPrice(productName) {
        try {
            const response = await fetch(`http://localhost:3001/products/${productName}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.price; // Assuming the API returns an object with a price property
        } catch (error) {
            console.error('Error fetching product price:', error);
            return null;
        }
    }

    calculateSubtotal() {
        return Object.values(this.cart).reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    calculateTax(subtotal) {
        return Math.ceil(subtotal * this.taxRate * 100) / 100; // Rounded up to 2 decimal places
    }

    calculateTotal() {
        const subtotal = this.calculateSubtotal();
        const tax = this.calculateTax(subtotal);
        return Math.ceil((subtotal + tax) * 100) / 100; // Rounded up to 2 decimal places
    }

    getCartDetails() {
        return {
            items: this.cart,
            subtotal: this.calculateSubtotal(),
            tax: this.calculateTax(this.calculateSubtotal()),
            total: this.calculateTotal()
        };
    }
}

export default ShoppingCart;
