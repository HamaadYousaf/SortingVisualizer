import { sleep } from "../helper";

export async function runMerge(arr, speed, display) {
    await mergeSort(arr, 0, arr.length - 1, speed, display);
    display(arr, arr.length, "done", 0)
    await sleep(100)
    display(arr, arr.length, "regular", 0)
}

async function mergeSort(arr, l, r, speed, display) {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        await mergeSort(arr, l, m, speed, display);
        await mergeSort(arr, m + 1, r, speed, display);
        display(arr, arr.length, "subArr", [l, r])
        await sleep(speed + 5)
        merge(arr, l, m, r);
        display(arr, arr.length, "subDone", [l, r])
        await sleep(speed)
    }
}

function merge(arr, start, mid, end) {
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2]) {
        return;
    }

    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) {
            start++;
        }
        else {
            let value = arr[start2];
            let index = start2;

            while (index !== start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
            start++;
            mid++;
            start2++;
        }
    }
    return arr
}