let punkte=0;
const button=document.getElementById("CPS");
button.addEventListener("click", function() {
  punkte++;
  button.textContent=punkte;
});
