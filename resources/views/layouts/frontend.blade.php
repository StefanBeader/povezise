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
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '{{ env('FACEBOOK_PIXEL_ID', '') }}');
      fbq('track', 'PageView');
    </script>
</head>
<body>

@yield('page')
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
