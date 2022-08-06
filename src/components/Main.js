import { update, unsort } from "../helper"
import { useEffect, useState } from "react"

let length = 50
let arr = unsort(length)
let isSorting = false

export default function Main({ title, algo, length, speed }) {
    useEffect(() => {
        if (!isSorting) {
            arr = unsort(length)
            setState(update(arr, length))
        }
    }, [length])

    const [state, setState] = useState(update(arr, length))

    function display(arr, length, displayType, index) {
        setState(update(arr, length, displayType, index))
    }

    function displayUnsorted(length) {
        if (!isSorting) {
            arr = unsort(length)
            setState(update(arr, length))
        }
    }

    async function sort() {
        if (!isSorting) {
            isSorting = true
            await algo(arr, speed, display)
            isSorting = false
        }
    }

    return (
        <main>
            <h1>{title}</h1>
            <div className="sorting-container">
                {state}
            </div>
            <div className="sort-btns">
                <button className="btn" onClick={sort}>Sort</button>
                <button className="btn" onClick={() => displayUnsorted(length)}>Unsort</button>
            </div>

        </main >
    )
}

