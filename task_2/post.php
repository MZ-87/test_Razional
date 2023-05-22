<?php
// Получаем значения переменных из пришедших данных
$index = $_POST['index'];
$country = $_POST['country'];
$region = $_POST['region'];
$city = $_POST['city'];
$street = $_POST['street'];
$home_number = $_POST['home_number'];

// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "Индекс: $index \nСтрана: $country \nОбласть: $region \nГород: $city \nУлица: $street \nДом: $home_number";
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
$send = mail($email, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
// Если отправка прошла успешно — так и пишем
if ($send == 'true') {echo "Сообщение отправлено";}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo "Ошибка, сообщение не отправлено";}
?>