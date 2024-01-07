

// Get the modal
var modal = document.getElementById('id01');
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "null";
    }
}
function alerte() {
    alert("You login");
   document.getElementById('id01').style.display="none";
  }
 
  function bookalert() {
    alert("You booked your appointment");
   
  } 
  function subscribe(){
    alert("You subscribe to look to all news");
   
  
  }
  function thanks(){
    alert("thanks for your contact");
  }
 