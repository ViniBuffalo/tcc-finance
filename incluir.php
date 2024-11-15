<?php

include "conexao.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];
if (($nome=="") || ($email=="") || ($senha=="")){
    echo "<script>alert('Campos nao podem ser vazios!!!');history.go(-1);</script>";
} else {
if(mb_strlen($senha) < 8) {
    echo "<script>alert('A senha PRECISA conter 8 ou MAIS caracteres!!!');history.go(-1);</script>";
} else {
try{

    $usuarioTable = $conn->prepare('INSERT INTO clientes (nome, email, senha) VALUES 
    (:nome, :email, :senha)');

    $usuarioTable->execute(array(
    ':nome' => $nome,
    ':email' => $email,
    ':senha' => $senha
    ));
    if ($usuarioTable->rowCount()==1){
        echo "<script>alert('Cadastrado com SUCESSO!!!');history.go(-1)</script>";   
        // header('Location: home.html');
    } else {
        echo "<script>alert('Erro ao CADASTRAR!!');history.go(-1);</script>";
    }

} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}
}
}

?>