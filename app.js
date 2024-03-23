const { crearAchivoTablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs',argv.base);

//const [, , arg3 = 'base=5'] =process.argv;
//const [, base = 5] = arg3.split('=');
//const base = 1;

crearAchivoTablaMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado' .rainbow))
    .catch(error => console.log(error));  