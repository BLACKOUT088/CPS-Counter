let punkte = 0;
let testLaeuft = false;

const button = document.getElementById("CPS");
const time = document.getElementById("Zeit");
const result = document.getElementById("End");

button.addEventListener("click", function () {
  if (testLaeuft === false) {
    testLaeuft = true;
    punkte = 0;
    button.textContent = "0";

    setTimeout(function () {
      testLaeuft = false;
      button.disabled = true;

      time.textContent = punkte;
      result.style.display = "block";
      button.textContent = "Fertig";
    }, 1000);
  }

  if (testLaeuft === true) {
    punkte++;
    button.textContent = punkte;
  }
});
