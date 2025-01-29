let btPromocao = document.getElementById('btPromocao');
btPromocao.addEventListener('click', calcularPreco);
function calcularPreco(){
    let inMedicamento = document.getElementById('inMedicamento');
    let inPreco = document.getElementById('inPreco');
    let outValor = document.getElementById('outValor');
    let medicamento = inMedicamento.value;
    let outmed = document.getElementById('outMed');
    let preco = Number(inPreco.value);
    let valor = Math.floor(preco*2);
    outmed.innerHTML = 'Promoção de '+medicamento;
    outValor.innerHTML = 'Leve 2 por apenas R$'+valor.toFixed(2);
}