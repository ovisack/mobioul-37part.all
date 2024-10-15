const products =[
    {name:"laptop", price:70000, brand:"lenovo",color:"black"},
    {name:"phone", price:30000, brand:"i phone",color:"red"},
    {name:"computer", price:30000, brand:"intel",color:"tometo"},
    
]


const names=products.map(product=>product.name);
console.log(names);

const brands=products.map(product=>product.brand)
console.log(brands);


const prices=products.map(product=> product.price)
console.log(prices);



const pricesTaka=products.filter(product=> product.price<=500000)
console.log(pricesTaka);