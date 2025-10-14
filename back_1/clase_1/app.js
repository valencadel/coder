// let nombre = 'Valentin';
// console.log(nombre);

// const saludar = (nombre) => {
//     console.log(`Hola ${nombre}`);
// }

// saludar(nombre);
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product = {title, description, price, thumbnail, code, stock}) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son requeridos');
            return;
        }
        if (this.products.find(product => product.code === code)) {
            console.log('El codigo ya existe');
            return;
        }
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}