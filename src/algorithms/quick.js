import { sleep } from "../helper";

export async function runQuick(arr, speed, display) {
    let items = arr;
    await quickSort(items, 0, items.length - 1, speed, display);
    display(items, items.length, "done", 0)
    await sleep(100)
    display(items, items.length, "regular", 0)
}

async function quickSort(items, left, right, speed, display) {
    var index;
    if (items.length > 1) {
        index = await partition(items, left, right, speed, display);
        if (left < index - 1) {
            await quickSort(items, left, index - 1, speed, display);
        }
        if (index < right) {
            await quickSort(items, index, right, speed, display);
        }
    }
    return items;
}

async function partition(items, left, right, speed, display) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swap(items, i, j, pivot, speed, display);
            i++;
            j--;
        }
    }
    return i;
}

async function swap(items, leftIndex, rightIndex, pivot, speed, display) {
    const temp = items[leftIndex];
    display(items, items.length, "partition", [items[leftIndex], pivot, items[rightIndex]])
    await sleep(speed)
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    display(items, items.length, "partition", [items[leftIndex], pivot, items[rightIndex]])
    await sleep(speed)
    display(items, items.length, "regular", 0)
}

