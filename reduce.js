// it is collection
const order = [
    {
        id: 1,
        name: "showel",
        price: 1000,
        quantity: 15,
    },
    {
        id: 2,
        name: "mixer",
        price: 6700,
        quantity: 4,
    },
    {
        id: 3,
        name: "hamer",
        price: 850,
        quantity: 150,
    },
    {
        id: 4,
        name: "hemlet",
        price: 1560,
        quantity: 37,
    },
]


const allprice = order.reduce( (acc, el) => {
    return acc + (el.price * el.quantity);
}, 0);

// function functionMy (el) {
//     return acc + (el.price * el.quantity)
// }

console.log(`The whole price is ${allprice} dollars`)