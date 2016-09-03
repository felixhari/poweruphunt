
// Get the modal1
var modal1 = document.getElementById('jakpus');

// Get the button that opens the modal1
var btn1 = document.getElementById("jakartapusat");


// Get the <span> element that closes the modal1
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal1
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal1
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
