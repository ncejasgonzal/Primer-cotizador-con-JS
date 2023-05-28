function calcularCotizacion(event) {
    event.preventDefault();
    let marcaAuto = document.getElementById("marca").value;
    let modeloAuto = document.getElementById("modelo").value;
    

    // Realiza los cálculos de cotización según la marca y el modelo de auto seleccionados
    let cotizacion = 0;

    switch (marcaAuto) {
        case "marca1":
            // Lógica de cotización para la marca 1
            cotizacion += 1000; // Cantidad base para la marca 1
            break;
        case "marca2":
            // Lógica de cotización para la marca 2
            cotizacion += 1500; // Cantidad base para la marca 2
            break;
        case "marca3":
            // Lógica de cotización para la marca 3
            cotizacion += 2000; // Cantidad base para la marca 3
            break;
        // Agrega más casos para otras marcas de autos y sus cotizaciones
    }

    // Lógica adicional según el modelo de auto seleccionado
    switch (modeloAuto) {
        case "2013":
            cotizacion += 100; // Cantidad adicional para el modelo 2013
            break;
        case "2014":
            cotizacion += 150; // Cantidad adicional para el modelo 2014
            break;
        case "2015":
            cotizacion += 200; // Cantidad adicional para el modelo 2015
            break;
        // Agrega más casos para otros modelos de autos y sus cotizaciones adicionales
    }

    // Muestra el resultado de la cotización en la página
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "La cotización para la marca y modelo seleccionados es: $" + cotizacion + " por mes";
}
