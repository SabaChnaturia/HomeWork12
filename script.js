let age = prompt("Enter your age:");
let type = prompt("Enter movie type (regular or 3D):");
let day = prompt("Enter time of day (matinee or evening):");
let discountTicket = prompt("Do you have a discount ticket? (yes or no):");

let price = 0;

switch (true) {
    case age < 10:
        price = 5;
        break;
    case age >= 10 && age < 65:
        price = 15;
        break;
    case age >= 65:
        price = 10;
        break;
    default:
        console.log("Error: Please enter a valid age.");
        break;
}

switch (type) {
    case "3D":
        price += 5;
        break;
    case "regular":
        break;  // No additional charge for regular
    default:
        console.log("Error: Please enter a valid movie type.");
        break;
}

switch (day) {
    case "evening":
        price += 5;
        break;
    case "matinee":
        break; 
    default:
        console.log("Error: Please enter a valid time of day.");
        break;
}

if (discountTicket === "yes") {
    if (price >= 20) {
        price -= 5;
    } else {
        price *= 0.75;
    }
}

console.log("ბილეთის ფასი თქვენთვის არის: " + price + " ლარი.");