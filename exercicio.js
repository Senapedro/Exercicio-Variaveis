let readlineSync = require('readline-sync');

let nome = readlineSync.question("Digite seu nome: ");
let idade = readlineSync.question("Digite sua idade: ");

idade = parseInt(idade, 10);

if (idade <= 18) {
    console.log(`${nome}, Você ainda é jovem`);
} else if (idade >= 19 && idade <= 25) {
    console.log(`${nome}, cuidado! Você está ficando velho! 😄`);
} else {
    console.log(`${nome}, Está chegando o tão sonhado exame em hahah`);
}

