 // Carregar o Google Charts
 google.charts.load('current', {packages: ['corechart', 'line']});
        
 let chartData; // Variável global para armazenar os dados do gráfico
 
 // Função que é chamada quando o botão é clicado
 function calculateAndDraw() {
     const value = +document.getElementById('value').value;
     const fee = (+document.getElementById('fee').value) / 100;
     const time = (+document.getElementById('time').value);
     const pmt = +document.getElementById('aportes').value;
     const N = 12; // Número de vezes que o juro é capitalizado por ano

     // Criação da DataTable para armazenar os dados do gráfico
     let data = new google.visualization.DataTable();
     data.addColumn('number', 'Mês');
     data.addColumn('number', 'Valor Acumulado');

     let total = value; 
     let rows = []; 

     for (let period = 1; period <= N * time; period++) {
         total *= (1 + fee / N);
         total += pmt;

         // Adiciona o mês e o valor acumulado à lista de linhas
         rows.push([period, total]);
     }

     // Adiciona as linhas à DataTable
     data.addRows(rows);

     // Atualiza o valor total exibido
     document.getElementById('total').innerHTML = "R$ " + total.toFixed(2).replace('.', ',');

     // Atualiza a variável global com os novos dados
     chartData = data;

     // Desenha o gráfico com os novos dados
     drawChart();
 }

 // Função para desenhar o gráfico
 function drawChart() {
     var options = {
         hAxis: {
             title: 'Ano',
             ticks: [], // Inicialmente vazio, vamos adicionar os ticks manualmente
             slantedText: true, // Rotaciona os rótulos para melhorar a visibilidade
             slantedTextAngle: 45, // Ângulo de rotação dos rótulos
             textStyle: {fontSize: 12} // Tamanho da fonte dos rótulos
         },
         vAxis: {
             title: 'Valor Acumulado'
         },
         height: 600 // Altura do gráfico
     };

     // Adiciona ticks para cada ano com base no período
     let years = [];
     for (let i = 0; i <= chartData.getNumberOfRows(); i += 12) { // Adiciona um tick a cada 12 meses
         let year = Math.floor(i / 12); // Converte meses para anos
         years.push({v: i, f: (i === 0 ? 'Início' : year + ' anos')});
     }
     options.hAxis.ticks = years;

     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

     chart.draw(chartData, options);
 }

 // Configura a função de desenho do gráfico quando o Google Charts está carregado
 google.charts.setOnLoadCallback(() => {
     document.getElementById('calculate').addEventListener('click', calculateAndDraw);
 });

/*
    Coisas que poderão ser adicionadas ao projeto:

    - Adicionar um botão para calcular o valor futuro do investimento
    - Adicionar gráficos para visualizar o crescimento do valor futuro
    - Sua carteira: Adicionar o gráfico de divisão orçamentaria 
    - Sua carteira: Adicionar o gráfico de diversificação de investimentos
    // - Sua carteira: Adicionar um gerenciamento na diversificação, onde mostra o quanto deve ser comprado/vendido em cada setor da carteira
    // - Login: Integrar backend para fazer cadastros de usuários e login
    - Dashboard: Importar APIs que retornam dados sobre o investimentos
    - Dashboard: Importar APIs de noticias do mercado financeiro 
    // - Dashboard: Adicionar mecanismo de amizades para compartilhar aplicações e investimentos
    // - Dashboard: Analise Fundamentalista de ações
    - TCC: Adicionar um local onde estará disponivel toda a pesquisa realizada no TCC

nossa xave 48Z90F65PVBS5N01

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Renda Fixa com Gráfico</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        // Carrega o Google Charts
        google.charts.load('current', {'packages':['corechart']});

        function drawChart(data) {
            var chartData = new google.visualization.DataTable();
            chartData.addColumn('number', 'Ano');
            chartData.addColumn('number', 'Valor Futuro');

            // Adiciona dados ao gráfico
            chartData.addRows(data);

            var options = {
                title: 'Valor Futuro do Investimento ao Longo dos Anos',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
            chart.draw(chartData, options);
        }

        function calculateAndDrawChart() {
            const value = +document.getElementById('value').value;
            const fee = (+document.getElementById('fee').value) / 100;
            const time = (+document.getElementById('time').value);
            const pmt = +document.getElementById('aportes').value;
            const N = 12; // número de vezes que o juro é capitalizado por ano

            // Calcula o valor futuro para cada ano
            let data = [];
            for (let i = 1; i <= time; i++) {
                const total = value * Math.pow(1 + fee/N, N*i);
                const aportesTotal = pmt * ((Math.pow(1 + fee/N, N*i) - 1) / (fee/N));
                const valorFuturo = total + aportesTotal;
                data.push([i, valorFuturo]);
            }

            // Desenha o gráfico
            google.charts.setOnLoadCallback(() => drawChart(data));

            // Exibe o valor futuro do último ano
            const lastYearValue = data[data.length - 1][1];
            document.getElementById('valorFuturo').innerHTML = "R$ " + lastYearValue.toFixed(2).replace('.', ',');
        }
    </script>
</head>
<body>
    <h1>Calculadora de Renda Fixa com Gráfico</h1>
    <form>
        <label for="value">Valor Inicial (R$):</label>
        <input type="number" id="value" step="0.01" required><br>
        <label for="fee">Taxa de Juros Anual (%):</label>
        <input type="number" id="fee" step="0.01" required><br>
        <label for="time">Número de Anos:</label>
        <input type="number" id="time" required><br>
        <label for="aportes">Aportes Mensais (R$):</label>
        <input type="number" id="aportes" step="0.01" required><br><br>
        <button type="button" id="calculate">Calcular e Mostrar Gráfico</button>
    </form>
    <div id="valorFuturo"></div>
    <div id="curve_chart" style="width: 900px; height: 500px;"></div>
</body>
</html>

*/
