var currentDeal = null; 

// apply deal/promo 
// only 1 deal/promo can be active at a time
function apply(id) {
    var temp = document.getElementById(id);
    // if button is apply
    if (temp.innerHTML === "Apply to order") { 
        applyPromo(temp); 
        if (currentDeal !== null && temp.id !== currentDeal.id) {
            clearPromo(currentDeal); 
        }
    }
    //if button is unapply 
    else {
        clearPromo(temp); 
    }
    currentDeal = temp;
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function applyPromo(btn) {
    btn.innerHTML = "Unapply"; 
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-danger");
    sleep(50).then(() => {
        alert("Promotion Successfully Applied");
    }); 
}

function clearPromo(btn) {
    btn.innerHTML = "Apply to order";
    btn.classList.add("btn-primary");
    btn.classList.remove("btn-danger");
}