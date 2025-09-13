### Exercise 1: Calculate total sales amount

**Problem:**

You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions.

**Input details:**

- An array of objects representing sales transactions. Each object has the following properties:
    - `item`: Name of the product (string)
    - `quantity`: Number of units sold (integer)
    - `price`: Price per unit (float)

**Output details:**

- A single number representing the total sales amount

**Steps to implement:**

1. Define an array of sales transactions with at least 3 sample objects
2. Write a function `calculateTotalSales` that takes this array as input
3. Use a loop to iterate through the array and calculate the total sales amount
4. Print the total sales amount to the console
- Click here to view hints
    - The `sales` array contains objects, each representing a sales transaction with `item`, `quantity`, and `price` properties.
    - Use a loop to go through each object in the `sales` array.
    - For each object, multiply the `quantity` by the `price` to get the total for that item.
    - Accumulate the totals in a variable to get the overall sales amount.
    - Return the accumulated total and display it using `console.log`.



### Exercise 2: Generate an order receipt

**Problem:**

Write a JavaScript program that generates a receipt for a customer's order. The receipt should include each item's name, quantity, price, and total cost.

**Input details:**

- An array of objects representing ordered items. Each object has:
    - `item`: Name of the product (string)
    - `quantity`: Quantity ordered (integer)
    - `price`: Price per unit (float)

**Output details:**

- A detailed receipt showing each item's details and the grand total

**Steps to implement:**

1. Define an array of ordered items with at least 3 sample entries
2. Write a function `generateReceipt` that takes this array as input
3. Use a loop to iterate through the items and calculate the total for each item and the grand total


### Exercise 3: Validate passwords

**Problem:**

Write a JavaScript program to validate a list of passwords. A password is valid if:

- It contains only alphanumeric characters (letters and numbers)
- It must be at least 8 characters long, but no more than 20 characters

**Input details:**

- An array of passwords (strings)

**Output details:**

- A message indicating whether each password is valid or invalid

**Steps to implement:**

1. Define an array of sample passwords
2. Write a function `validatePasswords` that takes this array as input
3. Use a loop to iterate through the passwords and check each against the validation criteria
4. Log whether each password is valid or invalid
- Click here to view hints
    - The `passwords` array contains strings that need to be validated based on the given rules.
    - Use a regular expression to define the pattern for valid passwords. The pattern should allow only alphanumeric characters and be between 8 and 20 characters long.
    - Use the `test` method to check if each password matches the regular expression.
    - Iterate over the `passwords` array and log each password as either valid or invalid based on the result of the regex check.


### Exercise 4: Track product stock levels

**Problem:**

You are working for an online retail company. Your task is to write a JavaScript program that tracks the stock levels of various products in the inventory. The program should check if a product is in stock and log an appropriate message.

**Input details:**

- An array of objects representing products. Each object contains:
    - `product`: Name of the product (string)
    - `stock`: Number of units available in stock (integer)

**Output details:**

- A message for each product indicating whether the product is in stock or out of stock.

**Steps to implement:**

1. Define an array of product objects with at least 3 sample products
2. Write a function `checkStockLevels` that takes this array as input
3. Use a loop to iterate through the array and check the stock level for each product
4. Print a message indicating if the product is "In Stock" or "Out of Stock"