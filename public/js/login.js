(function() {
    $('#nameForm').keyup(function() {
        var empty = false;
        $('#nameForm > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit_button').attr('disabled', 'disabled');
        } else {
            $('#submit_button').removeAttr('disabled');
        }
    });
})()