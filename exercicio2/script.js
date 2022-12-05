let numero = +prompt(`Digite um número:`)
console.log(`Tabuada do ${numero}`)
for(i = 0; i < 10; i ++ ){
    console.log(`${numero} x ${i + 1} = ${numero*(i+1)}`)
}