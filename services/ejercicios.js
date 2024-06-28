let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")


export function ejercicio1() {
    contenido.innerHTML = `1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
imprima en la consola "¡Woof!" junto al nombre del perro
<br><br>Ingrese 0 para volver al inicio
`
    class perro{
        constructor(nombre){
            this.nombre = nombre
        }
         ladrar(){
            respuesta.innerHTML = `¡Woof! ${this.nombre}`;
        }
    }
    let perro1 = new perro("tony");
    perro1.ladrar()


    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}


export function ejercicio2() {
    contenido.innerHTML = `2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
ladrar() de la instancia.
<br><br>Ingrese 0 para volver al inicio
`
    class perro{
        constructor(nombre){
            this.nombre = nombre
        }
        ladrar(){
            respuesta.innerHTML = `¡Woof! ${this.nombre}`;
        }
    }
    let instancia = new perro("Linda");    
    instancia.ladrar()


    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio3() {
    contenido.innerHTML = `3. * Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.
* Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
Deposita 100 en la cuenta llamando al método depositar().
<br><br>
<input id="depositarDinero" type="text">
<button id="enviar">Depositar</button>
<br><br>Ingrese 0 para volver al inicio
<div id="respuesta"></div>`;  // Added respuesta div to show output

    let depositarDinero = document.getElementById("depositarDinero");
    let enviar = document.getElementById("enviar");
    let respuesta = document.getElementById("respuesta");

    class CuentaBancaria {
        constructor(titular, saldo = 0) {
            this.titular = titular;
            this.saldo = saldo;
        }

        depositar(cantidad) {
            this.saldo += cantidad;
            respuesta.innerHTML = `Se depositaron ${cantidad} unidades. Nuevo saldo: ${this.saldo}`;
        }
    }

    let miCuenta = new CuentaBancaria("samuel",20000);

    enviar.addEventListener('click', function() {
        let cantidadDinero = parseFloat(depositarDinero.value);
        if (!isNaN(cantidadDinero)) {
            miCuenta.depositar(cantidadDinero);
        } else {
            respuesta.innerHTML = "Por favor, ingrese una cantidad válida.";
        }
    });

    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio4() {
    contenido.innerHTML = `
        4. * Crea una clase llamada "Empleado" que tenga una propiedad "salario" y un getter y setter para el salario. El
        setter debe verificar que el salario sea un número positivo antes de establecerlo. Luego, crea una instancia
        de Empleado y establece su salario utilizando el setter. Intenta establecer un salario negativo y observa si
        el setter realiza la validación correctamente.
        <br><br>
        <input id="nuevoSalario" type="text" placeholder="Ingrese el salario">
        <button id="establecerSalario">Establecer Salario</button>
        <div id="respuestaSalario"></div>
        <br><br>Ingrese 0 para volver al inicio
    `;

    let nuevoSalario = document.getElementById("nuevoSalario");
    let establecerSalario = document.getElementById("establecerSalario");
    let respuestaSalario = document.getElementById("respuestaSalario");

    class Empleado {
        constructor(salario = 0) {
            this._salario = salario;
        }

        get salario() {
            return this._salario;
        }

        set salario(nuevoSalario) {
            if (nuevoSalario > 0) {
                this._salario = nuevoSalario;
                respuestaSalario.innerHTML = `Salario establecido en ${nuevoSalario}.`;
            } else {
                respuestaSalario.innerHTML = "El salario debe ser un número positivo.";
            }
        }
    }

    let empleado = new Empleado();

    establecerSalario.addEventListener('click', function() {
        let salarioIngresado = parseFloat(nuevoSalario.value);
        if (!isNaN(salarioIngresado)) {
            empleado.salario = salarioIngresado;
            respuestaSalario.innerHTML += `<br>Salario actual: ${empleado.salario}`;
        } else {
            respuestaSalario.innerHTML = "Por favor, ingrese un valor válido.";
        }
    });

    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio5() {
    contenido.innerHTML = `
        2. * Crea una clase llamada "Cuadrado" que tenga una propiedad "lado" y un getter y setter para el lado. Además,
        agrega un método llamado "calcularArea" que use el valor del lado para calcular y devolver el área de un
        cuadrado. Utiliza el getter y el setter para establecer el valor del lado y calcula el área del cuadrado.
        <br><br>
        <input id="nuevoLado" type="text" placeholder="Ingrese el lado del cuadrado">
        <button id="calcularArea">Calcular Área</button>
        <div id="respuestaArea"></div>
        <br><br>Ingrese 0 para volver al inicio
    `;

    let nuevoLado = document.getElementById("nuevoLado");
    let calcularArea = document.getElementById("calcularArea");
    let respuestaArea = document.getElementById("respuestaArea");

    class Cuadrado {
        constructor(lado = 0) {
            this._lado = lado;
        }

        get lado() {
            return this._lado;
        }

        set lado(nuevoLado) {
            if (nuevoLado > 0) {
                this._lado = nuevoLado;
                respuestaArea.innerHTML = `Lado establecido en ${nuevoLado}.`;
            } else {
                respuestaArea.innerHTML = "El lado debe ser un número positivo.";
            }
        }

        calcularArea() {
            return this._lado * this._lado;
        }
    }

    let cuadrado = new Cuadrado();

    calcularArea.addEventListener('click', function() {
        let ladoIngresado = parseFloat(nuevoLado.value);
        if (!isNaN(ladoIngresado)) {
            cuadrado.lado = ladoIngresado;
            let area = cuadrado.calcularArea();
            respuestaArea.innerHTML += `<br>Área del cuadrado: ${area}`;
        } else {
            respuestaArea.innerHTML = "Por favor, ingrese un valor válido.";
        }
    });

    btn.removeEventListener('click', ejercicio5);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio6() {
    contenido.innerHTML = `
        3. * Crea una clase llamada "UsuariosActivos" la cual tenga una propiedad "usuarios", la cual contendrá un
        arreglo con los nombres de los usuarios activos. Crea un setter y un getter para tal propiedad. Crea un
        método "agregarUsuario".
        <br><br>
        <input id="nuevoUsuario" type="text" placeholder="Ingrese el nombre del usuario">
        <button id="agregarUsuario">Agregar Usuario</button>
        <div id="respuestaUsuarios"></div>
        <br><br>Ingrese 0 para volver al inicio
    `;

    let nuevoUsuario = document.getElementById("nuevoUsuario");
    let agregarUsuario = document.getElementById("agregarUsuario");
    let respuestaUsuarios = document.getElementById("respuestaUsuarios");

    class UsuariosActivos {
        constructor() {
            this._usuarios = [];
        }

        get usuarios() {
            return this._usuarios;
        }

        set usuarios(nuevosUsuarios) {
            if (Array.isArray(nuevosUsuarios)) {
                this._usuarios = nuevosUsuarios;
                this.actualizarRespuesta();
            } else {
                respuestaUsuarios.innerHTML = "Debe proporcionar un arreglo de usuarios.";
            }
        }

        agregarUsuario(nombre) {
            if (nombre && typeof nombre === 'string') {
                this._usuarios.push(nombre);
                this.actualizarRespuesta();
            } else {
                respuestaUsuarios.innerHTML = "Debe proporcionar un nombre de usuario válido.";
            }
        }

        actualizarRespuesta() {
            respuestaUsuarios.innerHTML = `Usuarios activos: ${this._usuarios.join(', ')}`;
        }
    }

    let usuariosActivos = new UsuariosActivos();

    agregarUsuario.addEventListener('click', function() {
        let usuarioIngresado = nuevoUsuario.value.trim();
        if (usuarioIngresado) {
            usuariosActivos.agregarUsuario(usuarioIngresado);
            nuevoUsuario.value = "";
        } else {
            respuestaUsuarios.innerHTML = "Por favor, ingrese un nombre de usuario.";
        }
    });

    btn.removeEventListener('click', ejercicio6);
    btn.addEventListener('click', handleFinalOption);
}



function handleFinalOption() {
    let option = input.value.trim();
    error.textContent = "";

    switch (option) {
        case "0":
            inicio()
            error.textContent = "";
            respuesta.textContent = "";
            btn.removeEventListener('click', handleFinalOption);
            break;
        default:
            error.textContent = "Esta opción no es válida";
            break;
    }
}