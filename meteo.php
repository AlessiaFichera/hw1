<?php
$apiKey = 'ef82e61afdbfcd94e362480cec6c3a17';
$lat = 37.589820;
$lon = 14.976828;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}&appid={$apiKey}&units=metric");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
header('Content-Type: application/json');
echo $result;

?>

