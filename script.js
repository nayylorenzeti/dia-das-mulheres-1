// Lista de citações inspiradoras
const quotes = [
    '"A mulher é a maior obra-prima da criação." – Leonardo da Vinci',
    '"Eu sou a minha melhor versão." – Rihanna',
    '"Nunca tenha medo de ser poderosa." – Beyoncé',
    '"Mulheres, se a gente não der valor a nós mesmas, ninguém mais vai." – Lady Gaga',
    '"A luta das mulheres não tem fim, mas tem que continuar." – Simone de Beauvoir'
];

// Função para mudar a citação
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Adicionando o evento de clique ao botão
document.getElementById("change-quote-btn").addEventListener("click", changeQuote);