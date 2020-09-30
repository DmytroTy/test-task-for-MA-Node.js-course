const GOODS_JSON = '[\
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},\
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},\
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},\
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},\
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},\
    {"type": "socks", "color": "blue", "priceForPair": "$6"},\
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},\
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},\
    {"type": "socks", "color": "green", "priceForPair": "$10"},\
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},\
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},\
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},\
    {"type": "socks", "color": "blue", "priceForPair": "$6"}\
    ]';

function calculateCost(good) {
    if (good.type === "socks")
        return good.quantity * good.priceForPair.slice(1);
    else
        return good.quantity * good.price.slice(1);
}

function calculateCostAll(GOODS_JSON) {
    let socks = 0;
    let redHats = 0;
    let costRed = 0;
    let costGreen = 0;
    let costBlue = 0;
    let costAll = 0;
    let goods;

    try {
        goods = JSON.parse(GOODS_JSON);
    } catch (err) {
        console.error(err.message);
        return;
    }

    goods.forEach(good => {
        if (good.quantity) {
            if (good.type === "socks")
                socks += good.quantity;

            if (good.type === "hat" && good.color === "red")
                redHats += good.quantity;

            switch (good.color) {
                case "red":
                    costRed += calculateCost(good);
                    break;
                case "green":
                    costGreen += calculateCost(good);
                    break;
                case "blue":
                    costBlue += calculateCost(good);
            }

            costAll += calculateCost(good);
        }
    });

    console.log(`Socks - ${socks}`);
    console.log(`Red Hats - ${redHats}`);
    console.log(`Red - \$${costRed}, Green - \$${costGreen}, Blue - \$${costBlue}`);

    return costAll;
}

console.log(`The total cost of all goods - \$${calculateCostAll(GOODS_JSON)}`);
