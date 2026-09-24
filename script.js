let punkte = 0;
let testLaeuft = false;

const button = document.getElementById("CPS");
const time = document.getElementById("Zeit");
const result = document.getElementById("End");

button.addEventListener("click", function () {
  // Der erste Klick startet den Test
  if (testLaeuft === false) {
    testLaeuft = true;
    punkte = 0;
    button.textContent = "0";

    // Nach 1 Sekunde wird der Test beendet
    setTimeout(function () {
      testLaeuft = false;
      button.disabled = true;

      time.textContent = punkte;
      result.style.display = "block";
      button.textContent = "Fertig";
    }, 1000);
  }

  // Jeder Klick wird gezählt
  if (testLaeuft === true) {
    punkte++;
    button.textContent = punkte;
  }
});
