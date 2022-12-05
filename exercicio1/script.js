let querCoxinha = prompt(`Você quer mais coxinha?`)
let conta = 0

while( querCoxinha === "S"){
    conta = conta + 2.50
    querCoxinha = prompt(`Você quer mais coxinha?`)
}

console.log(conta)