import { v4 as Id } from 'uuid';

const products = [
    {
       id: Id(),
       name: "iPhone 9",
       price: 549,
       description: "An apple mobile which is nothing like apple",
       img: 'https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/c4743a09-625c-4304-9ef1-9a51aa59b634-1_25ed451d-c76a-4404-8c81-cd878d83f082.jpg',
    },
    {
        id: Id(),
        name: 'Tablet',
        price: 700.0,
        description:
            'HERMÈS bag " KELLY II SELLIER 32", coll.: 2022. Epsom leather in the colour noir (black) with gold-plated hardware, strap fastening on the front and a handle. Interior with three compartments, one with zip.',
        img: 'https://m.media-amazon.com/images/G/41/apparel/rcxgs/tile._CB483369916_.gif'
    },
    {
        id: Id(),
        name: 'iphone-Rose',
        price: 135.0,
        description:
            'Hermès "Constance 18" Crossbody Bag is an exquisite piece of craftsmanship. Made from epsom leather and featuring silver hardware, it is both stylish and practical. It comes with the original Hermès branded box and dust bag to keep this timeless piece safe. A perfect accessory for any occasion, this bag is sure to make a statement.',
        img: 'https://www.iphone-cases.nl/media/catalog/product/cache/5/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/moshi-iglaze-armour-iphone-8-plus-7-plus-golden-rose-1.webp'
    }
];

class Shop {
    static getAll() {
        return products;
    }
    static getById(id) {
        console.log("productid");
        return products.find((product) => product.id === id);
       
      
    }
    static add(product) {
        const newProduct = {
            id: Id(),
            ...product
        };
        products.push(newProduct);
        return newProduct;
    }
}

export default Shop;