// --Aeronave--
export class Aeronave {
    #prefixo;
    #tipo;
    #velocidadeCruzeiro;
    #autonomia;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
        this.#prefixo = prefixo;
        this.#tipo = tipo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }

    // Getters
    getPrefixo() {
        return this.#prefixo;
    }

    getTipo() {
        return this.#tipo;
    }

    getVelocidadeCruzeiro() {
        return this.#velocidadeCruzeiro;
    }

    getAutonomia() {
        return this.#autonomia;
    }

    // Setters
    setPrefixo(prefixo) {
        this.#prefixo = prefixo;
    }

    setTipo(tipo) {
        this.#tipo = tipo;
    }

    setVelocidadeCruzeiro(velocidadeCruzeiro) {
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
    }

    setAutonomia(autonomia) {
        this.#autonomia = autonomia;
    }
    // Preparando toString para exibição
    toString() {
        return `Aeronave: ${this.#prefixo}, Tipo: ${this.#tipo}, Velocidade Cruzeiro: ${this.#velocidadeCruzeiro} km/h, Autonomia: ${this.#autonomia} km`;
    }
}

// --AeronaveParticular--
export class AeronaveParticular extends Aeronave {
    #empresaManutencao;

    constructor(prefixo, velocidadeCruzeiro, autonomia, empresaManutencao) {
        super(prefixo, 'Particular', velocidadeCruzeiro, autonomia);
        this.#empresaManutencao = empresaManutencao;
    }

    getEmpresaManutencao() {
        return this.#empresaManutencao;
    }

    setEmpresaManutencao(empresaManutencao) {
        this.#empresaManutencao = empresaManutencao;
    }

    toString() {
        return `${super.toString()}, Empresa Responsável: ${this.#empresaManutencao}`;
    }
}

// --AeronaveComercial--
export class AeronaveComercial extends Aeronave {
    #companhiaAerea;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, companhiaAerea) {
        super(prefixo, tipo, velocidadeCruzeiro, autonomia);
        this.#companhiaAerea = companhiaAerea;
    }

    getCompanhiaAerea() {
        return this.#companhiaAerea;
    }

    setCompanhiaAerea(companhiaAerea) {
        this.#companhiaAerea = companhiaAerea;
    }

    toString() {
        return `${super.toString()}, Companhia Aérea: ${this.#companhiaAerea}`;
    }
}

// --AeronavePassageiros--
export class AeronavePassageiros extends AeronaveComercial {
    #capacidadePassageiros;

    constructor(prefixo, velocidadeCruzeiro, autonomia, capacidadePassageiros, companhiaAerea) {
        super(prefixo, 'Comercial de Passageiros', velocidadeCruzeiro, autonomia, companhiaAerea);
        this.#capacidadePassageiros = capacidadePassageiros;
    }

    getCapacidadePassageiros() {
        return this.#capacidadePassageiros;
    }

    setCapacidadePassageiros(capacidadePassageiros) {
        this.#capacidadePassageiros = capacidadePassageiros;
    }
}

// --AeronaveCarga--
export class AeronaveCarga extends AeronaveComercial {
    #capacidadeCarga;

    constructor(prefixo, velocidadeCruzeiro, autonomia, capacidadeCarga, companhiaAerea) {
        super(prefixo, 'Comercial de Carga', velocidadeCruzeiro, autonomia, companhiaAerea);
        this.#capacidadeCarga = capacidadeCarga;
    }

    getCapacidadeCarga() {
        return this.#capacidadeCarga;
    }

    setCapacidadeCarga(capacidadeCarga) {
        this.#capacidadeCarga = capacidadeCarga;
    }
}

// --ServicoAeronaves--
export class ServicoAeronaves {
    #aeronaves;

    constructor() {
        this.#aeronaves = [];
    }

    adicionarAeronave(aeronave) {
        this.#aeronaves.push(aeronave);
    }

    recuperarAeronavePorPrefixo(prefixo) {
        return this.#aeronaves.find(aeronave => aeronave.getPrefixo() === prefixo);
    }

    listarAeronaves() {
        return this.#aeronaves.map(aeronave => aeronave.toString());
    }
}
