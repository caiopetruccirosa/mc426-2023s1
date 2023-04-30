# Projeto Wiki + Fórum

## Tema
Repositório/Wiki e fórum sobre conteúdos associados a disciplinas da Unicamp

## Ideia
A ideia do projeto é desenvolver uma plataforma que possibilite a publicação, manutenção e edição de páginas que contenham conteúdo multimídia oferecido normalmente em disciplinas e que possam ser criadas colaborativamente, inclusive pelos alunos. Adicionalmente, a plataforma irá conter um fórum simples que possibilite com que alunos publiquem dúvidas e respostas sobre os conteúdos englobados.

## Introdução
Para persistência de dados do nosso projeto, foi escolhido o SGDB PostgreSQL. Assim, visando uma maior facilidade na execução de testes manuais, o arquivo `docker-compose.yaml` presente na raiz do projeto permite a criação de uma instância do banco com as tables já inicializadas.

Assim, para iniciar o banco:

1. Defina as variáveis de ambiente para autenticação e criação do db:
```bash
export POSTGRES_PASSWORD=example
export POSTGRES_USER=postgres
export POSTGRES_DB=postgres
```

2. Inicialize o banco com docker-compose:
```bash
docker-compose up
```
ou 
```bash
docker compose up
```

3. Acesse o banco através da porta 5432. Segue o exemplo com `psql`:
```bash
psql -h localhost -p 5432 -U postgres -d postgres
```

4. Ao fim dos testes, não esqueça de deletar os volumes criados:
```bash
docker-compose down --volumes
```

## Integrantes

Caio Petrucci dos Santos Rosa, 248245
Gabriel Gardini, 246289
Luan Augusto Fazolin, 182236
Paulo Vinícius Pinto, 242863
Gustavo Eugenio John, 248318
