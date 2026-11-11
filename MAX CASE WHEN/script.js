/* SELECT 
  Vendedor,
  
  -- Coluna para as Camisetas
  MAX(CASE WHEN Produto = 'Camiseta' THEN Valor_Vendido ELSE NULL END) AS Total_Camisetas,
  
  -- Coluna para as Calças
  MAX(CASE WHEN Produto = 'Calça' THEN Valor_Vendido ELSE NULL END) AS Total_Calcas,
  
  -- Coluna para os Tênis
  MAX(CASE WHEN Produto = 'Tênis' THEN Valor_Vendido ELSE NULL END) AS Total_Tenis

FROM Vendas
GROUP BY Vendedor; */

/* --------------------------------------------------------------------------------------- */

/* SELECT Vendedor: Define que queremos ver o nome do vendedor. Ele será a nossa "âncora".

CASE WHEN Produto = 'Camiseta' THEN Valor_Vendido ELSE NULL END: É a triagem. Ele diz: "Se nessa linha o produto for Camiseta, pegue o valor (ex: 50). Se não for, deixe Vazio (NULL)".

MAX(...): É a nossa "prensa". Ele envolve o CASE WHEN para pegar o resultado da triagem e esmagar tudo, ignorando os espaços vazios (NULL) e salvando apenas o número que interessa.

AS Total_Camisetas: Apenas dá um nome bonito para a nova coluna que criamos.

FROM Vendas: Diz que estamos lendo os dados da tabela chamada Vendas.

GROUP BY Vendedor: O comando final que diz: "Junte todas as linhas que têm o mesmo nome de Vendedor em uma linha só". */

/* ---------------------------------------------------------------------- */

/* SOME: notas.some(n => n === null);

REDUCE: notas.reduce((soma, n) => soma + Number(n), 0);*/