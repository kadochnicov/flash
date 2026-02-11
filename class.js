class Product {
    constructor(name, price, value){
        this.name = name;
        this.price = price;
        this.value = value;
    }

    getPrice(){
        return `${this.price} ${this.value}`
    }
}

class Phone extends Product {
    company = '';
    ceria = '';

    constructor(name, price, value, model){
        super(name, price, value)
        this.company = model.split('-')[0];
        this.seria = model.split('-')[1]
    }

    getData(){
        return `товар типа ${this.name} стоит ${this.getPrice()} речь про ${this.seria} которую выпускает ${this.company} `
        }
}

let phone_001 = new Phone('phone', 650, 'USD', 'google-pixel_7');
let phone_002 = new Phone('phone', 1200, 'BUN', 'neikaja-hyeta');


console.log(phone_001.getData());
console.log(phone_002.getData());