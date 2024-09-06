import { Piloto } from './pilotoClass.js';
import { ServicoPilotos } from './pilotoClass.js';
import { AeronavePassageiros } from './aeronaveClass.js';
import { ServicoAeronaves } from './aeronaveClass.js';
import { AeronaveParticular } from './aeronaveClass.js';
import { Aerovia } from './aeroviaClass.js';
import { ServicoAerovias } from './aeroviaClass.js';

// Criando instâncias dos serviços
let servicoPilotos = new ServicoPilotos();
let servicoAeronaves = new ServicoAeronaves();
let servicoAerovias = new ServicoAerovias();

// Adicionando os pilotos
const piloto1 = new Piloto('P001', 'João Silva', true);
const piloto2 = new Piloto('P002', 'Guilherme Rodrigues', true);
const piloto3 = new Piloto('P003', 'Pedro', false);
servicoPilotos.adicionarPiloto(piloto1);
servicoPilotos.adicionarPiloto(piloto2);
servicoPilotos.adicionarPiloto(piloto3);

// Adicionando as aeronaves
let aeronave1 = new AeronaveParticular('PP-ABCD', 500, 2000, 'Tinit');
let aeronave2 = new AeronavePassageiros('PP-EFGH', 900, 5000, 180, 'Companhia Aerea X');
let aeronave3 = new AeronaveParticular('PP-GHIJ', 500, 2000, 'Baldur');
servicoAeronaves.adicionarAeronave(aeronave1);
servicoAeronaves.adicionarAeronave(aeronave2);
servicoAeronaves.adicionarAeronave(aeronave3);

// Adicionando a aerovia
let aerovia1 = new Aerovia('POA-FLO', 'POA', 'FLO', 400);
servicoAerovias.adicionarAerovia(aerovia1);

// Listando pilotos, aeronaves e aerovias
console.log("=====================================================================================");
console.log("Listando os pilotos, aeronaves e aerovias")
console.log(servicoPilotos.listarPilotos());
console.log(servicoAeronaves.listarAeronaves());
console.log(servicoAerovias.listarAerovias('POA', 'FLO').toString());
console.log("=====================================================================================");
console.log("Recuperando por dados especificos");
console.log(servicoAeronaves.recuperarAeronavePorPrefixo('PP-ABCD').toString());
console.log(servicoPilotos.recuperarPilotoPorMatricula('P001').toString());
console.log("=====================================================================================");

// Altitudes livres


console.log("Altitudes livres");
console.log(servicoAerovias.listarAltitudesLivres());
