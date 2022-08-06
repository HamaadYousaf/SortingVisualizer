export function update(arr, length, displayType, index) {
    let elements = ""
    switch (displayType) {
        case "regular":
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            break
        case "highlight":
            elements = arr.map((x) =>
                x === index ?
                    <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'red' }} key={x}></div> :
                    <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            break
        case "doubleHighlight":
            elements = arr.map((x) =>
                x === index[0] ?
                    <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: '#F16969' }} key={x}></div> :
                    x === index[1] ?
                        <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'red' }} key={x}></div> :
                        <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            break
        case "subArr":
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            for (let i = index[0]; i <= index[1]; i++) {
                for (let j = 0; j <= arr.length; j++) {
                    if (arr[j] === arr[i]) {
                        elements[j] = <div className="bar" style={{ height: arr[j] * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'gray' }} key={arr[j]}></div>
                    }
                }
            }
            break
        case "subDone":
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            for (let i = index[0]; i <= index[1]; i++) {
                for (let j = 0; j <= arr.length; j++) {
                    if (arr[j] === arr[i]) {
                        elements[j] = <div className="bar" style={{ height: arr[j] * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'green' }} key={arr[j]}></div>
                    }
                }
            }
            break
        case "partition":
            elements = arr.map((x) =>
                x === index[1] ?
                    <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'green' }} key={x}></div> :
                    x === index[0] ?
                        <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'red' }} key={x}></div> :
                        x === index[2] ?
                            <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: '#F16969' }} key={x}></div> :
                            <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            break
        case "done":
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw", backgroundColor: 'green' }} key={x}></div>
            )
            break
        default:
            elements = arr.map((x) =>
                <div className="bar" style={{ height: x * 400 / length + "px", width: 50 / length + "vw" }} key={x}></div>
            )
    }
    return elements
}

export function unsort(length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(i);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

export const sleep = (sec) => {
    let sleep = new Promise(resolve => setTimeout(resolve, sec));
    return sleep;
}