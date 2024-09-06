// --Piloto--
export class Piloto {
    #numeroMatricula;
    #nome;
    #habilitacaoAtiva;

    constructor(numeroMatricula, nome, habilitacaoAtiva) {
        this.#numeroMatricula = numeroMatricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    // Getters
    getNumeroMatricula() {
        return this.#numeroMatricula;
    }

    getNome() {
        return this.#nome;
    }

    getHabilitacaoAtiva() {
        return this.#habilitacaoAtiva;
    }

    // Setters
    setNumeroMatricula(numeroMatricula) {
        this.#numeroMatricula = numeroMatricula;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setHabilitacaoAtiva(habilitacaoAtiva) {
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    // Preparando toString para exibição
    toString() {
        return `Piloto: ${this.#nome} (Matrícula: ${this.#numeroMatricula}), Habilitação Ativa: ${this.#habilitacaoAtiva}`;
    }
}

// --ServicoPilotos--
export class ServicoPilotos {
    #pilotos;

    constructor() {
        this.#pilotos = [];
    }

    adicionarPiloto(piloto) {
        this.#pilotos.push(piloto);
    }

    recuperarPilotoPorMatricula(numeroMatricula) {
        return this.#pilotos.find(piloto => piloto.getNumeroMatricula() === numeroMatricula);
    }

    listarPilotos() {
        return this.#pilotos.map(piloto => piloto.toString());
    }
}
