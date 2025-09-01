function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // ele mostra a variável a
        console.log(b); // mostra a variável b
    }
    console.log(a); // mostra a variável a
    console.log(b); // não mostra a variável b pois está fora do bloco
}
testeEscopo();