const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('p').value;
    const i = document.getElementById('i').value;
    const n = document.getElementById('n').value;
    const resultado = document.getElementById('resultado');

    if (p !== '' && i !== '' && n !== '') {
 
        const vf = ( p * ( ( ( 1 + (i/100) ) ** n - 1 ) / (i/100) )).toFixed(2);
        
    
        resultado.textContent = `Olá, ${nome}! Se você aplicar R$ ${p} à taxa de juros de ${i}%, durante ${n} meses, acumulará uma poupança de R$ ${vf}`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);
