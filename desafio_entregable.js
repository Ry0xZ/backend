class ProductManager {

    constructor() {
        this.products = [];
    }


    generateIds = () => {
        const counter = this.products.length;
        if (counter === 0) {
            return 1;
        } else {
            return (this.products[counter - 1].id) + 1
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("ingrese todos los campos del producto")
            return
        } else {

            const filteredProduct = this.products.find(element => element.code == code)
            const id = this.generateIds();
            if (!filteredProduct) {
                const newProduct = {
                    id: id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                return this.products.push(newProduct);
            } else {
                console.error("El codigo del producto ya existe")
            }

        }

    };

    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        const ProductFound = this.products.find(element => element.id == id)
        if (!ProductFound) {
            console.error("Not Found")
            return
        } else {
            return ProductFound
        }

    }

};



const productmanager = new ProductManager();
productmanager.addProduct("product1", "descr1", "img1", 12, "code1", 300);
productmanager.addProduct("product1", "img1", 12, "code1", 300);
productmanager.addProduct("product1", "descr1", "img2", 12, "code1", 300);
productmanager.addProduct("product1", "descr1", "img3", 12, "code2", 300);
console.log(productmanager.getProducts());
console.log(productmanager.getProductById(1));
console.log(productmanager.getProductById(4));