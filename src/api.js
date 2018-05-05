import { resolve } from "url";

let allProducts = [
    {
        id: 1,
        name: 'BasketBall',
        description: 'A round and bouncy ball of highest quality',
        price: 6
    },
    {
        id: 2,
        name: 'Alligator Toy',
        description: 'A cuddly alligator soft toy',
        price: 10
    },
    {
        id: 3,
        name: 'RC Car',
        description: 'A red rc car with huge battery life.',
        price: 25
    }
]

export const fetchAllProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allProducts)
        }, 3000)
    })   
}