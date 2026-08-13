# Integração Multi-Fonte: Gasto, Leads e Orçamento por Canal

## Sobre o projeto
Dashboard que integra 3 fontes de dados diferentes (CSV, MongoDB, Excel) 
para calcular CAC (Custo de Aquisição de Cliente) por canal de marketing, 
simulando um cenário real de coleta de dados de sistemas heterogêneos.

## Fontes de dados
- **CSV**: gasto por campanha (200 mil registros, Kaggle)
- **MongoDB**: coleção de leads simulando CRM (30 mil documentos, 
  exportados via MongoDB Compass)
- **Excel**: orçamento planejado por canal (simulando input do time de Finanças)

## Processo técnico
- Agregação de cada fonte por canal antes da mesclagem, evitando erro de 
  fan-out (explosão de linhas por junção em granularidades diferentes)
- Mesclagem via Power Query (Merge Queries, Left Outer Join)
- Medida DAX de CAC cruzando gasto (fonte 1) com conversões reais (fonte 2)

## Limitações conhecidas 
- Os leads foram gerados de forma independente do volume real de campanhas, 
  então o CAC resultante não reflete uma proporção realista de mercado — 
  mas a metodologia de cálculo é a mesma aplicável a dados de mesma origem/escala
- A medida de "Aderência ao Orçamento" foi implementada mas não exibida no 
  dashboard, pois o orçamento (escala de operação pequena) e o gasto real 
  (escala de dataset sintético de 200 mil linhas) não têm relação de 
  proporção válida entre si
