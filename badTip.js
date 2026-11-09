//Lets review this code together
// Review the code for: Correctness, Requirments,
// Error handling and Maintainability
function tipCalculator(bill, tipPercent, people) {
  function calcTip(b, p) {
    tip = (b * p) / 10;
    return tip.toFixed(2);
  }

  function calcTotal() {
    total = bill + calcTip(bill, tipPercent);
    return total;
  }

  var perPerson = Math.round(calcTotal() / people);

  if (tipPercent == 0) {
    console.log("No tip? Really?");
  }

  for (var i = 1; i <= people + 1; i++) {
    console.log("Person " + i + " pays $" + perPerson);
  }

  console.log(
    "Tip: $" + tip + "\nTotal: $" + total + "\nEach person pays: $" + perPerson,
  );
}

//Bill:50, tip percent: 15, number of people:3
tipCalculator(50, 15, 3);
