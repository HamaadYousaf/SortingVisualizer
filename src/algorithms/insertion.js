//CREATED BY: HAMAAD YOUSAF 2022-07-05

import { sleep } from "../helper";

export async function insertion(arr, speed, display) {
    let n = arr.length;
    display(arr, arr.length, "highlight", arr[0])
    await sleep(speed / 2)
    display(arr, arr.length, "regular", 0)
    await sleep(speed / 2)

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            let temp = arr[j + 1]
            display(arr, arr.length, "highlight", arr[j + 1])
            await sleep(speed / 4)
            display(arr, arr.length, "regular", 0)
            arr[j + 1] = arr[j];
            arr[j] = temp
            display(arr, arr.length, "highlight", arr[j])
            await sleep(speed / 4)
            display(arr, arr.length, "regular", 0)
            j--;
        }
        arr[j + 1] = current;
        display(arr, arr.length, "highlight", arr[j + 1])
        await sleep(speed / 2)
        display(arr, arr.length, "regular", 0)
        await sleep(speed / 2)
    }

    display(arr, arr.length, "done", 0)
    await sleep(100)
    display(arr, arr.length, "regular", 0)
}
