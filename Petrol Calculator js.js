// Function to calculate the total cost of petrol
function calculateTotalCost() 
{

    // Get the cost per liter from the input
    var costPerLiter = document.getElementById('costPerLiter').value; 

    // Get the number of liters purchased from the input
    var litersPurchased = document.getElementById('litersPurchased').value; 
    
    // Calculate the total cost
    var totalCost = costPerLiter * litersPurchased; 
    
    // Display the total cost
    document.getElementById('totalCost').innerText = "Total Cost: $" + totalCost.toFixed(2); 
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);

