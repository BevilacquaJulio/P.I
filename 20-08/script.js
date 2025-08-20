window.onload = function () {
  var display = document.getElementById('display');
  var buttons = document.getElementsByTagName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var t = this.textContent.trim();

      // limpar
      if (t === 'C') {
        display.value = '0';
        return;
      }

      // calcular
      if (t === '=') {
        try {
          // normaliza para ASCII que o eval entende
          var expr = display.value;

          // remove espaços
          expr = expr.replace(/\s+/g, '');

          // troca símbolos "bonitos" pelos operadores ASCII
          expr = expr
            .replace(/×|x|X|＊/g, '*')   // vezes
            .replace(/÷|:|／/g, '/')     // divisão
            .replace(/−|–|—/g, '-')     // traço tipográfico -> hífen
            .replace(/＋/g, '+')         // mais "fullwidth" -> +
            .replace(/,/g, '.');         // vírgula decimal -> ponto

          // evita operador sobrando no final (ex.: "2+")
          if (/[+\-*/]$/.test(expr)) expr = expr.slice(0, -1);

          var r = eval(expr);
          if (!isFinite(r)) throw new Error();
          display.value = String(r); // se quiser vírgula: String(r).replace('.', ',')
        } catch (e) {
          display.value = 'Erro';
        }
        return;
      }

      // montar expressão no visor
      if (display.value === '0' || display.value === 'Erro') {
        display.value = t;
      } else {
        // opcional: colocar espaços em volta de operadores visuais
        if (/^[+\-×÷]$/.test(t)) {
          display.value += ' ' + t + ' ';
        } else {
          display.value += t;
        }
      }
    };
  }
};
