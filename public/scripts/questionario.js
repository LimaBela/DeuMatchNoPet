
const questions = [
    {
        question: "🏠 Como é seu lar doce lar?",
        options: ["Apartamento", "Casa com quintal pequeno", "Casa com quintal grande", "Sítio / Fazenda"]
    },
    {
        question: "🚶‍♂️ Com que frequência você faz atividades ao ar livre?",
        options: ["Quase nunca", "Algumas vezes na semana", "Todos os dias", "Minha vida é na rua! 🌳"]
    },
    {
        question: "💼 Sua rotina é mais...",
        options: ["Trabalho fora", "Home office", "Horários flexíveis", "Quase sempre em casa"]
    },
    {
        question: "🕒 Quanto tempo você tem para um pet por dia?",
        options: ["Pouco (1h ou menos)", "Médio (2 a 3 horas)", "Bastante (mais de 3 horas)"]
    },
    {
        question: "✨ O que você espera do seu futuro pet?",
        options: ["Companhia tranquila 💤", "Parceiro de aventuras 🚴", "Brincalhão e divertido 🎾", "Um guardião da casa 🛡️"]
    },
    {
        question: "🎯 Você prefere...",
        options: ["Filhote 🐶", "Jovem cheio de energia 💥", "Adulto tranquilo 🧘", "Qualquer idade ❤️"]
    },
    {
        question: "🐕🐈 Você tem preferência por...",
        options: ["Cães", "Gatos", "Amo os dois!"]
    },
    {
        question: "🧸 Tamanho importa?",
        options: ["Pequeno 🧸", "Médio 🐕", "Grande 🐩", "Não me importo 💖"]
    },
    {
        question: "👨‍👩‍👧‍👦 Na sua casa tem...",
        options: ["Crianças", "Outros animais", "Idosos", "Só eu mesmo 🧍"]
    }
];

let currentQuestion = 0;
const answers = [];

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressBar = document.getElementById("progressBar");

function abrirQuestionario() {
    document.getElementById("overlayQuestionario").classList.remove("d-none");
    currentQuestion = 0;
    answers.length = 0;
    loadQuestion();
}

function fecharQuestionario() {
    document.getElementById("overlayQuestionario").classList.add("d-none");
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "btn btn-option";
        btn.textContent = option;
        btn.onclick = () => nextQuestion(option);
        optionsContainer.appendChild(btn);
    });

    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = progress + "%";
}

function nextQuestion(answer) {
    answers.push(answer);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionText.textContent = "🐾 Tudo pronto!";
    optionsContainer.innerHTML = `
        <p class="mb-4">Agora temos tudo que precisamos para encontrar o pet perfeito para você! 💖</p>
        <button class="btn btn-option" onclick="enviarQuestionario()">Enviar Questionário</button>
    `;
    progressBar.style.width = "100%";
}

function enviarQuestionario() {
    console.log("Respostas:", answers);

    // Aqui você pode enviar para backend via AJAX, fetch, etc.
    alert("Questionário enviado! 🐶🐱");

    fecharQuestionario();
}
