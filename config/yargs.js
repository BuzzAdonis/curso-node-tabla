const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption:true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'listar',
                        type: 'boolean',
                        default: false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type: 'number',
                        default: 12,
                        describe:'Numero hasta donde llegara la multiplicación'
                    })
                    .check((argv, option) => {
                        if( isNaN( argv.b ) )
                            throw 'Lase tinene que ser un número'

                        return true
                    })
                    .argv;

module.exports = argv;