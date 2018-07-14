const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = funcionarios => funcionarios.genero == 'F' && funcionarios.pais == 'China'

const menorSalario = function(menor,atual) {
    if(atual.salario < menor.salario)
    {
        menor = salario
    }
    return menor
}

const menorSalario2 = function(menor,atual) {
        
    return menor.salario < atual.salario ? menor : atual
}

axios.get(url).then(response => {
    funcionarios = response.data
    console.log(funcionarios.filter(mulheresChinesas).reduce(menorSalario2))
})

