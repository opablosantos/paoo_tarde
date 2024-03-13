//declaração constantes
// const nome = "Pablo"
// console.log(nome)
// nome = "Pedro"
// const endereco = 'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Santos`
// console.log(sobrenome)

// console.log('Me chamo ' + nome + '. Meu sobrenome é ' + sobrenome + '.')
// console.log(`Me chamo ${nome}. Meu sobrenome é ${sobrenome}`)

// function soma(a, b) {
//     return a + b
// }

// const dobro = function (n) {
//     return 2 * n
// }

// const result = dobro(6)
// console.log(result)

// const triplo = function(n = 5) {
//     return 3 * n
// }

// console.log(triplo())
// console.log(triplo(10))

// const f = () => {}

// const umArgumento (n) => {
//     console.log(n)
// }

// const umArgumento = n => {
//     console.log(n)
// }

// const soUmaLinha =  () => console.log("oi")

// const teste1 = (a, b) => {
//     return a + b
// }

// const teste2 = (a , b) => a + b

// const hello = () => console.log("Hello")
// hello()

// const dobro = (valor) => valor * 2

// let triplo = (valor) => {
//     return valor * 3
// }

// const ehPar = n => n % 2 === 0
// console.log(ehPar(10))

// function executa(f) {
//     f()
// }

// executa(function(a, b){return a + b})

// function produzUmaFuncao(a, b, operador) {
//     if (operador === '+')
//         return function(a, b) {
//             a + b
//         }
//     if (operador === '-')
//         return (a, b) => a - b
// }

// let umaFuncao = function () {
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()

// function f(funcao) {
//     return funcao()
// }

// f(function() {
//     console.log("Estou sendo passada para f...")
// })

// function g() {
//     function outraFuncao() {
//         console.log("Fui definida por g")
//         return () => 2
//     }
//     return outraFuncao()
// }

// const resultadoDaG = g()
// resultadoDaG()
// g()()()
// g()()

// console.log(f(g)() + f(g)())

// function f() {
//     let nome = 'João'
//     function g() {
//         console.log(nome)
//     }
//     g()
// }

// f()

// function ola() {
//     let nome = 'João'
//     return function() {
//         console.log(`Olá, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult()

// function saudacoesFactory (saudacao, nome) {
//     return function() {
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()

// function eAgora() {
//     let cont = 1

//     function f1() {
//         console.log(cont)
//     }

//     cont++

//     function f2() {
//         console.log(cont)
//     }

//     return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()


//Arrow function:
// function f() {}
// () => {}
// a => {return a * 2}
// a => a * 2

// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 14}
// }

// console.log(pessoa['endereco']['logradouro'])
// console.log(pessoa.endereco.numero)
// console.log(pessoa['endereco'].numero)
// console.log(pessoa.endereco['logradouro'])

// let concessionaria = {
//     CNPJ: '34.613.687/0001-52',
//     endereco: {
//         tipoLogradouro: 'Avenida',
//         logradouro: 'Anhaia Melo',
//         numero: '1300',
//         bairro: 'Vila Ema',
//         cep: '06331-150'
//     }
// }

// let estoque = {
//     carros: [
//         {
//             marca: 'vw',
//             modelo: 'gol',
//             ano: 2019
//         },
//         {
//             marca: 'gm',
//             modelo: 'onix',
//             ano: 2021
//         }
//     ]
// }

// let concessionaria = {
//     cnpj: '12345678901234',
//     endereco: {
//         logradouro: 'Rua J',
//         numero: 50,
//         bairro: 'Vila Estrela'
//     },
//     carros: [
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             ano: 2015
//         },
//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             ano: 1966
//         }
//     ]
// }

// console.log(concessionaria.carros[1].marca)

// for (let carro of concessionaria.carros) {
//     console.log(`Marca: ${carro.marca}. Modelo: ${carro.modelo}`)
// }

// let calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: function(a, b) {
//         return a -b
//     }
// }

// console.log(calculadora.soma(2, 3))
// console.log(calculadora.subtracao(2, 3))

// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última...')

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// function demorada() {
//     //pegar o horario atual do sistema e deslocar ele 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
// }

// const a = 2 + 5
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)

// function demorada() {
//     //pegar o horario atual do sistema e deslocar ele 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// setTimeout(function(){
//     const d = demorada()
//     console.log('d: ' + d)
// }, 500)

// const e = 2 + a + b
// console.log('e: ' + e)

// const f1 = () => console.log('f1')
// const f2 = () => console.log('f2')

// setTimeout(f1, 500)
// setTimeout(f2, 500)
// console.log('fim do script principal')

// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) => {
//         if (erro) {
//             console.log(`Erro: ${erro}`)
//         }
//         else {
//             console.log(conteudo.toString())
//             const resultado = +conteudo.toString() * 10
//             const finalizar = (erro) => {
//                 if (!erro) {
//                     console.log('Conteúdo escrito com sucesso')
//                 }
//                 else {
//                     console.log('Escrita falhou')
//                 }
//             }
//             fs.writeFile('resultado.txt', resultado.toString(), finalizar)
//         }
//     }

//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// const calculoDemorado = (n) => {
//     let p = new Promise((resolve, reject) => {
//         let res = 0
//         for(let i = 1; i <= n; i++)
//             res += i
//         resolve(res)
//     })

//     return p
// }

// const aux = calculoDemorado(3)
// aux.then((resultado) => {
//     console.log(resultado)
// })

// const soma = (a, b) => {
//     return a + b
// }

const soma = (a, b) => {
    let s = new Promise((resolve, reject) => {
        if (a > 0 && b > 0) {
            let res = a + b
            resolve(res)
        }
        else {
            reject('Não use negativos')
        }
    })
    return s
}

// const aux = soma(2, -3)
// aux.then((resultado) => {
//     console.log(resultado)
// })

// soma (2, 7).then(res => {
//     console.log(`Resultado: ${res}`)
// })

// soma(2, 7)
// .then(res => {
//     console.log(`Resultado: ${res}`)
// })
// .catch(erro => console.log(`Erro: ${erro}`))

// soma(-2, 5)
// .then(res => {
//     console.log(`Resultado: ${res}`)
// })
// .catch(erro => console.log(`Erro: ${erro}`))

// function calculoDemorado(n) {
//     let res = 0
//     for (let i = 1; i <= n; i++) res += i
//     return res
// }

// const resultado = calculoDemorado(100)
// console.log(resultado)
// console.log('outra coisa qualquer')

function calculoDemorado(n) {
    let p = new Promise(function(resolve, reject) {
        let res = 0
        for(let i = 1; i <= n; i++) res += i
        resolve(res)
    })
    return p
}

let minhaPromise = calculoDemorado(100)
// then (computação com sucesso)
// catch (computação com falha)
minhaPromise.then((resultado) => console.log(resultado))

function calculoRapidinho(n) {
    return Promise.resolve((n/2) * (n + 1))
}

calculoRapidinho(100).then(resultado => console.log(resultado))