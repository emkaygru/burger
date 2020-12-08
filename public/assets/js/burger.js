$(function () {
    $('.eatburger').on('click', function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        let devouredState = {
            devoured: 1
        };

        $.ajax('/api/burgers/' + id, {
            type: PUT,
            data: devouredState
        }).then(function () {
            console.log('Burger has been DEVOURED, BITCHEZ!', devouredState);
            location.reload();
        })
    });

    $(''.create - form ').on('
        submit ', function (e) {
        e.preventDefault();


        let newBurger = {
            burger_name = $('#new-burger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added a New Burger!');
            location.reload();
        });

    });

$('.trashburger').on('click', function (e) {




})







})