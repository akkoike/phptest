jQuery(document).ready(function($) {
    var timerEndDate = '';
    $.ajax({
        type: 'GET',
        url: 'timer.php'
    }).done(function(response, textStatus, jqXHR) {
        var timerSettings = response.split('_');
        $('.countdown').final_countdown({
            'start': timerSettings[0],
            'end': timerSettings[1],
            'now': timerSettings[2]
        }, function() {
            location.href = timerSettings[3];
        });
    }).fail(function(jqXHR, textStatus, errorThrown ) {

    }).always(function(data_or_jqXHR, textStatus, jqXHR_or_errorThrown) {

    });

});

