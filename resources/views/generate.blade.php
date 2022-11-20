<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name', 'Performance UI') }}</title>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/jquery.min.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
    <div class="container d-flex align-items-center justify-content-center">
        <div id="message"></div>
        <div class="mt-3">
            <div class="row form-group">
                <input type="number" id="count" min="1" step="1" onfocus="this.previousValue = this.value"
                    onkeydown="this.previousValue = this.value"
                    oninput="validity.valid || (value = this.previousValue)">
            </div>
            <div class="row form-group mt-3">
                <button id="submit-count" type="button" class="btn btn-dark">Submit</button>
            </div>
            <div class="row form-group mt-3 text-center border border-dark">
                <label id="timer">
                    Timer: <span id="timer-watch">00:00:000</span>
                </label>
            </div>
        </div>
    </div>
</body>

</html>