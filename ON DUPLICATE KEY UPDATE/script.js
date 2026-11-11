"INSERT INTO notas (aluno_id, disciplina_id, ano, trimestre, nota) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE nota = VALUES(nota);"

/* Insira dentro de notas (aluno_id, disciplina_id, ano, trimestre, nota), MAS caso a combinação inserida já exista no banco
ele apenas atualiza o valor em vez de dar erro  */