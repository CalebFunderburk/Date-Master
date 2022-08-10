// Display current date and time
const m = moment();

$("p.time-display").html(m.format("[Today's date is: ] dddd MMMM Do, YYYY h:mm a"));