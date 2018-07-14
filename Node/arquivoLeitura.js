const fs = require('fs');

const caminho = __dirname + '/arquivo.json'


// sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(__dirname, caminho);
console.log(conteudo);

// assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // require consegue ler JSON e já converter para objeto o conteúdo
console.log(config.db)

const caminhoTeste = __dirname + '/teste.txt'

/* const teste = fs.readFileSync(caminhoTeste, 'utf-8')
console.log(teste) */

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})