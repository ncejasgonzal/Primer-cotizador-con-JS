function calcularCotizacion(event) {
    event.preventDefault();
    let marcaAuto = document.getElementById("marca").value;
    let modeloAuto = document.getElementById("modelo").value;
    let tipoAuto = document.getElementById("tipo").value;
    let usoAuto = document.getElementById("uso").value;


    // Realiza los cálculos de cotización según la marca y el modelo de auto seleccionados
    let cotizacion = 0;

    switch (marcaAuto) {
        case "marca1":
            // Lógica de cotización para la marca 1
            cotizacion += 45000; // Cantidad base para la marca 1
            break;
        case "marca2":
            // Lógica de cotización para la marca 2
            cotizacion += 55000; // Cantidad base para la marca 2
            break;
        case "marca3":
            // Lógica de cotización para la marca 3
            cotizacion += 60000; // Cantidad base para la marca 3
            break;
        case "marca4":
            // Lógica de cotización para la marca 3
            cotizacion += 65000; // Cantidad base para la marca 3
            break;
        case "marca5":
            // Lógica de cotización para la marca 3
            cotizacion += 70000; // Cantidad base para la marca 3
            break;
    }

    // Lógica adicional según el modelo de auto seleccionado
    switch (modeloAuto) {
        case "2013":
            cotizacion += 1000; // Cantidad adicional para el modelo 2013
            break;
        case "2014":
            cotizacion += 1500; // Cantidad adicional para el modelo 2014
            break;
        case "2015":
            cotizacion += 2000; // Cantidad adicional para el modelo 2015
            break;
        case "2016":
            cotizacion += 2500; // Cantidad adicional para el modelo 2015
            break;
        case "2017":
            cotizacion += 3000; // Cantidad adicional para el modelo 2015
            break;
        case "2018":
            cotizacion += 3500; // Cantidad adicional para el modelo 2015
            break;
        case "2019":
            cotizacion += 4000; // Cantidad adicional para el modelo 2015
            break;
        case "2020":
            cotizacion += 4500; // Cantidad adicional para el modelo 2015
            break;
        case "2021":
            cotizacion += 5000; // Cantidad adicional para el modelo 2015
            break;
        case "2022":
            cotizacion += 5500; // Cantidad adicional para el modelo 2015
            break;
        case "2023":
            cotizacion += 6000; // Cantidad adicional para el modelo 2015
            break;

    }

    // Lógica adicional según el tipo de auto seleccionado
    switch (tipoAuto) {
        case "SUV":
            cotizacion += 300; // Cantidad adicional para los SUV
            break;
        case "CAMIONETA":
            cotizacion += 250; // Cantidad adicional para las camionetas
            break;
        // Agrega más casos para otros tipos de autos y sus cotizaciones adicionales
    }

    // Lógica adicional según el uso del auto seleccionado
    switch (usoAuto) {
        case "PARTICULAR":
            cotizacion *= 1.1; // Aumento del 10% para uso particular
            break;
        case "REMIS":
            cotizacion *= 1.8; // Aumento del 80% para uso remis
            break;
        // Agrega más casos para otros usos de autos y sus cotizaciones adicionales
    }

    // Aplicar un descuento si el modelo es anterior a 2017
    if (modeloAuto <= "2017") {
        cotizacion -= 5000;
    }

    // Calcular cotización para los próximos 5 años
    for (var i = 0; i < 5; i++) {
        cotizacion += 50;
    }

    // Muestra el resultado de la cotización en un cuadro de diálogo emergente (alert)
    let resultadoMessage =
        "La cotización para la marca, modelo, tipo y uso seleccionados es: $" +
        cotizacion.toFixed(2) +
        " por mes";
    alert(resultadoMessage);
}

