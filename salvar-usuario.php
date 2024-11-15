<?php
// Inclui o arquivo de conexão com o banco de dados
  switch ($_REQUEST['acao']) {
    case 'cadastrar':
      $nome = $_POST['nome'];
      $email = $_POST['email'];
      $senha = $_POST['senha'];

      $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

      $res = $conn->query($sql);
      break;
  }
$conn->close();
?>