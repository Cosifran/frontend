
const calcularElHeladoYVueltos = (dinero) => {
    if(dineroCofla >= 0.6 && dineroCofla < 1){
        alert("Compra el helado de agua");
        alert("El cambio es " + (dinero - 0.6));
    } 
    else if (dinero >= 1 && dinero < 1.6){
        alert("Compra el helado de crema");
        alert("El cambio es " + (dinero - 1));
    }
    else if (dinero >= 1.6 && dinero < 1.7){
        alert("Compra el helado de heladovich");
        alert("El cambio es " + (dinero - 1.6));
    }
    else if (dinero >= 1.7 && dinero < 2.9){
        alert("Compra el helado de helardo");
        alert("El cambio es " + (dinero - 1.7));
    }
    else if (dinero >= 2.9 ){
        alert("Compra el helado de helado con confites o el pote 1/4 KG");
        alert("El cambio es " + (dinero - 2.9));
    }
    else{
        alert("No tienes dinero ni para pagar por el mugre de la tienda");
    }
}

let entrada = false;

const maquinaDeValidacion = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && entrada == false) {
            alert("Puedes pasar gratis eres la primera persona en llega despues de 2AM");
            entrada= true;
        } else {
            alert("Puedes pasar pero debes pagar la entrada");
        }

    } else {
        alert("No vas a pasar, eres muy joven");
    }
    
}

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let precencia = prompt(nombre);
    if(precencia == "P" || precencia == "p"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________Presentes: <b> ${alumnosTotales[alumno][1]} </b> <br>
    ___________Ausencia: <b> ${30 - alumnosTotales[alumno][1]} </b>`;

    if(30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style= 'color: red'> REPROBADO POR INASISTENCIA </b><br><br>";
    }else{
        resultado+="<br><br>"
    }
    document.write(resultado);
}