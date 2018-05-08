// Wait to attach handlers until DOM is fully loaded

//$(function() {
$(document).on("click", ".devour-burger", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  console.log("put burger id " + id);
  //});

  // Send the PUT request.
  $.ajax({
    type: "PUT",
    url: "api/burgers/" + id,
    devoured: true
  }).then(function() {
    //console.log("Changed devour to", newBurger);
    // Reload the page to get the updated list
    location.reload();
  });
});
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#ca")
      .val()
      .trim(),
    devoured: $("[name=devoured]:checked")
      .val()
      .trim()
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    console.log("Created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  //       // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(function() {
    console.log("Deleted burger", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
