<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Poruka</title>
</head>
<body>
    <div>
        <p>Poruka od: {{ $contactMessage->name ?? 'Nije navedeno' }}</p>
        <p>Posiljaocev mail: {{ $contactMessage->email }}</p>
        <p>Poruka:</p>
        <p>{{ $contactMessage->message }}</p>
    </div>

</body>
</html>