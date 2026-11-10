// Selecionando os elementos HTML
const btnCalcular = document.querySelector("#btn-calcular");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const inputNota3 = document.querySelector("#nota3");
const divResultado = document.querySelector("#resultado");
const textoMedia = document.querySelector("#texto-media");
const textoStatus = document.querySelector("#texto-status");

// Evento de clique para processar os dados
btnCalcular.addEventListener("click", () => {
    // Convertendo os valores de texto dos inputs para números decimais
    const n1 = parseFloat(inputNota1.value);
    const n2 = parseFloat(inputNota2.value);
    const n3 = parseFloat(inputNota3.value);

    // Validação simples para garantir que os campos estão preenchidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, preencha todas as notas corretamente!");
        return;
    }

    // Processamento: Cálculo da média aritmética
    const media = (n1 + n2 + n3) / 3;

    // Feedback Visual: Definindo o status com base na média
    let status = "";
    let classeCSS = "";

    if (media >= 7.0) {
        status = "Parabéns! Aluno Aprovado 🎉";
        classeCSS = "aprovado";
    } else if (media >= 5.0) {
        status = "Atenção! Aluno em Recuperação ⚠️";
        classeCSS = "recuperacao";
    } else {
        status = "Infelizmente, Aluno Reprovado ❌";
        classeCSS = "reprovado";
    }

    // Exibindo os resultados na tela (Manipulação do DOM)
    textoMedia.innerText = `Média final: ${media.toFixed(1)}`;
    textoStatus.innerText = status;
    textoStatus.className = classeCSS;

    // Mostra o container de resultado se estiver oculto
    divResultado.classList.remove("hidden");
});
