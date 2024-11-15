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