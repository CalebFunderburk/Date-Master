// Display current date and time
const currentTime = moment();

$("p.time-display").html(currentTime.format("[Today's date is: ] dddd MMMM Do, YYYY h:mm a"));

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })})

// // Delegate clicking on a task
// $(".description").on("click", "div", function() {
//     var text = $(this)
//         .text()
//         .trim();

//     var textInput = $("<textarea>")
//         .val(text);

//     $(this).replaceWith(textInput);

//     textInput.trigger("focus");
// });

// $(".description").on("blur", "textarea", function() {
//     var taskP = $("<p>")
//         .text(text);

//     $(this).replaceWith(taskP);
// });

// var checkTime = function () {
//     var hour = $(".hour").text().trim();

//     var time = moment(hour, "LT");
//     console.log(time)

//     //remove any old classes from element
//     $(".hour").removeClass(".present .past .future");

//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//         $(".hour").addClass(".past");
//     } else if (moment().isBefore(time)) {
//         $(".hour").addClass(".future");
//     } else {
//         $(".hour").addClass(".present");
//     }
// }

// checkTime();