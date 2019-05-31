<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Poveži Se - Admin Panel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
</head>
<body>
<div class="auth-wrapper">
    @include('partials.auth.image')
    <main>
        @yield('content')
    </main>
</div>
<script src="{{ mix('js/admin.js') }}"></script>
</body>
</html>
