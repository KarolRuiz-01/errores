class ErrorIDCambiado extends Error {
    constructor(message) {
        super(message);
        this.name = "ID incorrecto";
    }
}
class ErrorNombreCambiado extends Error {
    constructor(message) {
        super(message);
        this.name = "nombre incorrecto";
    }
}
class ErrorProCambiado extends Error {
    constructor(message) {
        super(message);
        this.name = "profesión incorrecto";
    }
}
let BaseDeDatosCambiada = [
    {
        id: 'a',
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profesion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profesion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profesion: "Ing Sistemas Computacionales"
    },
    {
        id: 4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profesion: "Ing Industrial"
    },
    {
        id: 5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profesion: "Lic Derecho"
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
    },
];
const searchCambiada = () => {
    let inputIdCambiado = document.getElementById('inputId').value;
    let resultDivCambiada = document.getElementById('result');
    let errorDivCambiada = document.getElementById('error');
    
    resultDivCambiada.innerHTML = '';
    errorDivCambiada.innerHTML = '';

    try {
        if (!inputIdCambiado) throw new ErrorIDCambiado('Ingresa un ID');

        let recordCambiado = BaseDeDatosCambiada.find(item => item.id == inputIdCambiado);

        if (!recordCambiado) throw new ErrorIDCambiado('No se encontró ningun registro con ese ID');

        if (typeof recordCambiado.id !== 'number' && isNaN(Number(recordCambiado.id))) {
            throw new ErrorIDCambiado('El ID no es un número');
        }

        if (!recordCambiado.nombre) throw new ErrorNombreCambiado('No se encuentra un nombre');

        if (!('profesion' in recordCambiado)) throw new ErrorProCambiado('La propiedad "profesion" no está definida');

        resultDivCambiada.innerHTML = `
            <p><strong>ID:</strong> ${recordCambiado.id}</p>
            <p><strong>Nombre:</strong> ${recordCambiado.nombre}</p>
            <p><strong>Apellido:</strong> ${recordCambiado.apellido}</p>
            <p><strong>Edad:</strong> ${recordCambiado.edad}</p>
            <p><strong>Profesión:</strong> ${recordCambiado.profesion}</p>
        `;
        
    } catch (error) {
        if (error instanceof ErrorIDCambiado || error instanceof ErrorNombreCambiado || error instanceof ErrorProCambiado) {
            errorDivCambiada.textContent = error.message;
        } else {
            errorDivCambiada.textContent = 'ERROR';
        }
    }
};
document.getElementById('searchBtn').addEventListener('click', searchCambiada);

document.getElementById('inputId').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchCambiada();
    }
});
