// PlanoDeVoo
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

import { AeronaveParticular, AeronaveCarga, AeronavePassageiros, AeronaveComercial } from './aeronaveClass.js';


export class ServicoPlanoDeVoo {
    #planosDeVoo;
    #ultimoIdPlano;  // Armazenar o último identificador gerado

    constructor() {
        this.#planosDeVoo = [];
        this.#ultimoIdPlano = 0; // Inicializa com 0, ou outro valor apropriado
    }

    // Submeter um plano de voo para aprovação
    submeterPlanoDeVoo(piloto, aeronave, data, horario, aerovia, altitude) {
        // Verifica se o piloto tem habilitação ativa
        if (!piloto.getHabilitacaoAtiva()) {
            console.log(`Plano de voo recusado: O piloto ${piloto.getNome()} não tem habilitação ativa.`);
            return null;
        }

        // Verifica restrições de altitude e horário para diferentes tipos de aeronaves
        if (aeronave instanceof AeronaveParticular && (altitude < 25000 || altitude > 27000)) {
            console.log(`Plano de voo recusado: Aeronave particular ${aeronave.getPrefixo()} só pode voar entre 25.000 e 27.000 pés.`);
            return null;
        }

        if (aeronave instanceof AeronavePassageiros && altitude <= 28000) {
            console.log(`Plano de voo recusado: Aeronave de passageiros ${aeronave.getPrefixo()} só pode voar acima de 28.000 pés.`);
            return null;
        }

        // Aeronaves de carga só podem voar entre meia noite e 6:00 da manhã
        if (!aeronave instanceof AeronaveCarga && (horario > 0 || horario < 7)) {
            console.log(`Plano de voo recusado: Aeronave de carga ${aeronave.getPrefixo()} só pode voar entre meia noite e 6:00 da manhã.`);
            return null;
        }

        // Verifica se a aerovia/altitude estão livres no horário solicitado
        if (!aerovia.verificarDisponibilidade(altitude, data, horario)) {
            console.log(`Plano de voo recusado: A aerovia ${aerovia.getIdentificador()} está ocupada na altitude ${altitude} ft no horário ${horario}.`);
            return null;
        }

        // Aprova o plano de voo
        this.#ultimoIdPlano++;
        const novoPlano = new PlanoDeVoo(this.#ultimoIdPlano, piloto, aeronave, data, horario, aerovia, altitude);

        // Marca a aerovia/altitude como ocupada no horário indicado
        aerovia.ocuparSlot(altitude, data, horario);

        // Armazena o plano de voo no sistema
        this.adicionarPlanoDeVoo(novoPlano);

        console.log(`Plano de voo aprovado com o ID ${novoPlano.getId()}`);
        return novoPlano.getId();
    }

    // Adiciona um plano de voo ao sistema
    adicionarPlanoDeVoo(planoDeVoo) {
        this.#planosDeVoo.push(planoDeVoo);
    }

    listarPlanoDeVoo(id) {
        const planoEncontrado = this.#planosDeVoo.find(plano => plano.getId() === id);
        if (planoEncontrado) {
            console.log(planoEncontrado.toString());
        } else {
            console.log(`Nenhum plano de voo encontrado com o ID ${id}`);
        }
    }
}

