function increment(id, inc) {
    var temp = document.getElementById(id); 
    if (inc === "minus") {
        if (Number(temp.value) > 0) {
            temp.value = Number(temp.value) - 1;
        }
    }
    else {
        temp.value = Number(temp.value) + 1;
    }
}