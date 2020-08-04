//function to calculate the total price for the following pizza type
//pizzaType = ["CHEESE BURGER", "CHICKEN TIKKA", "BBQ STEAK", "HAM PIZZA", "VEG TIKKA", "BEEF PEPPERONI"];
function totalOrderPrice() {
    event.preventDefault();
    var total = 0;
    var toppingPrice = document.getElementById("topping").value;
    var crustPrice = document.getElementById("crust").value;
    var sizePrice = document.getElementById("size").value;
    var pizzaQuantity = document.getElementById("pizzaNumbers").value;
    total = parseInt(crustPrice) + parseInt(toppingPrice) + parseInt(sizePrice)
    totalCost = total * parseInt(pizzaQuantity);
    var pizzaType = document.getElementById("type").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var location = document.getElementById("location").value;
    alert("  THANKYOU!  " + firstName + lastName + "  Your pizza is " + pizzaType + "  " + " and Total Cost exclusive of delivery is " + " " + totalCost +
        ". Delivery fee is 120 and will be delivered at " + location);
};