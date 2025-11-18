// multer nos permite manejar archivos de forma sencilla y nos permite guardarlos en el servidor

// en estos archivos utils, suele haber funciones que nos pueden servir en varios archivos y no se repiten en cada archivo, que son reutilizables en varios archivos.

import multer from 'multer';
import path from 'node:path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'src', 'public', 'images'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname) // guarda el archivo dentro de images con el nombre original cargado. Si yo quiero que los archivos que me mandan se carguen con otro nombre, lo debo hacer aca.
  }
})

export const uploader = multer({ storage }); // esto es lo mismo que crear un objeto con la propiedad storage y pasarle storage como valor { storage: storage}