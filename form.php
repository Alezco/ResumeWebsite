<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = 'Benjamin_Website';
	$to = 'benjamin.morali@epita.fr';
	$subject = 'Message from Website';
	$body = "From: $firstname $lastname\n E-Mail: $email\n Message:\n $message";

	if (!$_POST['firstname'])
		$errFirstname = 'Merci d\'entrer votre prénom';
    if (!$_POST['lastname'])
		$errLastname = 'Merci d\'entrer votre nom';
	if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
		$errEmail = 'Merci d\'entrer une adresse email valide';
	if (!$_POST['message'])
		$errMessage = 'Merci d\'entrer votre message';

	echo $errFirstname;
	echo $errLastName;
	echo $errEmail;
	echo $errMessage;

    if (!$errName && !$errEmail && !$errMessage) {
	    if (mail ($to, $subject, $body, $from))
		    $result='Success!';
	    else
		    $result='Error';
    }
	echo $result;
?>