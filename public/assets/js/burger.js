// $(function () {
//   // create form -- on click submit function
//   $("#addBurger").on("submit", function (e) {
//     // preventDefault on a submit event
//     e.preventDefault();

//     let newBurger = {
//       burger_name: $("#burgerName").val().trim(),
//       devoured: 0,
//     };
//     // POST request
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger,
//     }).then(function () {
//       console.log("Added a New Burger!");
//       // reload the list once you have updated it
//       location.reload();
//     });
//   });

//   // eat burger click function - on click, set the devoured state to 1
//   $(".eatburger").on("click", function (e) {
//     e.preventDefault();

//     let id = $(this).data("id");
//     let devouredState = {
//       devoured: 1,
//     };
//     // PUT request
//     $.ajax("/api/burgers/" + id, {
//       type: PUT,
//       data: devouredState,
//     }).then(function () {
//       console.log("Burger has been DEVOURED, BITCHEZ!", devouredState);
//       // reload the list once you have updated it
//       location.reload();
//     });
//   });

//   // trash the burger once you have deleted it
//   $(".trashburger").on("click", function (e) {
//     let id = $(this).data("id");

//     // DELETE request
//     $.ajax("/api/burgers/" + id, {
//       type: DELETE,
//     }).then(function () {
//       console.log("Burger has been YEETED INTO SPACE", id);
//       // reload the list once you have updated it
//       location.reload();
//     });
//   });
// });

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (e) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    let devouredState = {
      devoured: 1,
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function () {
      console.log("");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (e) {
    // Make sure to preventDefault on a submit event.
    e.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: 0,
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (e) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
