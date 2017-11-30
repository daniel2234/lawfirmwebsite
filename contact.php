<?php


$to      = 'saron@saronpc.com';
$subject = 'saronpc.com - Contact Request';
$message = $_POST["content"];
$headers = 'From: '. $_POST["email"] . "\r\n" .
    'Reply-To: ' . $_POST["email"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo $_POST["email"] . " and " . $_POST["name"] . " and " . $_POST["content"];
?>