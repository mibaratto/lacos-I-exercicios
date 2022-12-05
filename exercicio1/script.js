let querCoxinha = prompt(`Você quer coxinha?
Digite "S" para sim e "N" para não`).toUpperCase()

let conta = 0

while( querCoxinha === "S"){
    conta = conta + 2.50
    querCoxinha = prompt(`Você quer mais coxinha? \n Digite "S" para sim e "N" para não`).toUpperCase()
}
console.log(`Sua conta: ${conta}`)