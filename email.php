<?php
if(isset($_POST['name'])) {
$to = "frank@interiorera.ca";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$message = $_POST['message'];
$service = $_POST['service'];
$contact = $_POST['contact'];

$subject = "interiorera.ca Message from $email_field";

$body = "From: $name_field\nE-Mail: $email_field\nService: $service\nWhen contact: $contact\nsMessage:\n$message";
 
echo "Data has been submitted to $to!";
mail($to, $subject, $body);
} else {
echo $_POST['name'];
echo $_POST['email'];
}
?>

<!--$to = "frank.interiorera@gmail.com";-->