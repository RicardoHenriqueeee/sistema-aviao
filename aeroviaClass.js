// --Aerovia--
export class Aerovia {
    #identificador;
    #origem;
    #destino;
    #tamanho;
    #slotsOcupados;

    constructor(identificador, origem, destino, tamanho) {
        this.#identificador = identificador;
        this.#origem = origem;
        this.#destino = destino;
        this.#tamanho = tamanho;
        this.#slotsOcupados = {};
    }

    // Getters
    getIdentificador() {
        return this.#identificador;
    }

    getOrigem() {
        return this.#origem;
    }

    getDestino() {
        return this.#destino;
    }

    getTamanho() {
        return this.#tamanho;
    }

    getSlotsOcupados() {
        return this.#slotsOcupados;
    }

    // Setters
    setIdentificador(identificador) {
        this.#identificador = identificador;
    }

    setOrigem(origem) {
        this.#origem = origem;
    }

    setDestino(destino) {
        this.#destino = destino;
    }

    setTamanho(tamanho) {
        this.#tamanho = tamanho;
    }

    // Método toString para exibir as informações da aerovia
    toString() {
        return `Aerovia ${this.#identificador} (Origem: ${this.#origem}, Destino: ${this.#destino}, Tamanho: ${this.#tamanho} km)`;
    }
}


// --ServicoAerovias--
export class ServicoAerovias {
    #aerovias;

    constructor() {
        this.#aerovias = [];
    }

    adicionarAerovia(aerovia) {
        this.#aerovias.push(aerovia);
    }

    listarAerovias(origem, destino) {
        return this.#aerovias.filter(aerovia => aerovia.getOrigem() === origem && aerovia.getDestino() === destino);
    }

    recuperarAeroviaPorIdentificador(identificador) {
        return this.#aerovias.find(aerovia => aerovia.getIdentificador() === identificador);
    }

    verificarDisponibilidade(altitude, data, horario) {
        if (!this.slotsOcupados[data]) return true;
        if (!this.slotsOcupados[data][altitude]) return true;
        return !this.slotsOcupados[data][altitude].includes(horario);
    }

    ocuparSlot(altitude, data, horario) {
        if (!this.slotsOcupados[data]) {
            this.slotsOcupados[data] = {};
        }
        if (!this.slotsOcupados[data][altitude]) {
            this.slotsOcupados[data][altitude] = [];
        }
        this.slotsOcupados[data][altitude].push(horario);
    }
}