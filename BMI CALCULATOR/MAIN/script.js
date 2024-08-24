function bodyload() {
    var yourweight = parseInt(prompt("ENTER YOUR WEIGHT"));
    var yourstatus = document.getElementById("yourstatus");
    if (yourweight <= 53) {
        yourstatus.style.marginLeft = "200px";
    } else if (yourweight > 53 && yourweight <= 74) {
        yourstatus.style.marginLeft = "600px";
    } else if (yourweight > 74 && yourweight < 100) {
        yourstatus.style.marginLeft = "1000px";
    } else if (yourweight >= 100) {
        yourstatus.style.marginLeft = "1400px"; // Added case for weights >= 100
    }
}

