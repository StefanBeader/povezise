<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="Description" content="Najprirodniji i najefikasniji način da privučete pažnju na svoj Instagram profil,
    jeste da uđete u interakciju sa drugim profilima.
    Nažalost to oduzima previše vremena!
    Prepustite nama Vaše Instagram obaveze kao što su FOLLOW, UNFOLLOW, LIKE
    i gledajte kako Vaša baza pratilaca raste iz dana u dan!"/>
    <title>Poveži Se - Unapredite svoj biznis na instagramu</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

@yield('page')
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
