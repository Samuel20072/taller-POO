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
<br><br>Ingrese 0 para volver al inicio`;

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

    let miCuenta = new CuentaBancaria("samuel", 20000);
    miCuenta.depositar(200);

    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio4() {
    contenido.innerHTML = `3. * Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.
* Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
Deposita 100 en la cuenta llamando al método depositar().
<br><br>Ingrese 0 para volver al inicio`;

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

    let miCuenta = new CuentaBancaria("samuel", 20000);
    miCuenta.depositar(200);

    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}

