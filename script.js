const perguntas = [
    // 🟢 FÁCIL (1 a 8)
    {
        pergunta: "Qual é o símbolo químico do oxigênio?",
        alternativas: ["Ox", "Og", "O", "Oxg"],
        correta: 2
    },
    {
        pergunta: "Qual é o número atômico do hidrogênio?",
        alternativas: ["0", "2", "8", "1"],
        correta: 3
    },
    {
        pergunta: "Qual dessas opções é um metal alcalino?",
        alternativas: ["Cloro", "Potássio", "Enxofre", "Neônio"],
        correta: 1
    },
    {
        pergunta: "Qual é a principal característica dos gases nobres?",
        alternativas: ["São reativos", "São metais pesados", "Possuem camada de valência completa", "Conduzem eletricidade"],
        correta: 2
    },
    {
        pergunta: "O que a tabela periódica organiza?",
        alternativas: ["As formas geométricas", "Os planetas do sistema solar", "Os elementos químicos", "As partículas subatômicas"],
        correta: 2
    },
    {
        pergunta: "Qual grupo da tabela periódica contém elementos altamente reativos com a água?",
        alternativas: ["1 (Metais alcalinos)", "2 (Alcalinoterrosos)", "17 (Halogênios)", "18 (Gases nobres)"],
        correta: 0
    },
    {
        pergunta: "Qual é o símbolo do sódio?",
        alternativas: ["Na", "So", "Sd", "S"],
        correta: 0
    },
    {
        pergunta: "Um átomo neutro possui:",
        alternativas: ["Apenas prótons", "Mais prótons que elétrons", "Mais elétrons que prótons", "Mesmo número de prótons e elétrons"],
        correta: 3
    },
    
    // 🟡 MÉDIO (9 a 17)
    {
        pergunta: "O que define a ordem dos elementos na tabela periódica moderna?",
        alternativas: ["Massa atômica", "Número atômico", "Raio atômico", "Ano de descoberta"],
        correta: 1
    },
    {
        pergunta: "Qual desses elementos é um não metal?",
        alternativas: ["Alumínio", "Ferro", "Enxofre", "Cálcio"],
        correta: 2
    },
    {
        pergunta: "Qual é a distribuição eletrônica do oxigênio (Z=8) no modelo de camadas?",
        alternativas: ["2-6", "6-2", "4-4", "2-4"],
        correta: 0
    },
    {
        pergunta: "O raio atômico aumenta:",
        alternativas: ["Da direita para a esquerda e de cima para baixo", "Da esquerda para a direita e de cima para baixo", "Da direita para a esquerda e de baixo para cima", "Da esquerda para a direita e de baixo para cima"],
        correta: 0
    },
    {
        pergunta: "A energia de ionização é maior em:",
        alternativas: ["Gases nobres", "Metais alcalinos", "Halogênios", "Metais de transição"],
        correta: 0
    },
    {
        pergunta: "A eletronegatividade é a tendência de um átomo em:",
        alternativas: ["Doar elétrons", "Atrair elétrons em uma ligação", "Perder prótons", "Se tornar instável"],
        correta: 1
    },
    {
        pergunta: "Qual elemento tem distribuição eletrônica 1s² 2s² 2p⁶ 3s¹?",
        alternativas: ["Potássio (K)", "Sódio (Na)", "Magnésio (Mg)", "Alumínio (Al)"],
        correta: 1
    },
    {
        pergunta: "Um cátion é formado quando um átomo:",
        alternativas: ["Ganha elétrons", "Perde elétrons", "Ganha prótons", "Ganha nêutrons"],
        correta: 1
    },
    {
        pergunta: "Qual elemento tem maior raio atômico?",
        alternativas: ["Flúor", "Oxigênio", "Lítio", "Frâncio"],
        correta: 3
    },
    
    // 🔴 DIFÍCIL (18 a 25)
    {
        pergunta: "Qual elemento possui a configuração eletrônica [Ne] 3s² 3p⁴?",
        alternativas: ["Enxofre", "Cloro", "Fósforo", "Argônio"],
        correta: 0
    },
    {
        pergunta: "O que acontece com a eletronegatividade ao descer um grupo da Tabela Periódica?",
        alternativas: ["Aumenta", "Diminui", "Permanece constante", "Fica irregular"],
        correta: 1
    },
    {
        pergunta: "O que são períodos na Tabela Periódica?",
        alternativas: ["Colunas verticais", "Linhas horizontais", "Famílias químicas", "Grupos de metais"],
        correta: 1
    },
    {
        pergunta: "Qual elemento tem a maior eletronegatividade da tabela?",
        alternativas: ["Oxigênio", "Cloro", "Flúor", "Nitrogênio"],
        correta: 2
    },
    {
        pergunta: "O que diferencia os elementos do mesmo grupo na Tabela Periódica?",
        alternativas: ["Mesmo número de nêutrons", "Mesmo número de níveis de energia", "Mesmo número de elétrons na camada de valência", "Mesmo número de elétrons totais"],
        correta: 2
    },
    {
        pergunta: "A afinidade eletrônica está relacionada à:",
        alternativas: ["Energia para remover um elétron", "Tamanho do átomo", "Energia liberada ao receber um elétron", "Capacidade de formar cátions"],
        correta: 2
    },
    {
        pergunta: "Qual das opções representa um metal de transição?",
        alternativas: ["Lítio", "Ferro", "Oxigênio", "Bromo"],
        correta: 1
    },
    {
        pergunta: "A distribuição eletrônica do elemento com Z = 17 termina em:",
        alternativas: ["3p³", "3p⁵", "2p⁶", "3s²"],
        correta: 1
    }
];

let indiceAtual = 0;
let tempoRestante = 20;
let timerInterval;
let respostaVerificada = false;

const perguntaEl = document.getElementById('pergunta');
const alternativasEl = document.getElementById('alternativas');
const resultadoEl = document.getElementById('resultado');
const reiniciarBtn = document.getElementById('reiniciar');
const telaFinalEl = document.getElementById('tela-final');
const voltarMenuBtn = document.getElementById('voltar-menu');
const menuInicial = document.getElementById('menu-inicial');
const btnIniciar = document.getElementById('btn-iniciar');
const quizEl = document.getElementById('quiz');
const instrucoesEl = document.getElementById('instrucoes');
const btnComecar = document.getElementById('btn-comecar');
const proximaBtn = document.getElementById('proxima');
const verificarBtn = document.getElementById('verificar');
const numeroPerguntaEl = document.getElementById('numero-pergunta');
const barraProgressoEl = document.getElementById('barra-progresso');
const timerEl = document.getElementById('timer');
const dificuldadeEl = document.getElementById('dificuldade');

function obterDificuldade(numeroPergunta) {
    if (numeroPergunta <= 8) {
        return { texto: 'Fácil', classe: 'facil' };
    } else if (numeroPergunta <= 17) {
        return { texto: 'Médio', classe: 'medio' };
    } else {
        return { texto: 'Difícil', classe: 'dificil' };
    }
}

function iniciarTimer() {
    tempoRestante = 20;
    respostaVerificada = false;
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerEl.textContent = tempoRestante;
    timerEl.classList.remove('urgente');
    
    timerInterval = setInterval(() => {
        tempoRestante--;
        timerEl.textContent = tempoRestante;
        
        if (tempoRestante <= 5) {
            timerEl.classList.add('urgente');
        }
        
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = '0';
        }
    }, 1000);
}

function mostrarPergunta() {
    const atual = perguntas[indiceAtual];
    perguntaEl.textContent = atual.pergunta;
    
    alternativasEl.innerHTML = '';
    
    atual.alternativas.forEach((alt, i) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.setAttribute('data-letra', String.fromCharCode(65 + i));
        div.textContent = alt;
        alternativasEl.appendChild(div);
    });
    
    numeroPerguntaEl.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    barraProgressoEl.style.width = `${((indiceAtual + 1) / perguntas.length) * 100}%`;
    
    const dificuldade = obterDificuldade(indiceAtual + 1);
    dificuldadeEl.textContent = dificuldade.texto;
    dificuldadeEl.className = `dificuldade ${dificuldade.classe}`;
    
    verificarBtn.style.display = 'inline-block';
    verificarBtn.disabled = false;
    proximaBtn.style.display = 'none';
    resultadoEl.textContent = '';
    
    iniciarTimer();
}

function verificarResposta() {
    if (respostaVerificada) return;
    
    respostaVerificada = true;
    clearInterval(timerInterval);
    
    const atual = perguntas[indiceAtual];
    const alternativas = document.querySelectorAll('.alternativa');
    
    alternativas.forEach((alt, i) => {
        if (i === atual.correta) {
            alt.classList.add('certa');
        }
    });
    
    resultadoEl.textContent = `Resposta correta: ${String.fromCharCode(65 + atual.correta)}) ${atual.alternativas[atual.correta]}`;
    resultadoEl.style.color = '#4ee44e';
    
    verificarBtn.style.display = 'none';
    proximaBtn.style.display = 'inline-block';
    
    if (indiceAtual === perguntas.length - 1) {
        proximaBtn.textContent = 'Finalizar Quiz';
    } else {
        proximaBtn.textContent = 'Próxima Pergunta';
    }
}

verificarBtn.onclick = verificarResposta;

proximaBtn.onclick = () => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {
    perguntaEl.textContent = '';
    alternativasEl.innerHTML = '';
    numeroPerguntaEl.textContent = '';
    barraProgressoEl.style.width = '0%';
    proximaBtn.style.display = 'none';
    verificarBtn.style.display = 'none';
    timerEl.textContent = '';
    dificuldadeEl.textContent = '';
    dificuldadeEl.className = 'dificuldade';
    resultadoEl.textContent = '';
    resultadoEl.style.color = '#333';
    quizEl.style.display = 'none';
    telaFinalEl.style.display = 'flex';
}

btnIniciar.onclick = () => {
    menuInicial.style.display = 'none';
    instrucoesEl.style.display = 'flex';
};

btnComecar.onclick = () => {
    instrucoesEl.style.display = 'none';
    quizEl.style.display = 'block';
    indiceAtual = 0;
    mostrarPergunta();
};

voltarMenuBtn.onclick = () => {
    telaFinalEl.style.display = 'none';
    menuInicial.style.display = 'flex';
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
};

reiniciarBtn.onclick = () => {
    reiniciarBtn.style.display = 'none';
    resultadoEl.textContent = '';
    resultadoEl.style.color = '#333';
    menuInicial.style.display = 'flex';
    quizEl.style.display = 'none';
    instrucoesEl.style.display = 'none';
    telaFinalEl.style.display = 'none';
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
};
