function calcularCotizacion(event) {
    event.preventDefault();
    let marcaAuto = document.getElementById("marca").value;
    let modeloAuto = document.getElementById("modelo").value;
    let tipoAuto = document.getElementById("tipo").value;
    let usoAuto = document.getElementById("uso").value;


    // La cotización comienza en 0 e irá incrementando segun lo seleccionado por el usuario
    let cotizacion = 0;

    switch (marcaAuto) {
        case "marca1":
            // Cotización para la marca FIAT
            cotizacion += 45000;
            break;
        case "marca2":
            // Cotización para la marca VOLKSWAGEN
            cotizacion += 55000;
            break;
        case "marca3":
            // Cotización para la marca RENAULT
            cotizacion += 60000;
            break;
        case "marca4":
            // Cotización para la marca TOYOTA
            cotizacion += 65000; 
            break;
        case "marca5":
            // Cotización para la marca AUDI
            cotizacion += 70000;
            break;
        case "marca6":
            // Cotización para la marca BMW
            cotizacion += 75000;
            break;
    }

    // Varia el precio segun el año del auto
    switch (modeloAuto) {
        case "2013":
            cotizacion += 1000;
            break;
        case "2014":
            cotizacion += 1500;
            break;
        case "2015":
            cotizacion += 2000;
            break;
        case "2016":
            cotizacion += 2500;
            break;
        case "2017":
            cotizacion += 3000;
            break;
        case "2018":
            cotizacion += 3500; 
            break;
        case "2019":
            cotizacion += 4000; 
            break;
        case "2020":
            cotizacion += 4500; 
            break;
        case "2021":
            cotizacion += 5000; 
            break;
        case "2022":
            cotizacion += 5500; 
            break;
        case "2023":
            cotizacion += 6000; 
            break;

    }

    // Variación de precio según tipo de vehiculo
    switch (tipoAuto) {
        case "SUV":
            cotizacion += 7000; // Cantidad adicional para los SUV
            break;
        case "CAMIONETA":
            cotizacion += 9250; // Cantidad adicional para las camionetas
            break;
    }

    // Incremento de precio si es de uso REMIS
    switch (usoAuto) {
        case "PARTICULAR":
            cotizacion *= 1.0;
            break;
        case "REMIS":
            cotizacion *= 1.8; // Aumento del 80% para uso remis
            break;
    }

    // Aplicar un descuento si el modelo es anterior a 2017
    if (modeloAuto <= "2017") {
        cotizacion -= 5000;
    }
// Mostrar el resultado en un cuadro superpuesto
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.textContent = "La cotización para la marca, modelo, tipo y uso seleccionados es: $" +
    cotizacion.toFixed(2) +
    " por mes";
resultadoDiv.classList.add("resultado-visible");


}


