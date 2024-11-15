<?php
$servidor='localhost';
$db = "leads_tccfinance";
$user = 'leads_tccfinance';
$pass = 'santosdouradobuffalo'; 

try {
  // $conn - é a variável que irá receberos dados da conexão ao Banco de dados No caso do exemplo um servidor MySQL
  $conn = new PDO('mysql:host='.$servidor.';dbname='.$db ,  $user, $pass);
  echo "Conectado com sucesso!!!";

} catch (PDOException $e) {
    echo 'Erro número : ' . $e->getMessage();
}
?>