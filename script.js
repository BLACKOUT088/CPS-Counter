let punkte=1;
const button=document.getElementById("CPS");
button.addEventListener("click", function() {
  punkte++;
  button.textContent=punkte;
});
