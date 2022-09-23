function calcularImc() {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    if (altura != "") {
        if (peso != "") {
            let conta = peso / (altura * altura)

            if (conta < 18.5) {
                document.getElementById('resultado').innerHTML = "Magreza"
                document.getElementById('conta').innerHTML = conta
            } else if (conta < 24.9) {
                document.getElementById('resultado').innerHTML = "Normal"
                document.getElementById('conta').innerHTML = conta.toFixed(2)
            } else if (conta < 29.9) {
                document.getElementById('resultado').innerHTML = "Sobrepeso"
                document.getElementById('conta').innerHTML = conta
            } else if (conta < 39.9) {
                document.getElementById('resultado').innerHTML = "Obesidade"
                document.getElementById('conta').innerHTML = conta
            } else {
                document.getElementById('resultado').innerHTML = "Obesidade grave"
                document.getElementById('conta').innerHTML = conta
            }
        } else {
            alert("Preencha o campo peso")
            }
    }  else {
        alert("Preencha o campo altura")
       }     

}

