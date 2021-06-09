var goodsInCart = [
    {
        title: "Товар 1",
        price: 100,
        count: 2
    },
    {
        title: "Товар 2",
        price: 200,
        count: 4
    },
    {
        title: "Товар 3",
        price: 300,
        count: 6
    }
];



function countBasketPrice() {
    totalInCart = 0;
    for (var goodInCart of goodsInCart) {
        totalInCart += goodInCart.price * goodInCart.count;
        console.log(goodInCart.title + " стоит " + goodInCart.price + " количество " + goodInCart.count + " шт. ");
    }
    console.log("Итого: " + totalInCart);
}

console.log(countBasketPrice());