function somar (){
    let numero1, numero2;
    numero1 = Number(document.getElementById('num1').value);
    numero2 = Number(document.getElementById('num2').value);

    return alert(numero1 + numero2)
}

function criarElemento(decisao){
    if(decisao){
        let paragrafo = document.createElement('p')
        paragrafo.textContent = "Você clicou em OK"

        document.body.appendChild(paragrafo)
    
    }else{
        let paragrafo = document.createElement('p')
        paragrafo.textContent = "Você clicou em Cancelar"

        document.body.appendChild(paragrafo)
    }
}

function caixaOpcao(){
    let decisao = prompt("Ok ou Cancelar")

    criarElemento(decisao);
}

