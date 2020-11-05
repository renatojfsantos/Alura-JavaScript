// class Cliente{
//   nome;
//   cpf;
//   agencia;
//   saldo;
// }

// const cliente1 = new Cliente();
// const cliente2 = new Cliente();

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;


// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;
// cliente2.agencia = 1001;
// cliente2.saldo = 0;


// const cliente3Nome = "Alice";
// const cliente3CPF = 88822233309;
// const cliente3Agencia = 1001;
// const cliente3Saldo = 0;
// console.log(cliente1, cliente2);

//class Cliente{
//  nome;
//  cpf;
//}

//class ContaCorrente{
//  agencia;
//   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
//  _saldo = 0;
//  sacar(valor){
//    if(this._saldo >= valor){
//        this._saldo -= valor;
//        return valor;
//    }
//}

//depositar(valor){
//    if(valor <= 0)
//    {
//        return;
//    } 
//    this._saldo += valor;           
//}
//}
//const cliente1 = new Cliente();
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233309;

//const cliente2 = new Cliente();
//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;


//const contaCorrenteRicardo = new ContaCorrente();
//contaCorrenteRicardo.agencia = 1001;

//contaCorrenteRicardo.depositar(-100);
//contaCorrenteRicardo.depositar(100);
//contaCorrenteRicardo.depositar(100);

//const valorSacado = contaCorrenteRicardo.sacar(50);
//console.log(valorSacado);

//console.log(contaCorrenteRicardo);

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
