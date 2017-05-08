<?php

header('Content-type: application/json');

$errors = '';

if (empty($errors)) {
	$from_name = $_POST['name'];
	$from_email = $_POST['email'];
	$message = $_POST['message'];

	$to_email = 'benjamin.morali@epita.fr';

	$contact = "Name: $from_name \nEmail: $from_email \n\n";
	$content = $message;

	$email_subject = 'Message from website';
	$email_body = "$contact$content";

	$headers .= 'MIME-Version: 1.0\r\n';
	$headers .= 'Content-Type: text/html; charset=ISO-8859-1\r\n';
	$headers .= "Reply-To: $from_email";

  mail($to_email, $email_subject, $email_body, $headers);
	$response_array['status'] = 'success';
	echo json_encode($response_array);
}
else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}
