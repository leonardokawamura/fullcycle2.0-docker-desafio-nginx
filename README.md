<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/5429870/108547261-06064800-72c9-11eb-9de9-433bc8f3b68b.png">  
</div>
<br/>
<div align="center">

# CURSO FULLCYCLE 2.0 - DESAFIO DOCKER NGINX

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

</div>

O retorno da aplicação node.js para o nginx deverá ser:

&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;

\- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.