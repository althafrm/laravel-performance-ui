let timer = null;
let timerCount = 0;

$('#submit-count').on('click', (event) => {
    const inputCount = $('#count').val();

    if (inputCount < 1) {
        $('#message')
            .removeClass()
            .addClass('alert alert-danger')
            .html('Enter a number')
            .fadeTo('slow', 1)
            .delay(3000)
            .fadeOut('slow', 0);

        return;
    }

    timerCount = 0;
    timer = setInterval(timerWatch, 100);

    $.get(`http://localhost:8001/api/generate/${inputCount}`)
        .done(function (data, status, jqXHR) {
            clearTimer();
            $('#message')
                .removeClass()
                .addClass('alert alert-success')
                .html(data.message)
                .fadeTo('slow', 1)
                .delay(3000)
                .fadeOut('slow', 0);
        })
        .fail(function (jqXHR, status) {
            clearTimer();
            $('#message')
                .removeClass()
                .addClass('alert alert-danger')
                .html('Server error')
                .fadeTo('slow', 1)
                .delay(3000)
                .fadeOut('slow', 0);
        });
});

const timerWatch = () => {
    timerCount += 100;

    let milliseconds = parseInt(timerCount % 1000);
    let seconds = parseInt((timerCount / 1000) % 60);
    let minutes = parseInt((timerCount / 1000) / 60);

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds > 99) ?
        milliseconds : (milliseconds > 9) ?
            '0' + milliseconds :
            '00' + milliseconds;

    const timerString = `${minutes}:${seconds}:${milliseconds}`;

    $('#timer-watch').text(timerString);
}

const clearTimer = () => {
    clearInterval(timer);
    timer = null;
}
