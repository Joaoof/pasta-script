import fs from 'fs'

let ler = JSON.parse(fs.readFileSync('./files.json'))

function onPath(pasta) {
    if (ler[pasta] === "on") {
        console.log(`A pasta ${pasta} está ligada`)
    } else if (ler[pasta] === "off") {
        console.log(`A pasta ${pasta} está desligada`);
    } else {
        console.log(`O estado da pasta ${pasta} não é valido`);
    }
}


fs.rename('./pdfs', './seila', (err) => {
    if (err) {
        console.log("Erro ao renomeia")
    }
})

const estado = "on" 
if(!estado) {
    console.error('Os estado podem ser somente on, ou off');
}
ler["./pdf/"] = estado;
ler["./pdf/teste.txt"] = estado;

// Atualiza o caminho da pasta no objeto JSON
ler = Object.fromEntries(
    Object.entries(ler).map(([key, value]) => [
      key.replace('./pdf/', './seila/'),
      value
    ])
  );

// Salva as alterações no arquivo JSON
fs.writeFileSync('./files.json', JSON.stringify(ler))

onPath("./pdf/")
onPath("./pdf/teste.txt")





