"use strict";
// Desafio 2
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Atriz"] = 0] = "Atriz";
    Occupation[Occupation["Pescador"] = 1] = "Pescador";
    Occupation[Occupation["Marinheiro"] = 2] = "Marinheiro";
})(Occupation || (Occupation = {}));
const pessoa1 = {
    nome: "Mateus",
    idade: 24,
    profissao: Occupation.Marinheiro
};
const pessoa2 = {
    nome: "Milene",
    idade: 29,
    profissao: Occupation.Atriz
};
