console.log("your index file is loaded correctly!");
var modal = document.getElementById("modal")

var btn = document.getElementById("subscribe")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var emailBtn = document.getElementById("emailBtn")

  emailBtn.onclick = function() {
    modal.style.display = "none";
  }