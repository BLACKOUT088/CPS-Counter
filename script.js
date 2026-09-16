let punkte=1;
const button=document.getElementById("CPS");
button.addEventListener("Click", funktion() {
  punkte++;
  button.textContent=punkte;
});
