// "As contas do seu bar": two worked examples (illustrative, assumed values) and a loss calculator.
// Example 1: 2 cl over-pour × 40 gins/day × 30 days = 24 L ≈ 34 bottles of 70 cl → ~400–600 €/month at 12–17.50 €/bottle.
// Example 2: 200 guests/day (assumed) × 1 in 5 × one extra 10 € drink = 400 €/day → 12,000 €/month, 72,000 € over 180 days.
export const money = {
 pt:{
  label:'AS CONTAS DO SEU BAR', title:'Pequenas fugas.<br><em>Muito dinheiro ao fim do ano.</em>',
  intro:'Dois exemplos com números redondos. Mude os valores na calculadora e veja as contas do seu bar.',
  examples:[
   {name:'Uma dose a mais no gin',lines:['2 cl a mais por gin × 40 gins por dia × 30 dias = 24 litros por mês','24 litros são cerca de 34 garrafas de 70 cl','A 12 € a 17,50 € por garrafa, só em custo de produto'],result:'400&nbsp;€ a 600&nbsp;€ por mês',sub:'4.800&nbsp;€ a 7.200&nbsp;€ por ano, sem vender nem mais uma bebida.'},
   {name:'1 em cada 5 hóspedes com mais uma bebida',lines:['200 hóspedes por dia (valor assumido) × 1 em cada 5 = 40 bebidas a mais por dia','40 bebidas × 10 € = 400 € por dia','400 € × 30 dias'],result:'12.000&nbsp;€ por mês',sub:'72.000&nbsp;€ numa época de 180 dias, em faturação antes de custos. É o efeito de uma recomendação bem feita.'}
  ],
  note:'Exemplos ilustrativos com valores assumidos. Não são resultados de clientes.',
  calcTitle:'Faça as contas com os números do seu bar',
  labels:['Bebidas com destilado por dia','Dose a mais por bebida (cl)','Custo da garrafa de 70 cl (€)','Hóspedes por dia','Hóspedes que pedem mais 1 bebida (%)','Preço da bebida extra (€)','Dias de operação por mês','Dias de época'],
  outputs:['Dose a mais, por mês','Vendas por recomendação, por mês','Total por mês','Total na época'],
  formula:'Dose a mais: bebidas por dia × cl a mais ÷ 70 × custo da garrafa × dias. Recomendação: hóspedes por dia × % × preço × dias. A dose a mais é custo de produto; a recomendação é faturação antes de custos.',
  invalid:'Verifique os valores: números positivos, percentagem até 100 e até 31 dias por mês.',
  cta:'Pedir disponibilidade para o meu hotel'
 },
 es:{
  label:'LAS CUENTAS DE SU BAR', title:'Pequeñas fugas.<br><em>Mucho dinero a final de año.</em>',
  intro:'Dos ejemplos con números redondos. Cambie los valores en la calculadora y vea las cuentas de su bar.',
  examples:[
   {name:'Una dosis de más en el gin',lines:['2 cl de más por gin × 40 gins al día × 30 días = 24 litros al mes','24 litros son unas 34 botellas de 70 cl','A 12 € – 17,50 € por botella, solo en coste de producto'],result:'De 400&nbsp;€ a 600&nbsp;€ al mes',sub:'De 4.800&nbsp;€ a 7.200&nbsp;€ al año, sin vender ni una bebida más.'},
   {name:'1 de cada 5 huéspedes con una bebida más',lines:['200 huéspedes al día (valor supuesto) × 1 de cada 5 = 40 bebidas más al día','40 bebidas × 10 € = 400 € al día','400 € × 30 días'],result:'12.000&nbsp;€ al mes',sub:'72.000&nbsp;€ en una temporada de 180 días, en facturación antes de costes. Es el efecto de una buena recomendación.'}
  ],
  note:'Ejemplos ilustrativos con valores supuestos. No son resultados de clientes.',
  calcTitle:'Haga las cuentas con los números de su bar',
  labels:['Bebidas con destilado al día','Dosis de más por bebida (cl)','Coste de la botella de 70 cl (€)','Huéspedes al día','Huéspedes que piden 1 bebida más (%)','Precio de la bebida extra (€)','Días de operación al mes','Días de temporada'],
  outputs:['Dosis de más, al mes','Ventas por recomendación, al mes','Total al mes','Total en la temporada'],
  formula:'Dosis de más: bebidas al día × cl de más ÷ 70 × coste de la botella × días. Recomendación: huéspedes al día × % × precio × días. La dosis de más es coste de producto; la recomendación es facturación antes de costes.',
  invalid:'Revise los valores: números positivos, porcentaje hasta 100 y hasta 31 días al mes.',
  cta:'Consultar disponibilidad para mi hotel'
 },
 en:{
  label:'YOUR BAR IN NUMBERS', title:'Small leaks.<br><em>Serious money by year end.</em>',
  intro:'Two examples with round numbers. Change the values in the calculator to see your own bar.',
  examples:[
   {name:'One extra measure in every gin',lines:['2 cl over per gin × 40 gins a day × 30 days = 24 litres a month','24 litres is about 34 bottles of 70 cl','At €12 to €17.50 a bottle, in product cost alone'],result:'€400 to €600 a month',sub:'€4,800 to €7,200 a year, without selling a single extra drink.'},
   {name:'1 in 5 guests orders one more drink',lines:['200 guests a day (assumed) × 1 in 5 = 40 extra drinks a day','40 drinks × €10 = €400 a day','€400 × 30 days'],result:'€12,000 a month',sub:'€72,000 over a 180-day season, in revenue before costs. That is what a good recommendation does.'}
  ],
  note:'Illustrative examples with assumed values. They are not client results.',
  calcTitle:'Run the numbers for your bar',
  labels:['Spirit drinks per day','Extra pour per drink (cl)','Cost of a 70 cl bottle (€)','Guests per day','Guests ordering 1 more drink (%)','Price of the extra drink (€)','Operating days per month','Days in the season'],
  outputs:['Over-pouring, per month','Sales from recommendation, per month','Total per month','Total for the season'],
  formula:'Over-pouring: drinks per day × extra cl ÷ 70 × bottle cost × days. Recommendation: guests per day × % × price × days. Over-pouring is product cost; recommendation is revenue before costs.',
  invalid:'Check the values: positive numbers, a percentage up to 100 and up to 31 days a month.',
  cta:'Check availability for my hotel'
 }
};
