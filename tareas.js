

function escribirJSON(tarea){
    var fs = require('fs');
    //Leo las tareas actuales
    let tareasActuales = fs.readFileSync('./tareas.json');
    //Las paso a array    
    let tareasActualesArr = JSON.parse(tareasActuales);
    //Agrego la nueva
    tareasActualesArr.push(tarea);
    //Lo paso a JSON
    let datosAGuardar = JSON.stringify(tareasActualesArr);
    //Lo escribo en el archivo
    fs.writeFileSync('./tareas.json', datosAGuardar);
}

module.exports = escribirJSON;