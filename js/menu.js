let cart = {}

const items = {
    "rib": ["Short Rib Burger", 5.99],
    "triple": ["Triple Patty Burger", 7.99],
    "family": ["Family Meal", 9.99],
    "burger": ["BK Burger", 3.49],
    "waffle": ["Waffle Burger", 2.99],
    "turkey": ["Turkey Burger", 3.49],
    "hotdog": ["Hot Dog", 0.99],
    "fries": ["Fries", 1.99],
    "rings": ["Onion Rings", 2.49],
    "drink": ["Soda", 1.49],
    "icecream": ["Soft Serve", 1.89],
    "shake": ["Milk Shake", 5.99],
    "cookies": ["Cookies", 1.99]
}

function increment(id, inc) {
    var temp = document.getElementById(id);
    if (inc === "minus") {
        if (Number(temp.innerHTML) > 0) {
            temp.innerHTML = Number(temp.innerHTML) - 1;
            cart[id] -= 1;
        }
    }
    else {
        temp.innerHTML = Number(temp.innerHTML) + 1;
        if (id in cart) {
            cart[id] += 1;
        }
        else {
            cart[id] = 1;
        }
    }
    console.log(cart);
}

function viewCart() {
    var msg = "";
    var total = 0;
    Object.keys(cart).forEach(key => {
        total += (cart[key] * items[key][1]);
        msg += items[key][0] + " (" + cart[key] + "): $" + (cart[key] * items[key][1]) + "\n";
    });
    total = total.toFixed(2);
    msg += "Total: $" + total;
    alert(msg);
}