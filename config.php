<?php
  define('HOST', 'localhost');
  define('USER', 'root');
  define('PASS', '');
  define('BASE', 'cadastro');

  $conn = new mysqli(HOST, USER, PASS, BASE);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
