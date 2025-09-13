//Exercise 1: Calculate total sales amount. 
const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];

function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Total Sales Amount:", calculateTotalSales(sales)); 


//Exercise 2. 
// An array of orders, each with item name, quantity, and price
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];

// Function that generates a receipt from the orders
function generateReceipt(orders) {
    // Variable to keep track of the overall total
    let grandTotal = 0;

    // Print receipt header
    console.log("Receipt:");
    console.log("----------------------");

    // Loop through each order in the orders array
    for (let i = 0; i < orders.length; i++) {
        // Calculate total price for this order (quantity × price)
        const itemTotal = orders[i].quantity * orders[i].price;

        // Add this item’s total to the grand total
        grandTotal += itemTotal;

        // Print the details of this order
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }

    // Print a divider
    console.log("----------------------");

    // Print the grand total for all orders
    console.log(`Grand Total: $${grandTotal}`);
}

// Call the function to print the receipt
generateReceipt(orders);
