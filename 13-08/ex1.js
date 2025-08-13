document.getElementById('btn-enviar').onclick = function() {
    var salario = document.getElementById('salario').value;
    document.getElementById('resultado').textContent = "Seu salário * 2 é = " + (salario * 2);
};

