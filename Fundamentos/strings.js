const escola = "Cod3r";

console.log(escola.charAt(4)); // imprime a letra "r"
console.log(escola.charAt(5)); // imprime um vazio, ao inves de apresentar erro
console.log(escola.charCodeAt(3)); // apresenta o valor do caracter na tabela Unicode
console.log(escola.indexOf('3')); // imprime o caracter "3"

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");

console.log(escola.replace(/\d/, 'e'));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));

