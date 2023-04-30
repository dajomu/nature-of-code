export function montecarlo() {
    while (true) {
        const randomNumber1 = Math.random();
        if(Math.random() < randomNumber1) {
            return randomNumber1;
        }
    }
}

export function montecarloSquared() {
    while (true) {
        const randomNumber1 = Math.random();
        if(Math.random() < randomNumber1 ** 2) {
            return randomNumber1;
        }
    }
}