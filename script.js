let punkte=0;
const button=document.getElementById("CPS");
const time=document.getElementById("Zeit")
button.addEventListener("click", function() {
  punkte++;
  button.textContent=punkte;
  setTimeout(function() {
    time.classList.toggle("an");
  }, 100);
});
