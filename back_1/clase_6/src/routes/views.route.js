import { Router } from "express";

const router = Router();


router.get('/',(req, res) => {
    res.render('perfil', {
      name: 'Valentin',
      rol: 'admin',
      isAdmin: true,
      notas: [{curso: 'Node.js', nota: 10}, {curso: 'React.js', nota: 9}, {curso: 'Python', nota: 8}]
    })
    // primer parametro -> nombre de la vista. define la vista index.handlebars
    // segundo parametro -> data que va a recibir la vista
});

export default router;