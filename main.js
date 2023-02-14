const autosDisponibles = ["sedan", "hatchback", "suv", "deportivo"];

const opcionesDeColor = ['rojo', 'azul', 'verde', 'negro'];

class Auto {
    constructor(marca, modelo, tipo, color, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.color = color;
        this.año = año;
        this.precio = precio;
    }
}

const preguntarMarca = () => {
    const marca = prompt("Ingrese la marca del auto que desea comprar:");
    console.log("Marca seleccionada: " + marca);
    return marca;
};

const preguntarModelo = () => {
    const modelo = prompt("Ingrese el modelo del auto que desea comprar:");
    console.log("Modelo seleccionado: " + modelo);
    return modelo;
};

const preguntarTipo = () => {
    let tipo = prompt("Ingrese el tipo de auto que desea comprar (sedan, hatchback, SUV, deportivo):");
    while (!autosDisponibles.includes(tipo)) {
        tipo = prompt("Lo siento, ese tipo de auto no está disponible. Por favor ingrese un tipo válido (sedán, hatchback, SUV, deportivo):");
    }
    console.log("Tipo seleccionado: " + tipo);
    return tipo;
};

const preguntarColor = () => {
    let color = prompt("Ingrese el color del auto que desea comprar:");
    while (!opcionesDeColor.includes(color)) {
        color = prompt("Lo siento, ese color no está disponible. Por favor elige un color entre: ${opcionesDeColor.join(', ')}");
    }
    console.log("Color seleccionado: " + color);
    return color;
};

const preguntarAño = () => {
    const año = prompt("Ingrese el año del auto que desea comprar:");
    console.log("Año seleccionado: " + año);
    return año;
};

const preguntarPrecio = () => {
    const precio = prompt("Ingrese el monto máximo que desea gastar:");
    console.log("Presupuesto seleccionado: " + precio);
    return precio;
};

const mostrarAuto = (auto) => {
    console.log("Auto seleccionado: " + auto.marca + " " + auto.modelo + " " + auto.tipo + " " + auto.color);
};


const comprarAuto = () => {
    const marca = preguntarMarca();
    const modelo = preguntarModelo();
    const tipo = preguntarTipo();
    const color = preguntarColor();
    const año = preguntarAño();
    const precio = preguntarPrecio();
    const auto = new Auto(marca, modelo, tipo, color);
    mostrarAuto(auto);
};

comprarAuto ();


alert("Le enviaremos un mail con los autos mas recomendados segun sus necesidades!!");
