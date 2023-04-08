const calculadora = () => {
    a = prompt("Digita el primer numero");
    b = prompt("Digita el segundo numero");
    c= prompt("Digita el operador");

    if(c == "+"){
        alert("El resultado de tu suma es " + (a + b));
    } else if (c == "-"){
        alert("El resultado de tu resta es " + (a - b));
    } else if (c == "x" || c == "X"){
        alert("El resultado de tu mutiplicación es " + (a * b));
    } else if ( c == "/"){
        alert("El resultado de tu división es " + (a / b));
    } else {
        alert("No lo sé bro, no soy una calculadora cientifica");
    }
}

calculadora();

document.querySelector("#app-root > div.Routes_container__ODc5Z > div > main > div.Homepage_searchControlsContainer__ZWI2N > div > div > div.SearchControls_grid__NjczM > div.SearchControls_destination__Njc4N > div > button")