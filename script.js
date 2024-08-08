const products = [
    {
        name: "moloko",
        price: 12000,
        type: "milk"
    },
    {
        name: "cheese",
        price: 67000,
        type: "milk"
    },
    {
        name: "banana",
        price: 25000,
        type: "fruit"
    },
    {
        name: "apple",
        price: 8000,
        type: "fruit"
    },
    {
        name: "vodka",
        price: 32000,
        type: "alcohole"
    },
    {
        name: "beer",
        price: 12000,
        type: "alcohole"
    },
]

let typesOfGood = {
    alcohole: 0,
    fruit: 0,
    milk: 0,
}

for (let item of products) {
    let key = item.type
    if (typesOfGood[key] !== undefined) {
        typesOfGood[key] += item.price;
    }
}

console.log(typesOfGood);