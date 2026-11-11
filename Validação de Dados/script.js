const nome = String(req.body.nome || '').trim(); //converte o valor do req.body pra STRING, caso o dado vindo não seja valido ele deixa vazio
//.trim() remove os espaços do começo e do final, evitando inserir valores com espaços
const matricula = String(req.body.matricula || '').trim();

if (!nome || !matricula || nome.length > 120 || matricula.length > 30){
    /* se nome não for valido OU matricula não for valido OU nome tiver mais que 120 caracteres OU matricula tiver mais que 30 caractres */
    return res.status(400).json({ //retorna o status 400 e uma mensagem no formato json via res (response)
        erro: 'Informe nome e matrícula válidos.'
    });
}

/* isso deve ser feito pois o HTML pode ser contronado e usuarios maleficos podem se aproveitar disso
Segurança nunca é demais */