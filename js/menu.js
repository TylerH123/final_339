let cart = {}

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
    
}