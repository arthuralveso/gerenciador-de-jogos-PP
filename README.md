O projeto trata-se de um gerenciador de jogos, e desenvolvido para a disciplina de "Praticas de Programação" da faculdade Unifacisa. 

Para rodar a aplicação é necessário ter o Node.js e o yarn ou npm instalado na sua máquina.

# Back-end

Back-end foi desenvolvido utilizando Node.js, express, Knex e sqlite. Para testar as requisições utilizei o Insomnia.

Dentro da pasta do projeto você pode rodar:

### `yarn start`

A aplicação abrirá em: [http://localhost:3333](http://localhost:3333)


# Front-end

O Front-end foi desenvolvido utilizando React com o uso das bibliotecas: react-router-dom e react-icons.

## Scripts

Dentro da pasta do projeto você pode rodar:

### `yarn start`

A aplicação abrirá em: [http://localhost:3000](http://localhost:3000)

### Uso

A aplicação trata-se de um CRUD(create, read, update, delete) simples, que ao roda-la poderemos acessar as rotas:

 - **/games** que listará todos os jogos cadastrados no banco de dados;
 - **/details/:id** que apresentará mais detalhes do jogo, ao ser clicado;
 - **/details/edit/:id** que contem um formulário para editar as informações do jogo;
 - **/create** que contem o formulário para a criação de novos jogos.




