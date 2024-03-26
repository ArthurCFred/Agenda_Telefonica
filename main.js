const formAgenda = document.getElementById('form-agenda');
const tabelaContatos = document.getElementById('tabela-contatos');
const rodapeTabela = document.getElementById('rodape-tabela');

formAgenda.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero-contato').value;

    adicionarContato(nome, numero)

    
});

function adicionarContato(nome, numero) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
    `;
    tabelaContatos.appendChild(linha);
}


