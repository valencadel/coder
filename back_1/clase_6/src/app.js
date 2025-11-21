import express from 'express';
import PetsRoutes from './routes/pets.route.js';
import UsersRoutes from './routes/users.route.js';
import path from 'node:path';
import handlebars from 'express-handlebars';
import viewRoutes from './routes/views.route.js';

const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine()); // le defino a express que va a usar el motor de plantilla con la extension handlebars
app.set('views', path.join(process.cwd(), 'src', 'views')); // le defino a express que va a usar las vistas en la carpeta views
app.set('view engine', 'handlebars');

// si no le defino un path en el primer parametro al use, lo defaultea en '/'
// app.use(express.static(path.join(process.cwd(), 'src', 'public')))
// ahora el html solo me lo muestra si ponge /static en la url
app.use('/static', express.static(path.join(process.cwd(), 'src', 'public')))

// si le especifico a use el primer parametro de ruta, lo aplica siempre a la misma
app.use('/api/users', UsersRoutes);
app.use('/api/pets', PetsRoutes);
app.use('/', viewRoutes)

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
})