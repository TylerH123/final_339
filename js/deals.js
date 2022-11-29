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

// function to sleep
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function applyPromo(btn) {
    btn.innerHTML = "Unapply"; 
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-danger");
    sleep(75).then(() => {
        alert("Promotion Successfully Applied");
    }); 
}

function clearPromo(btn) {
    btn.innerHTML = "Apply to order";
    btn.classList.add("btn-primary");
    btn.classList.remove("btn-danger");
}

function redeem(id) {
    var temp = document.getElementById(id); 
    var newChild = document.createElement("p");
    var code = generateCode(10) + "-" + generateCode(10) + "-" + generateCode(10); 
    newChild.innerHTML = code; 
    newChild.classList.add("code");
    temp.parentNode.replaceChild(newChild, temp);
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateCode(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}