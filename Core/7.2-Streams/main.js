/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 8.2: Pipe Streams
*/

/// PIPING
//var fs = require("fs");

// Create a readable stream
//var readerStream = fs.createReadStream('a-wing.txt');

// Create a writable stream
//var readerStreamer2 = fs.createReadStream('j-type-327.txt');

// Se lee input.txt y se agrega la data a output.txt
//readerStream.pipe(writerStream);

// Salvar el pipe TODO.
// Ejericio: trate de salvar el texto en un nuevo archivo

var fs = require("fs");

var readerStream = fs.createReadStream('a-wing.txt');
var readerStream2 = fs.createReadStream('j-type-327.txt');
console.log("Saved with pipe");
var EndFile = fs.createWriteStream('appendedFile.txt');
readerStream.pipe(EndFile);
readerStream2.pipe(EndFile);

// fin de codigo

console.log("Program Ended");