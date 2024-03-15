/*1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média
 aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou
  a mensagem de reprovado para média inferior a 7.0.*/

const prompt = require('prompt-sync')();

const nomealuno = prompt("Digite o nome do aluno? ")
const Nota1 = Number(prompt("Digite a nota 1? "))
const Nota2 = Number(prompt("Digite a nota 2? "))
const Nota3 = Number(prompt("Digite a nota 3? "))
const Nota4 = Number(prompt("Digite a nota 4? "))

const media = (Nota1 + Nota2 + Nota3 + Nota4) / 4

console.log("media " + media)

if(media >= 7){
    console.log("voce foi aprovado")
} else("voce foi reprovado")
