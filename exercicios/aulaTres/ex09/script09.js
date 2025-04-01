const form = document.getElementById("formCadastro");

// essa função vai pegar todos os valores dos campos 
const pegarValor = (id) => document.getElementById(id).value;

// função para pegar o valor do rádio selecionado 
const pegarRadio = (name) => {
    const radioSelecionado = document.querySelector(`input[name="${name}"]:checked`);
    return radioSelecionado ? radioSelecionado.value : "Não informado";
};

// evento de submissão do formulário 
form.addEventListener("submit", (event) => {
    // isso impede o envio e recarregamento da página
    event.preventDefault(); 

    // aqui estamos pegando os valores dos campos
    const nome = pegarValor("nome");
    const endereco = pegarValor("endereco");
    const telefone = pegarValor("telefone");
    const email = pegarValor("email");
    const sexo = pegarRadio("sexo");

    // e aqui estamos exibindo os dados no alert
    alert(`Cadastro Realizado!\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nE-mail: ${email}\nSexo: ${sexo}`);
});