import fs from 'fs';

fs.writeFileSync('./archivo2.txt', 'Hola Mundo');

if(fs.existsSync('./archivo2.txt')) {
  console.log('El archivo existe');
} else {
  console.log('El archivo no existe');
}
