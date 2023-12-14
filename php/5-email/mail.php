<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $isFormValid = (
        $_POST["civilite"] !== null &&
        iconv_strlen($_POST["nom"]) > 2 &&
        iconv_strlen($_POST["prenom"]) &&
        filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) &&
        $_POST["password"] == $_POST["confirm_password"] &&
        isset($_POST["password"]) &&
        is_numeric($_POST["zip"]) && iconv_strlen($_POST["zip"]) >= 5
    );

    if ($isFormValid) {
        header("Location: ./yo.html");
        require 'vendor/autoload.php';
        $mail = new PHPMailer(true);
        try {
            $htmlTable = 'Bonjour '. $_POST["civilite"] . ' ' . $_POST['nom'] . ' ' . $_POST['prenom'] . ', merci votre message a été envoyé.';

            $mail = new PHPMailer(true);
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'valentin78.massonniere@gmail.com';
            $mail->Password = 'lurw vayj agwb ziqg';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;
            $mail->setFrom('valentin78.massonniere@gmail.com', 'Valentin Massonnière');
            $mail->addAddress($_POST["email"]);
            $mail->addReplyTo('valentin78.massonniere@gmail.com', 'Valentin Massonnière');
            $mail->isHTML(true);
            $mail->Subject = 'Reception';
            $mail->Body = $htmlTable;
            $mail->AltBody = $htmlTable;
            $mail->CharSet = 'UTF-8';

            $mail->send();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Erreur dans les données du formulaire";
    }
}
?>
