$(function () {

    // eat burger click function - on click, set the devoured state to 1 
    $('.eatburger').on('click', function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        let devouredState = {
            devoured: 1
        };
        // PUT request 
        $.ajax('/api/burgers/' + id, {
            type: PUT,
            data: devouredState
        }).then(function () {
            console.log('Burger has been DEVOURED, BITCHEZ!', devouredState);
            // reload the list once you have updated it 
            location.reload();
        })
    });

    // create form -- on click submit function 
    $('.createform ').on('submit', function (e) {
        // preventDefault on a submit event 
        e.preventDefault();


        let newBurger = {
            burger_name = $('#new-burger').val().trim(),
            devoured: 0
        };
        // POST request 
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added a New Burger!');
            // reload the list once you have updated it 
            location.reload();
        });

    });
    // trash the burger once you have deleted it
    $('.trashburger').on('click', function (e) {
        let id = $(this).data('id');

        // DELETE request 
        $.ajax('/api/burgers/' + id, {
            type: DELETE,
        }).then(function () {
            console.log('Burger has been YEETED INTO SPACE', id);
            // reload the list once you have updated it 
            location.reload();
        })

    })


})