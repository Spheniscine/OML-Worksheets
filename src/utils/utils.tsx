import random from "random";

export function shuffle(array: any[]) {
    for (let i = 0; i < array.length - 1; i++) {
        let j = random.int(i, array.length - 1)
        let t = array[i]; array[i] = array[j]; array[j] = t;
    }
}