class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.ValorActual = '';
        this.ValorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
    }
    borrar() {
        this.ValorActual = this.ValorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.ValorActual = '';
        this.ValorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.ValorAnterior = this.ValorActual || this.ValorAnterior;
        this.ValorActual = "";
        this.imprimirValores();
    }


    agregarNumero(numero) {
        if(numero === "." && this.ValorActual.includes(".")) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.ValorActual;
        this.displayValorAnterior.textContent = `${this.ValorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const ValorAnterior = parseFloat(this.ValorAnterior);
        const ValorActual = parseFloat(this.ValorActual);

        if(isNaN (ValorActual) || isNaN(ValorAnterior) ) return
        this.ValorActual = this.calculador[this.tipoOperacion](ValorAnterior, ValorActual);
    }
}