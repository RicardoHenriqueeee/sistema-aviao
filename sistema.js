// Fase 1 do projeto = para utilizar basta deletar os comentarios /**/ do inicio e fim do codigo
// e comentar os codigos da fase 2 para evitar conflito.
/*
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
*/

// Vamos importar os serviços
import { ServicoPlanoDeVoo } from './planoDeVooClass.js';
import { ServicoPilotos } from './pilotoClass.js';
import { ServicoAeronaves } from './aeronaveClass.js';
import { ServicoAerovias } from './aeroviaClass.js';
import { Piloto } from './pilotoClass.js';
import { AeronaveCarga, AeronavePassageiros, AeronaveParticular } from './aeronaveClass.js';
import { Aerovia } from './aeroviaClass.js';
import { PlanoDeVoo } from './planoDeVooClass.js';

// Instanciando os serviços necessários
const servicoPlanoDeVoo = new ServicoPlanoDeVoo();
const servicoPilotos = new ServicoPilotos();
const servicoAeronaves = new ServicoAeronaves();
const servicoAerovias = new ServicoAerovias();

// Adicionando dados para teste
const piloto1 = new Piloto('1001', 'João', true);
const piloto2 = new Piloto('1002', 'Maria', false);
servicoPilotos.adicionarPiloto(piloto1);
servicoPilotos.adicionarPiloto(piloto2);

const aeronave1 = new AeronaveParticular('PR-A01', 900, 5000, 180, 'Companhia Aérea A');
const aeronave2 = new AeronaveCarga('PR-C01', 850, 6000, 10000, 'Companhia Aérea B');
servicoAeronaves.adicionarAeronave(aeronave1);
servicoAeronaves.adicionarAeronave(aeronave2);

const aerovia1 = new Aerovia('AR001', 'POA', 'FLO', 500);
const aerovia3 = new Aerovia('AR003', 'POA', 'FLO', 500);
const aerovia2 = new Aerovia('AR002', 'FLO', 'POA', 600);
servicoAerovias.adicionarAerovia(aerovia1);
servicoAerovias.adicionarAerovia(aerovia2);
servicoAerovias.adicionarAerovia(aerovia3);


// Listar Aerovias Existentes entre dois aeroportos
console.log("=====================================================================================================================================================")
servicoAerovias.listarAeroviasEntreAeroportos('POA', 'FLO');
console.log("=====================================================================================================================================================\n")

// Passando pelas verificações antes de ser criado o planoo de voo
console.log("=====================================================================================================================================================")
servicoPlanoDeVoo.submeterPlanoDeVoo(piloto1, aeronave1, '2024-08-18', 14, aerovia1, 25000);
servicoPlanoDeVoo.submeterPlanoDeVoo(piloto1, aeronave1, '2024-08-28', 14, aerovia1, 27000);
servicoPlanoDeVoo.submeterPlanoDeVoo(piloto1, aeronave2, '2024-08-08', 6, aerovia1, 25000);
servicoPlanoDeVoo.submeterPlanoDeVoo(piloto1, aeronave2, '2024-08-12', 2, aerovia1, 25000);
console.log("=====================================================================================================================================================\n")

// Listar Altitudes Livres em uma determinada aerovia em um determinado horário
console.log("=====================================================================================================================================================")
servicoAerovias.listarAltitudesLivres('AR001', '2024-08-28', 14); // No caso esse seria o id 1 por ser criado primeiro
console.log("=====================================================================================================================================================\n")

// Lista os plano de voo criados por id
console.log("=====================================================================================================================================================")
servicoPlanoDeVoo.listarPlanoDeVoo(2);
console.log("=====================================================================================================================================================")
