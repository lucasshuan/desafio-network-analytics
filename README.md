Desafio semanal no servidor <b>Spacelaxy</b> 02/13/2024</br>
https://discord.gg/e8bj7vG4

## Desafio

- <b>Back End - Network Analytics</b> - Este desafio vai muito mais além do CRUD, desas vez bora focar em criar um backend especializado em estatísticas. A ideia é analisar moedas virtuais e destacar as melhores. As moedas devem mudar de valor a cada 5 minutos, e o sistema deve comparar elas pra dizer qual a melhor atualmente. Se quiser mais desafio, compare várias moedas de uma vez! Além disso, implemente um sistema que retorne um log completo de estatísticas para cada moeda. Ao chamar /moeda/stats, a resposta deve ser assim: { time: { valorAtual: valorAtual, valorAnterior: valorAnterior } }, quer mais desafio? Faz uma task que dispara um evento de alerta assim que a moeda tiver uma mudanca muito brusca de valor!

## Observação

A API foi feita em menos de 2 horas e o resultado final acabou ficando ultra simplificado. Moedas mudam de valor a cada 5 minutos e as alterações são jogadas em uma tabela, como pedido.

## Como testar

1. Iniciar o Docker:
```bash
    docker-compose up -d
```

2. Instalar dependências:
```bash
    npm i
```

3. Executar migrações do Prisma:
```bash
    npm run migrate
```

4. Iniciar servidor:
```bash
    npm run dev
```

## Rotas

`GET  /currency`</br>
Busca todas as moedas</br></br>
`POST /currency`</br>
Cria uma nova moeda `{ name, value, fluctuationRate }`</br></br>
`GET  /currency/:moeda/logs`</br>
Busca todo o histórico de alterações das moedas</br></br>
`GET  /log`</br>
Busca histórico de flutuações em todas as moedas</br></br>
