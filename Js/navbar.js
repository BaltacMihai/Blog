function display() {
    var x = document.getElementById("MyNavbar");
    if (x.style.display == "none") {
        x.style.display = "flex";
        console.log("Done");
    } else x.style.display = "none";
}