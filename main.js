const form = document.getElementById('form-agenda');
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');
const inputObs = document.getElementById('Obs');
let nomes = [];
let telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome "${inputNomeContato.value}" já existe na agenda de contatos.`)
    } else if (telefones.includes(inputNumeroContato.value))
        alert(`O número "${inputNumeroContato.value}" já existe na agenda de contatos.`)
    else {
    nomes.push(inputNomeContato.value);
    telefones.push(inputNumeroContato.value);
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputObs.value}</td>`;
    linha += `<td><a href="tel:+55${inputNumeroContato.value}">Ligar</a></td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
