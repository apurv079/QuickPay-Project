

document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById("clickbtn");
  const popup = document.getElementById("popupBox");
  const closeBtn = document.getElementById("closePopup");

  btn.addEventListener("click", function() {
    popup.style.display = "flex"; // Show popup

  });

  closeBtn.addEventListener("click", function()
  { popup.style.display = "none"});


});

