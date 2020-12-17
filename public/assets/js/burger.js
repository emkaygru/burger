// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (e) {
    var id = $(this).data("id");

    let devouredState = {
      devoured: 1,
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("burger has been yeethed");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (e) {
    // Make sure to preventDefault on a submit event.
    e.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".trashburger").on("click", function (e) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
