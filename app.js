import fs from 'fs'

const ler = JSON.parse(fs.readFileSync('./files.json'))

function onPath(pasta) {
    if (ler[pasta] === "on") {
        console.log(`A pasta ${pasta} está ligada`)
    } else if (ler[pasta] === "off") {
        console.log(`A pasta ${pasta} está desligada`);
    } else {
        console.log(`O estado da pasta ${pasta} não é valido`);
    }
}

const estado = "" 
if(!estado) {
    console.error('Os estado podem ser somente on, ou off');
}
ler["./pdf/"] = estado;
ler["./pdf/teste.txt"] = estado;

// Salva as alterações no arquivo JSON
fs.writeFileSync('./files.json', JSON.stringify(ler))

onPath("./pdf/")
onPath("./pdf/teste.txt")





