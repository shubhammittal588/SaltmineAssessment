# Shopping Cart Application

This is a simple shopping cart application built with Node.js that allows users to add products, calculate totals, and retrieve product prices from a mock Price API. The product data is stored in a JSON file (`db.json`), making it easy to manage and update.

## Features

- **Add Products**: Users can add products to the cart with specified quantities.
- **Fetch Prices**: Prices are retrieved from a Price API that reads from a JSON file.
- **Calculate Totals**: The application calculates the subtotal, tax (12.5%), and total payable amounts.
- **Display Cart Contents**: The cart contents, including product details and totals, are displayed in the terminal.

## Project Structure
 shopping-cart │ ├── db.json # Contains product data ├── server.mjs # Price API server ├── shoppingCart.mjs # Shopping cart logic └── app.mjs # Application logic to demonstrate functionality


## Technologies Used

- Node.js
- Express (for the Price API)
- node-fetch (for making HTTP requests)

## Setup Instructions

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):<br/>
   git clone <repository-url> <br/>
   cd <repository-directory><br/>
   npm install express node-fetch<br/>
   node server.mjs<br/>
   node app.mjs  //Use a seperate terminal to run the app<br/>

### Expected Output

1. **node server.mjs** :<br/>
   Price API is running at http://localhost:3001

2. **node app.mjs** : <br/>
   Cart contains:<br/>
   2 x cornflakes @ 4.99 each<br/>
   1 x weetabix @ 7.29 each<br/>
   Subtotal = 17.27<br/>
   Tax = 2.16<br/>
   Total = 19.43
