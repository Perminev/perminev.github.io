// document.getElementById("surpriseBtn").addEventListener("click", function() {
//     document.getElementById("hiddenMessage").style.display = "block";
// });
document.getElementById("surpriseBtn").addEventListener("click", function() {
    let message = document.getElementById("hiddenMessage");
    let button = document.getElementById("surpriseBtn");

    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
        button.value = "СПРЯТАТЬ";
    } else {
        message.style.display = "none";
        button.value = "ПОКАЗАТЬ";
    }
});