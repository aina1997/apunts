function sayHello(name){
  console.log("Hello "+name);
}
//Surt a la terminal posant node app.js la funció
//sayHello("Aina");

//No funciona perque aixo no existeix en node
//console.log(window);


//Node Module System
//console.log(message);

//>Module Wrapper Function
// const log = require("./logger");
// log("Holi guapi");

//Path
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS
// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
// console.log("Total Memory "+totalMemory);
// console.log(`Free Memory ${freeMemory}`);


// File Systrems
// const fs = require("fs");
//
    //Ens ensenyen tots els files
// const files = fs.readdirSync("./");
// console.log(files);
//
// fs.readdir("./", function(err,files){
//     if(err) console.log("Error",err);
//     else console.log("Resultes", files);
// });



//Events
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
//     //Register an listenen
// emitter.on("messageLogged",function(arg){
//   console.log("Oido cocina",arg);
// });
//     //Raise an event
// emitter.emit("messageLogged", {id:1, url:"http//"});
// Extending EventEmitter

    //Register an listenen
// const EventEmitter = require("events");
//
// const Logger = require("./logger");
// const logger = new Logger();
// logger.on("messageLogged",function(arg){
//   console.log("Oido cocina",arg);
// });
// logger.log("message");



//HTTP
const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.write("Que passa guapo");
    res.end();
  }
  if(req.url === "/cute/nums"){
    res.write(JSON.stringify([1,2,3,4,5]));
    res.end();
  }
});
    //Si volem usar lo de dal comentem les 3 linies aquestes
// server.on("Connection", (socket) => {
//   console.log("Tenemos un nuevo aqui");
// });
server.listen(3000);
console.log("Te escucho lucho");
