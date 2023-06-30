import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import UserContext from "./UserContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Login from "./Login";
import Home from "./Wiki";
import Info from "./Info";
import Menu from "./Menu";


function App() {



  const description102 = `# MC102: Algoritmos e Lógica de Programação

  ![MC102](https://example.com/mc102.jpg)
  
  ## Introdução
  
  MC102 é uma disciplina fundamental para os estudantes de Ciência da Computação e Engenharia de Computação. Ela aborda os conceitos de algoritmos e lógica de programação, fornecendo uma base sólida para o desenvolvimento de habilidades essenciais no campo da computação.
  
  ## Objetivos
  
  O principal objetivo de MC102 é introduzir os alunos ao mundo da programação, ensinando-os a projetar e implementar algoritmos eficientes. Além disso, a disciplina visa desenvolver a capacidade de análise e solução de problemas, aplicando conceitos de lógica e estruturas de dados.
  
  ## Conteúdo do curso
  
  Durante o curso de MC102, os alunos são expostos a uma variedade de tópicos relacionados à programação e à lógica de algoritmos. Alguns dos principais temas abordados incluem:
  
  1. **Introdução à programação**: Os alunos são apresentados a conceitos básicos de programação, como variáveis, estruturas de controle de fluxo (condicionais e loops) e funções.
  
  2. **Estruturas de dados**: São estudadas estruturas de dados fundamentais, como arrays, listas, pilhas e filas, e como utilizá-las de forma eficiente em algoritmos.
  
  3. **Algoritmos de busca e ordenação**: Os alunos aprendem a projetar algoritmos eficientes para buscar e ordenar informações em diferentes estruturas de dados.
  
  4. **Recursão**: É abordado o conceito de recursão e como utilizá-lo na resolução de problemas.
  
  5. **Análise de complexidade**: Os alunos aprendem a avaliar a eficiência de algoritmos por meio da análise de complexidade, considerando fatores como tempo de execução e consumo de recursos.
  
  6. **Programação orientada a objetos**: Introdução aos princípios da programação orientada a objetos, incluindo conceitos como classes, objetos, herança e polimorfismo.
  
  ## Metodologia de ensino
  
  MC102 combina aulas teóricas com aulas práticas em laboratório. Durante as aulas teóricas, os conceitos são apresentados e discutidos, fornecendo uma base teórica sólida. Já nas aulas práticas, os alunos têm a oportunidade de aplicar o conhecimento adquirido por meio de exercícios e projetos práticos.
  
  Além disso, os alunos também são incentivados a participar de atividades extracurriculares, como competições de programação, que ajudam a desenvolver suas habilidades de resolução de problemas e aprimorar sua criatividade.
  
  ## Avaliação
  
  A avaliação em MC102 geralmente envolve a realização de exercícios práticos, projetos individuais ou em grupo, e provas teóricas. Os exercícios práticos e projetos têm o objetivo de verificar a capacidade do aluno de implementar algoritmos corretos e eficientes, enquanto as provas teóricas avaliam a compreensão dos conceitos fundamentais.
  
  ## Conclusão
  
  MC102 desempenha um papel fundamental na formação dos estudantes de Ciência da Computação e Engenh`
  const description202 = `# MC202: Estrutura de Dados
  
  ![MC202](https://example.com/mc202.jpg)
  
  ## Introdução
  
  MC202 é uma disciplina essencial para os estudantes de Ciência da Computação e Engenharia de Computação. Ela tem como foco o estudo das estruturas de dados, que são fundamentais para o desenvolvimento de algoritmos eficientes e organização de informações.
  
  ## Objetivos
  
  O principal objetivo de MC202 é proporcionar aos alunos um conhecimento aprofundado sobre as estruturas de dados mais comuns e suas aplicações. Além disso, a disciplina busca desenvolver habilidades de análise e escolha adequada das estruturas de dados para solucionar problemas computacionais.
  
  ## Conteúdo do curso
  
  Durante o curso de MC202, os alunos são apresentados a uma variedade de estruturas de dados e suas características. Alguns dos principais tópicos abordados incluem:
  
  1. **Listas lineares**: Estudo de estruturas de dados como listas, pilhas e filas, com ênfase em suas operações e implementações.
  
  2. **Árvores**: Introdução às árvores binárias, árvores balanceadas (como árvores AVL e árvores rubro-negras) e árvores B, explorando suas propriedades e aplicações.
  
  3. **Grafos**: Compreensão dos conceitos de grafos, representação de grafos e algoritmos relacionados a grafos, como busca em profundidade, busca em largura e algoritmos de caminho mínimo.
  
  4. **Tabelas de dispersão**: Estudo das tabelas de dispersão (hash tables) e suas operações, incluindo colisões, resolução de colisões e técnicas de hashing.
  
  5. **Algoritmos de ordenação**: Exploração de algoritmos de ordenação, como mergesort, quicksort, heapsort e radix sort, e análise de sua eficiência.
  
  6. **Estruturas de dados avançadas**: Introdução a estruturas de dados mais complexas, como heaps, árvores de segmentos e tries, e suas aplicações específicas.
  
  ## Metodologia de ensino
  
  MC202 utiliza uma combinação de aulas teóricas e práticas para promover a compreensão dos conceitos e a aplicação das estruturas de dados. Durante as aulas teóricas, os fundamentos teóricos são explicados, enquanto nas aulas práticas os alunos têm a oportunidade de implementar e testar as estruturas de dados aprendidas.
  
  Além disso, são propostos exercícios e projetos para que os alunos possam aprofundar seus conhecimentos e aplicar as estruturas de dados em problemas reais. A participação ativa em atividades práticas é incentivada para fortalecer o entendimento dos conceitos e desenvolver habilidades de resolução de problemas.
  
  ## Avaliação
  
  A avaliação em MC202 pode incluir a realização de exercícios práticos, implementação de projetos, provas teóricas e participação em discussões em sala de aula. Os exercícios e projetos visam avaliar a capacidade dos alunos de aplicar as estruturas de dados em diferentes contextos e solucionar problemas específicos.
  
  ## Conclusão
  
  MC`
  const description322 = `# MC322: Programação Orientada a Objetos
  
  ![MC322](https://example.com/mc322.jpg)
  
  ## Introdução
  
  MC322 é uma disciplina essencial para os estudantes de Ciência da Computação e Engenharia de Computação. Ela tem como objetivo principal introduzir os conceitos e princípios da Programação Orientada a Objetos (POO), proporcionando uma base sólida para o desenvolvimento de software modular, flexível e reutilizável.
  
  ## Objetivos
  
  O principal objetivo de MC322 é fornecer aos alunos um entendimento profundo dos princípios da POO e capacitá-los a projetar e implementar sistemas orientados a objetos de qualidade. A disciplina visa desenvolver habilidades de modelagem, abstração, encapsulamento, herança e polimorfismo, essenciais para a construção de software robusto e de fácil manutenção.
  
  ## Conteúdo do curso
  
  Durante o curso de MC322, os alunos são apresentados a uma variedade de tópicos relacionados à programação orientada a objetos. Alguns dos principais tópicos abordados incluem:
  
  1. **Conceitos fundamentais**: Introdução aos conceitos básicos da POO, como classes, objetos, atributos, métodos, encapsulamento, herança e polimorfismo.
  
  2. **Princípios de design orientado a objetos**: Exploração de princípios de design, como coesão, baixo acoplamento, reusabilidade e modularidade, e como aplicá-los na criação de sistemas orientados a objetos.
  
  3. **Relacionamentos entre classes**: Estudo dos diferentes tipos de relacionamentos entre classes, como associação, composição e herança, e como utilizá-los para modelar e representar sistemas complexos.
  
  4. **Tratamento de exceções**: Aprendizado sobre o tratamento de exceções e como lidar com erros e situações imprevistas durante a execução de programas orientados a objetos.
  
  5. **Padrões de projeto**: Introdução a padrões de projeto, como Singleton, Observer, Factory, entre outros, que oferecem soluções recorrentes para problemas de design em sistemas orientados a objetos.
  
  6. **Testes e depuração**: Exploração de técnicas de teste de software, incluindo testes unitários e testes de integração, bem como estratégias de depuração para identificar e corrigir erros em programas orientados a objetos.
  
  ## Metodologia de ensino
  
  MC322 combina aulas teóricas com atividades práticas para promover a compreensão e aplicação dos conceitos de programação orientada a objetos. Durante as aulas teóricas, os princípios e conceitos são explicados, enquanto as atividades práticas envolvem a implementação de sistemas orientados a objetos e a resolução de problemas de programação.
  
  Os alunos são incentivados a desenvolver projetos individuais e em grupo, onde podem aplicar os conhecimentos adquiridos e aprimorar suas habilidades de análise, design e implementação de software orientado a objetos.
  
  ## Avaliação
  
  A avaliação em MC322 pode incluir a realização de projetos individuais ou em grupo, exercícios práticos, provas teóricas e participação em atividades de laboratório. Os projetos e exercícios visam avaliar a capacidade dos alunos de aplic`


  const items = [
    { title: "MC102", description: description102, relatedArticleId: 1 },
    { title: "MC202", description: description202, relatedArticleId: 2 },
    { title: "MC322", description: description322, relatedArticleId: 3 }
  ];

  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [article, setArticle] = useState("");
  const [allArticles, setAllArticles] = useState(items);
  const userInfo = useContext(UserContext);


  return (
    <UserContext.Provider value={{ username, setUsername, id, setId, article, setArticle, allArticles, setAllArticles }}>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;