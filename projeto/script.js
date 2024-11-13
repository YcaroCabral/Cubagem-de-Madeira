function calcularCubagem() {
    // Obter valores dos inputs
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Verificar se os valores são válidos
    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura) || isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, insira valores válidos para todas as dimensões e quantidade.");
        return;
    }

    // Calcular volume individual
    const volumeIndividual = comprimento * largura * altura;

    // Calcular volume total
    const volumeTotal = volumeIndividual * quantidade;

    // Exibir resultados
    document.getElementById("volumeIndividual").textContent = `${volumeIndividual.toFixed(5)} m³`;
    document.getElementById("volumeTotal").textContent = `${volumeTotal.toFixed(5)} m³`;
}


function calcularCubagemPalete() {
    // Quantidade de ripas e barrotes
    const quantidadeRipas1 = parseInt(document.getElementById("quantidadeRipas1").value);
    const quantidadeRipas2 = parseInt(document.getElementById("quantidadeRipas2").value);
    const quantidadeBarrotes = parseInt(document.getElementById("quantidadeBarrotes").value);
    const quantidadePaletes = parseInt(document.getElementById("quantidadePaletes").value);

    // Dimensões das ripas
    const comprimentoRipa1 = parseFloat(document.getElementById("comprimentoRipa1").value);
    const larguraRipa1 = parseFloat(document.getElementById("larguraRipa1").value);
    const alturaRipa1 = parseFloat(document.getElementById("alturaRipa1").value);

    const comprimentoRipa2 = parseFloat(document.getElementById("comprimentoRipa2").value);
    const larguraRipa2 = parseFloat(document.getElementById("larguraRipa2").value);
    const alturaRipa2 = parseFloat(document.getElementById("alturaRipa2").value);

    // Dimensões dos barrotes
    const comprimentoBarrote = parseFloat(document.getElementById("comprimentoBarrote").value);
    const larguraBarrote = parseFloat(document.getElementById("larguraBarrote").value);
    const alturaBarrote = parseFloat(document.getElementById("alturaBarrote").value);

    // Verificação dos valores
    if (isNaN(quantidadeRipas1) || isNaN(quantidadeRipas2) || isNaN(quantidadeBarrotes) || isNaN(quantidadePaletes) ||
        isNaN(comprimentoRipa1) || isNaN(larguraRipa1) || isNaN(alturaRipa1) ||
        isNaN(comprimentoRipa2) || isNaN(larguraRipa2) || isNaN(alturaRipa2) ||
        isNaN(comprimentoBarrote) || isNaN(larguraBarrote) || isNaN(alturaBarrote)) {
        alert("Por favor, insira valores válidos para todas as dimensões e quantidades.");
        return;
    }

    // Calcular volume total das ripas
    const volumeRipa1 = quantidadeRipas1 * (comprimentoRipa1 * larguraRipa1 * alturaRipa1);
    const volumeRipa2 = quantidadeRipas2 * (comprimentoRipa2 * larguraRipa2 * alturaRipa2);
    const volumeTotalRipas = volumeRipa1 + volumeRipa2;

    // Calcular volume total dos barrotes
    const volumeTotalBarrotes = quantidadeBarrotes * (comprimentoBarrote * larguraBarrote * alturaBarrote);

    // Volume total de um palete
    const volumePalete = volumeTotalRipas + volumeTotalBarrotes;

    // Calcular volume total para N paletes (onde N é a quantidade de paletes informada)
    const volumeVariosPaletes = volumePalete * quantidadePaletes;

    // Exibir resultados
    document.getElementById("volumePalete").textContent = `${volumePalete.toFixed(5)} m³`;

    // Atualizar o texto de volume total para N paletes
    document.getElementById("volumeVariosPaletes").textContent = `${quantidadePaletes} paletes: ${volumeVariosPaletes.toFixed(5)} m³`;
}
