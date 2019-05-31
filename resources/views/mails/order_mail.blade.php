<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Narudzbina</title>
</head>
<body>
    <div>
        <p>Narudzbina od: {{ $order->name }}</p>
        <p>Instagram nalog: {{ $order->instagram_handle }}</p>
        <p>Nacin kontaktiranja: {{ $order->contact_method }}</p>
        <p>Kontakt: {{ $order->contact_value }}</p>
        <p>Paket: {{ $order->package->name }}</p>
    </div>

</body>
</html>