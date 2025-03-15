<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstName = htmlspecialchars($_POST['firstName']);
  $lastName = htmlspecialchars($_POST['lastName']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Save to database or send email (example: save to a text file)
  $file = fopen("contact-submissions.txt", "a");
  fwrite($file, "Name: $firstName $lastName\nEmail: $email\nMessage: $message\n\n");
  fclose($file);

  echo "<p>Thank you, $firstName! Your message has been sent.</p>";
}
?>
