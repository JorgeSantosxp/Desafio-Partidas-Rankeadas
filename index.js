let resultado = calcularNivel(125, 30);

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

let nivel = "";

switch (true) {
    case resultado < 10:
        nivel = 'Ferro';
        break;
    case resultado >= 11 && resultado <= 20:
        nivel = 'Bronze';
        break;
    case resultado >= 21 && resultado <= 50:
        nivel = 'Prata';
        break;
    case resultado >= 51 && resultado <= 80:
        nivel = 'Ouro';
        break;
    case resultado >= 81 && resultado <= 90:
        nivel = 'Diamante';
        break;
    case resultado >= 91 && resultado <= 100:
        nivel = 'Lendário';
        break;
    default:
        nivel = 'Imortal';
}

console.log("O Herói tem um saldo de " + resultado + " e está no nível de " + nivel);
