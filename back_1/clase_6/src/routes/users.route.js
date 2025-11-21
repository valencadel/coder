import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const user = [];

// uploader.single('avatar') // aca le indico el campo desde el cual voy a recibir el archivo. El campo es el name del input en la peticion.


// dentro de cada ruta puedo tener tantos middlewares como quiera, separados por comas. Estos middlewares se ejecutan en el orden en que se definen. Cada uno se ejecuta por separada y tiene la capacidad de responder por su cuenta, no hace falta que terminen todas las ejecuciones de la ruta.
router.post('/', uploader.single('avatar'), (req, res) => {
  res.json({message: "endpoint de users - metodo post"})
});

export default router;