// Desafio 2
enum Occupation {
    Atriz,
    Pescador,
    Marinheiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Occupation
}

const pessoa1: Pessoa = {
    nome: "Mateus",
    idade: 24,
    profissao: Occupation.Marinheiro
}

const pessoa2: Pessoa = {
    nome: "Milene",
    idade: 29,
    profissao: Occupation.Atriz
}