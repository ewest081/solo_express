/**
 * Created by lizwestberg on 1/6/16.
 */

$(document).ready(function(){
    $('.container').append('<button>View Balance</button>');
    $('.container').append('<p class=\"balance\"><span class=\"response\"></span></p>');

    $('button').on('click', function() {
        balanceButton();
    });
});

function balanceButton() {
    $('.response').hide();
    $.ajax('/balance').then(function (response) {
        $('.response').text(response);
        $('.response').fadeIn();
    });
}
