<?php?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Cadastro/Login</title>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
  </style>
</head>

<body>
  <header id="cabecalho">
    <h1>Cadastro</h1>
  
    <nav id="menu-header">
      <a href=home.html>Home</a>
      <a href="index.html">Calculadora</a>
      <a href="carteira.html">Sua Carteira</a>
      <a href="login.html">Login</a>
    </nav>

  </header>
    
  <section class="section">
    <h2>Login</h2>
    <form action="home.html" method="POST"">
      
      <div class="input_box">
        <label for="nome">Nome :</label>
        <input type="text" id="nome" name="nome">
      </div>
      
      <div class="input_box">
        <label for="email">E-mail :</label>
        <input type="email" id="email" name="email">
      </div>

      <div class="input_box">
        <label for="senha">Senha :</label>
        <input type="password" id="pass" name="senha">
      </div>

      <button id="enviar">Enviar</button>
    </form>

  </section>
  <footer>
    <h3>&copy; Todos os direitos reservados</h3>
  </footer>
</body>

</html>

