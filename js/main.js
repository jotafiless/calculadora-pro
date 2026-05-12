function Calcular(){
    var num1 = parseInt(document.getElementById("box1").value)
    var num2 = parseInt(document.getElementById("box2").value)
    var op = document.getElementsByName("operacion")
    var sel

    for (let index = 0; index < op.length; index++) {
        if(op[index].checked)
            sel = op[index].value
    }
    var resultado
    
    if(sel == "sumar")
        resultado = num1 + num2
    else if(sel == "restar")
        resultado = num1 - num2
    else if(sel == "multiplicar")
        resultado = num1 * num2
    else if(sel == "dividir")
        resultado = num1 / num2
    document.getElementById("resultado").value = resultado
}