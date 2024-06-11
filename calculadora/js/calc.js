document.getElementById('desconto').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularDesconto();
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('desconto').reset();
    document.getElementById('resultado').innerHTML = '';
    this.style.display = 'none';
});

function calcularDesconto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const percentual = parseFloat(document.getElementById('percentual').value);

    if (isNaN(preco) || isNaN(percentual) || percentual < 0 || percentual > 100) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const valorDesconto = (preco * percentual) / 100;
    const valorFinal = preco - valorDesconto;

    document.getElementById('result').innerHTML = `
        <p><strong>Nome do Produto:</strong> ${nomeProduto}</p>
        <p><strong>Valor do Desconto:</strong> R$ ${valorDesconto.toFixed(2)}</p>
        <p><strong>Valor Final do Produto:</strong> R$ ${valorFinal.toFixed(2)}</p>
    `;
    document.getElementById('reset').style.display = 'block';
}
