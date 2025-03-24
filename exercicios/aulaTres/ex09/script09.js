const form = document.getElementById("formCadastro");

// Função de captura dos valores dos campos (usando Arrow Function)
const pegarValor = (id) => document.getElementById(id).value;

// Função para pegar o valor do rádio selecionado (usando Arrow Function)
const pegarRadio = (name) => {
    const radioSelecionado = document.querySelector(`input[name="${name}"]:checked`);
    return radioSelecionado ? radioSelecionado.value : "Não informado";
};

// Evento de submissão do formulário (usando Arrow Function)
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio e recarregamento da página

    // Pegando os valores dos campos
    const nome = pegarValor("nome");
    const endereco = pegarValor("endereco");
    const telefone = pegarValor("telefone");
    const email = pegarValor("email");
    const sexo = pegarRadio("sexo");

    // Exibindo os dados no alert
    alert(`Cadastro Realizado!\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nE-mail: ${email}\nSexo: ${sexo}`);
});