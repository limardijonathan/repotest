var fs = require('fs');
function listar(){
    var tareas = fs.readFileSync('./tareas.json');
    var arrayTareas = JSON.parse(tareas);

    arrayTareas.forEach(arg1 => {
        console.log(arg1.titulo) 
    });

}
module.exports = listar;