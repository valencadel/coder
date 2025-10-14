async function cargarOperaciones() {
  try {
    const module = await import('./operaciones.js');
    console.log(module.suma(1, 2));
    console.log(module.resta(1, 2));
    console.log(module.multiplicacion(1, 2));
    console.log(module.division(1, 2));
  } catch (error) {
    console.error('Error al cargar las operaciones:', error); 
  }
}

cargarOperaciones();