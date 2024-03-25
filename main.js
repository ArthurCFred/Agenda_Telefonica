const formAgenda = document.getElementById('form-agenda');
const tabelaContatos = document.getElementById('tabela-contatos');
const rodapeTabela = document.getElementById('rodape-tabela');

formAgenda.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero-contato').value;



    // Limpa o conteúdo atual do rodapé da tabela
    rodapeTabela.innerHTML = '';

    // Atualiza o rodapé da tabela com os dados do último contato adicionado
    const linhaRodape = document.createElement('tr');
    linhaRodape.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
    `;
    rodapeTabela.appendChild(linhaRodape);
});

function adicionarContato(nome, numero) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
    `;
    tabelaContatos.appendChild(linha);
}
