<?php
  $destino = "info@osmofil.com";
  $nombre = $_POST["nombre"];
  $numero = $_POST["tel"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $contenido = "Nombre: ".$nombre."\nEmail: ".$email."\nMensaje: ".$message;
  mail($destino, $numero, $contenido);
  header("Location:gracias.html")
?>
