let dias = parseInt(prompt("cuantos dias"));

alert("Los años no binarios ni los meses de menos de 30 dias van a ser contados para esta entrega")



document.getElementById("boton").addEventListener("click", function() {
    let valorAño = document.querySelector("#año").value;
    let valorMes = document.querySelector("#mes").value;
    let valorDia = document.querySelector("#dia").value;




        while (valorDia > 31 || valorDia < 0){
            alert("dia incorrecto, ingresa uno nuevo")
            valorDia = parseInt(prompt("ingresa dia"))
        }

        while (valorMes > 12 || valorMes < 1){
            alert("mes incorrecto, ingresa uno nuevo")
            valorMes = parseInt(prompt("ingresa mes"))
        }

        


        

    for (i = 0; i != dias; i++){
        valorDia++
        
        if (valorDia == 31 || valorDia >= 31){
            console.log("------------------- MES NUEVO FELICIDADES ----------------------------")
            valorDia = 1
            valorMes++
        } else if(valorMes == 12){
            console.log("------------------- AÑO NUEVO FELICIDADES ----------------------------")
            valorAño++
            valorMes = 1
            
        }


        console.log("el dia es " + valorDia + " el mes es " + valorMes + " el año es " + valorAño)

    }

    document.getElementById("Resultado").innerHTML = "El día Final es " + valorDia + ", el mes final " + valorMes + " y el año final " + valorAño;

    

    
    
});
