const m = moment();

console.log(m.format("dddd MMM Do YYYY"));

$("p.date-display").html(m.format("[Today's date is: ] dddd MMMM Do YYYY"));