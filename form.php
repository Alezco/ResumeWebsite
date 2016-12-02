<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$from = 'ResumeWebsite';
	$to = 'benjamin.morali@epita.fr';
	$subject = 'Message from Website';
	$body = "From: $firstname $lastname\nE-Mail: $email\nMessage:\n\n$message";

	if (!$_POST['firstname'])
		$errFirstname = 'Merci d\'entrer votre prénom<br>';
    if (!$_POST['lastname'])
		$errLastname = 'Merci d\'entrer votre nom<br>';
	if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
		$errEmail = 'Merci d\'entrer une adresse email valide<br>';
	if (!$_POST['message'])
		$errMessage = 'Merci d\'entrer votre message<br>';

	echo $errFirstname;
	echo $errLastname;
	echo $errEmail;
	echo $errMessage;
	
	$secretKey = '6LfLtAcUAAAAALgMGhsTXdHQbezlvXYZ_Oyqc3Ob';
	$ip = $_SERVER['REMOTE_ADDR'];
	$captcha = $_POST['g-recaptcha-response'];
	$response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$captcha.'&remoteip='.$ip);
	$responseKeys = json_decode($response, true);

	if (intval($responseKeys['success']) !== 1)
		$isOk = false;
	else
		$isOk = true;

	if (!$isOk)
		$errCaptcha = 'Merci de valider le captcha<br>';
	
	echo $errCaptcha;
	
    if (!$errFirstname && !$errLastName && !$errEmail && !$errMessage && $isOk) {
	    if (mail ($to, $subject, $body, $from))
		    $result='Mail envoyé!';
	    else
		    $result='Erreur dans l\'envoi du mail';
    }
	echo $result;
?>