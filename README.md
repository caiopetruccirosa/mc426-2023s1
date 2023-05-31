# Projeto Wiki + Repo

## Tema
Repositório/Wiki e fórum sobre conteúdos associados a disciplinas da Unicamp

## Ideia
A ideia do projeto é desenvolver uma plataforma que possibilite a publicação, manutenção e edição de páginas que contenham conteúdo multimídia oferecido normalmente em disciplinas e que possam ser criadas colaborativamente, inclusive pelos alunos. Adicionalmente, a plataforma irá conter um fórum simples que possibilite com que alunos publiquem dúvidas e respostas sobre os conteúdos englobados.

## Integrantes

Caio Petrucci dos Santos Rosa, 248245
Gabriel Gardini, 246289
Luan Augusto Fazolin, 182236
Paulo Vinícius Pinto, 242863
Gustavo Eugenio John, 248318

# Diagrama arquitetural (C4 - Nível 3)

### Abaixo um diagrama em nível de componentes (C4 - Nível 3) para a arquitetura da aplicação.

![ texto](images/C4-A1-v1.drawio.png)

# Estilo arquitetural

### Para a nossa aplicação, adotamos principalmente o estilo MVC. O estilo MVC (Model-View-Controller) é baseado em uma divisão do sistema que estabelece uma View – que representa a interface exposta ao usuário –, um Model – que define a estrutura dos dados e cuida da lógica da aplicação – e um Controller, responsável por receber os inputs da View e direcioná-los ao Model, podendo também em alguns casos atualizar diretamente o que é exibido na View.

### Dito isso, entendemos que o MVC seria o mais razoável para nossa aplicação pois orienta a organização de nossos componentes de maneira que faz sentido: as interfaces tanto da Wiki quanto do Fórum atuam como a View, o Controller é representado pelo componente Rotas do back-end, enquanto os outros componentes do back-end juntos à atuação do banco de dados constituem o Model, visto que são diretamente responsáveis pela execução das ações e modificações dos dados na aplicação.

