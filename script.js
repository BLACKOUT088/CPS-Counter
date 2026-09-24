let punkte=0;
const button=document.getElementById("CPS");
const time=document.getElementById("Zeit")
const result=document.getElementById("End")
button.addEventListener("click", function() {
  punkte++;
  button.textContent=punkte;
  setTimeout(function() {
    time.textContent=punkte
    result.classList.toggle("An");
  }, 100);
});
