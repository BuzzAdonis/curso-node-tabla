const fileSystem = require('node:fs');

const crearAchivoTablaMultiplicar = async(base = 5, listar = false, hasta = 12 ) => {

    try {
        let salida, consola = '';
    
        consola +=`===================\n`;
        consola +=`Tabla del ${base}\n`;
        consola +=`===================\n`;
    
        for (let index = 0; index <= hasta ;index++) {
            salida +=`${base} ${'X'} ${index} ${'=' } ${base*index}\n`;
            consola +=`${base} ${'X'.green} ${index} ${'='.green } ${base*index}\n`;
        }
    
        if (listar)
            console.log(consola)
    
        fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearAchivoTablaMultiplicar
}