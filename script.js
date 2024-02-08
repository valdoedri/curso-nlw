const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Um banco de dados relacional",
      "Uma linguagem de programação",
      "Uma ferramenta de design gráfico"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a finalidade do operador '===' em JavaScript?",
    respostas: [
      "Comparação de valor e tipo",
      "Atribuição de valor",
      "Comparação de valor"
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: [
      "declare x;",
      "v x;",
      "var x;"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Design Object Model"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()'?",
    respostas: [
      "Selecionar um elemento pelo ID",
      "Selecionar vários elementos",
      "Selecionar um elemento pelo seletor CSS"
    ],
    correta: 2
  },
  {
    pergunta: "O que significa AJAX em JavaScript?",
    respostas: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JavaScript and XHTML"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de criar um array em JavaScript?",
    respostas: [
      "array = [1, 2, 3]",
      "arr(1, 2, 3)",
      "let array = {1, 2, 3}"
    ],
    correta: 0
  },
  {
    pergunta: "Como você converte uma string para um número em JavaScript?",
    respostas: [
      "toNumber()",
      "parseInteger()",
      "parseInt()"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o evento 'click' em JavaScript?",
    respostas: [
      "Um evento de teclado",
      "Um evento de mouse",
      "Um evento de formulário"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'push()' em um array?",
    respostas: [
      "Remover um elemento",
      "Adicionar um elemento no final",
      "Inverter a ordem dos elementos"
    ],
    correta: 1
  }
];
  // Pega a DIV onde sera inserida as perguntas e respostas do quisz
  const quiz = document.querySelector('#quiz')
  // Pega o template no HTMLS
  const template = document.querySelector('template')
  // Pega paragrafo para mostrar o resultado
  const nota = document.querySelector('#resultado')
  // cria o objeto Set para guardar os acertos
  const corretas = new Set()
  // Pega o número de perguntas dentro da array
  const totalDePerguntas = perguntas.length
 
  for(const item of perguntas) {
    // clona o item do quiz 
    const quizitem = template.content.cloneNode(true)
    // Pega a pergunta na array e coloca no h3
    quizitem.querySelector('h3').textContent = item.pergunta
    
    for (const resp of item.respostas) {
        // pega o DT no HTML
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        // pega a resposta dentro de respostas e coloca no SPAN
        dt.querySelector('span').textContent = resp
        //                                                      pega o índice do item na array
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        // Adiciona o value ao radio      pega o indice das respostas na array
        dt.querySelector('input').value = item.respostas.indexOf(resp)
        dt.querySelector('input').onchange = (event) => {
          const estacorreta = event.target.value == item.correta
          // Se o item já existir, deleta, se correta add novamente 
          corretas.delete(item)
          if(estacorreta) {
            // se correta, computa o acerto
            corretas.add(item)
          }
          nota.innerHTML = `Acertos: ${corretas.size} de ${totalDePerguntas}` 
          // opcional para mostrar resultado na tela 
          // nota.textContent = '<strong>Acertos:</strong> ' + corretas.size + ' de ' + totalDePerguntas             
        }       
       
        // adiciona a resposta dentro do dt
        quizitem.querySelector('dl').appendChild(dt)
    }

    // remove o dt do template com o span RESPOSTA A
    quizitem.querySelector('dl dt').remove()

     // Coloca a pergunta na tela
    quiz.appendChild(quizitem)
  }
