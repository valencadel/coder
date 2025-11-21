import { Router } from 'express';

const router = Router();

const pets = [];

router.post('/', (req, res) => {
  res.json({message: "endpoint de pets - metodo post"})
});

// router.get('/:petId', (req, res) => {
//   const petId = req.params.petId;
//   res.json({message: "endpoint de pets - metodo get"})
// });

export default router;