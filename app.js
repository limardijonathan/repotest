const listar = require("./listartareas");
const escribirJSON = require("./tareas");

switch (true) {
    case process.argv[2] === 'listar' :
        listar();
        break;

    case process.argv[2] === 'Agregar' :
        let variable = {"id": 2, "titulo": "Netflix","estado": "En curso"}        
        escribirJSON(variable);
        break;    

    case process.argv.length == 2 :
            console.log("Atencion - Tienes que pasar una accion")
            break;
    default:
        console.log("No entiendo que quieres hacer")
        break;        
}


