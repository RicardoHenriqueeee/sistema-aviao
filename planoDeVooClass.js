export class PlanoDeVoo {
    #id;
    #piloto;
    #aeronave;
    #data;
    #horario;
    #aerovia;
    #altitude;
    #cancelado;

    constructor(id, piloto, aeronave, data, horario, aerovia, altitude) {
        this.#id = id;
        this.#piloto = piloto;
        this.#aeronave = aeronave;
        this.#data = data;
        this.#horario = horario;
        this.#aerovia = aerovia;
        this.#altitude = altitude;
        this.#cancelado = false;
    }

    // Getters
    getId() {
        return this.#id;
    }
    getPiloto() {
        return this.#piloto;
    }
    getAeronave() {
        return this.#aeronave;
    }
    getData() {
        return this.#data;
    }
    getHorario() {
        return this.#horario;
    }
    getAerovia() {
        return this.#aerovia;
    }
    getAltitude() {
        return this.#altitude;
    }
    isCancelado() {
        return this.#cancelado;
    }

    // Setters
    setId(id) {
        this.#id = id;
    }
    setPiloto(piloto) {
        this.#piloto = piloto;
    }
    setAeronave(aeronave) {
        this.#aeronave = aeronave;
    }
    setData(data) {
        this.#data = data;
    }
    setHorario(horario) {
        this.#horario = horario;
    }
    setAerovia(aerovia) {
        this.#aerovia = aerovia;
    }
    setAltitude(altitude) {
        this.#altitude = altitude;
    }
    cancelar() {
        this.#cancelado = true;
    }

    // Preparando toString para exibição
    toString() {
        return `Plano de Voo: ID: ${this.#id} Piloto: ${this.#piloto.getNome()} (Matrícula: ${this.#piloto.getNumeroMatricula()}) Aeronave: ${this.#aeronave.toString()} Data: ${this.#data} Horário: ${this.#horario} Aerovia: ${this.#aerovia.toString()} Altitude: ${this.#altitude} ft Status: ${this.#cancelado ? 'Cancelado' : 'Ativo'}`;
    }
}

export class ServicoPlanoDeVoo {
    #planoDeVoo;

    constructor() {
        this.#planoDeVoo = [];
    }

    adicionarPlanoDeVoo(planoDeVoo) {
        this.#planoDeVoo.push(planoDeVoo);
    }
    criarPlanoDeVoo(id, piloto, aeronave, data, horario, aerovia, altitude) {
        if (!piloto.habilitacaoAtiva) {
            console.log(`Erro: O piloto ${piloto.getNome()} (Matrícula: ${piloto.getNumeroMatricula()}) não está habilitado para voar.`);
            return null;
        }

        if (!aeronave.verificarRestricoes(altitude, horario)) {
            console.log(`Erro: A aeronave ${aeronave.Prefixo} não pode operar na altitude de ${altitude} pés ou no horário ${horario}.`);
            return null;
        }

        if (!aerovia.verificarDisponibilidade(altitude, data, horario)) {
            console.log(`Erro: O slot na aerovia ${aerovia.identificador} não está disponível na data ${data} às ${horario} na altitude de ${altitude} pés.`);
            return null;
        }

        let planoDeVoo = new PlanoDeVoo(id, piloto, aeronave, data, horario, aerovia, altitude);
        aerovia.ocuparSlot(altitude, data, horario);
        console.log(`Plano de voo ${id} criado com sucesso!`);
        return planoDeVoo;
    }
}

// Criando planos de voo
let planoDeVoo1 = criarPlanoDeVoo(1, piloto1, aeronave1, '2024-08-18', '14:00', aerovia1, 26000);
let planoDeVoo2 = criarPlanoDeVoo(2, piloto2, aeronave3, '2024-08-18', '15:00', aerovia1, 27000);
let planoDeVoo3 = criarPlanoDeVoo(3, piloto3, aeronave2, '2024-08-18', '16:00', aerovia1, 28000);

