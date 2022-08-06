import { sleep } from "../helper";

async function buildMaxHeap(arr, speed, display) {
    let i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
        await heapify(arr, i, arr.length, speed, display);
        i -= 1;
    }
}

async function heapify(heap, i, max, speed, display) {
    let index;
    let leftChild;
    let rightChild;

    while (i < max) {
        index = i;
        leftChild = 2 * i + 1;
        rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }
        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }
        if (index === i) {
            return;
        }
        await swap(heap, i, index, speed, display);
        i = index;
    }
}

async function swap(arr, firstItemIndex, lastItemIndex, speed, display) {
    const temp = arr[firstItemIndex];
    display(arr, arr.length, "doubleHighlight", [arr[firstItemIndex], arr[lastItemIndex]])
    await sleep(speed)
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
    display(arr, arr.length, "doubleHighlight", [arr[lastItemIndex], arr[firstItemIndex]])
    await sleep(speed)
    display(arr, arr.length, "regular", 0)
}

export async function heapSort(arr, speed, display) {
    await buildMaxHeap(arr, speed, display);
    let lastElement = arr.length - 1;

    while (lastElement > 0) {
        await swap(arr, 0, lastElement, speed, display);
        await heapify(arr, 0, lastElement, speed, display);
        lastElement -= 1;
    }
    display(arr, arr.length, "done", 0)
    await sleep(100)
    display(arr, arr.length, "regular", 0)

    return arr;
}