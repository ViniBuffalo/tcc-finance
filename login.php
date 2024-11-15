<?php

include "conexao.php";

$email = $_POST["email"];
$senha = $_POST["senha"];

if (($email=="") || ($senha=="")) {
    echo "<script>alert('Campos nao podem ser vazios!!!');history.go(-1);</script>";
} else {
    if(mb_strlen($senha) < 8) {
        echo "<script>alert('A senha PRECISA conter 8 ou MAIS caracteres!!!');history.go(-1);</script>";
    } else {
    try{
    
        $usuarioTable = $conn->prepare('SELECT * FROM clientes WHERE email = :email AND senha = :senha');
    
        $usuarioTable->execute(array(
        ':email' => $email,
        ':senha' => $senha
        ));
        if ($usuarioTable->rowCount()==1){
            echo "<script>alert('Logado com sucesso!!!');history.go(-1)</script>";
            //header('Location: home.html');
        } else {
            echo "<script>alert('Erro ao incluir');history.go(-1);</script>";
        }
    
    } catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }
    }
   }
    

?>