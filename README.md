# Projeto Wiki + Fórum

## Tema
Repositório/Wiki e fórum sobre conteúdos associados a disciplinas da Unicamp

## Ideia
A ideia do projeto é desenvolver uma plataforma que possibilite a publicação, manutenção e edição de páginas que contenham conteúdo multimídia oferecido normalmente em disciplinas e que possam ser criadas colaborativamente, inclusive pelos alunos. Adicionalmente, a plataforma irá conter um fórum simples que possibilite com que alunos publiquem dúvidas e respostas sobre os conteúdos englobados.

## Introdução
Para persistência de dados do nosso projeto, foi escolhido o SGDB PostgreSQL.

## Executando o projeto
Para executar o projeto localmente, é necessário que `docker` e `docker-compose` estejam instalados na máquina em questão. Assim, basta executar:
```
make up
```

Caso não possua permissões suficientes (embora não recomendado):
```
sudo make up
```

Para limpar qualquer registro e volumes instanciados pelo docker, execute:
```
make down
```

Ou, novamente:
```
sudo make down
```

## Integrantes

Caio Petrucci dos Santos Rosa, 248245
Gabriel Gardini, 246289
Luan Augusto Fazolin, 182236
Paulo Vinícius Pinto, 242863
Gustavo Eugenio John, 248318
