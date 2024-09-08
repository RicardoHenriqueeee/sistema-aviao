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

    // Método para verificar a disponibilidade de uma altitude em uma data e horário
    verificarDisponibilidade(altitude, data, horario) {
        if (!this.#slotsOcupados[data]) return true;
        if (!this.#slotsOcupados[data][altitude]) return true;
        return !this.#slotsOcupados[data][altitude].includes(horario);
    }

    // Método para ocupar uma altitude em um horário específico
    ocuparSlot(altitude, data, horario) {
        if (!this.#slotsOcupados[data]) {
            this.#slotsOcupados[data] = {};
        }
        if (!this.#slotsOcupados[data][altitude]) {
            this.#slotsOcupados[data][altitude] = [];
        }
        this.#slotsOcupados[data][altitude].push(horario);
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

    listarAeroviasEntreAeroportos(origem, destino) {
        const aerovias = this.listarAerovias(origem, destino);
        if (aerovias.length === 0) {
            console.log(`Nenhuma aerovia encontrada entre ${origem} e ${destino}.`);
        } else {
            console.log(`Aerovias entre ${origem} e ${destino}:`);
            aerovias.forEach(aerovia => console.log(aerovia.toString()));
        }
    }

    listarAltitudesLivres(aeroviaIdentificador, data, horario) {
        const aerovia = this.recuperarAeroviaPorIdentificador(aeroviaIdentificador);
        if (!aerovia) {
            console.log(`Aerovia ${aeroviaIdentificador} não encontrada.`);
            return;
        }

        const altitudesLivres = [];
        for (let altitude = 25000; altitude <= 35000; altitude += 1000) {
            if (aerovia.verificarDisponibilidade(altitude, data, horario)) {
                altitudesLivres.push(altitude);
            }
        }

        if (altitudesLivres.length === 0) {
            console.log(`Nenhuma altitude livre na aerovia ${aeroviaIdentificador} na data ${data} às ${horario}.`);
        } else {
            console.log(`Altitudes livres na aerovia ${aeroviaIdentificador} na data ${data} às ${horario}: ${altitudesLivres.join(', ')} ft`);
        }
    }

}
