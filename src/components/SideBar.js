import { useState } from "react"
import AlgoButtton from "./AlgoButtton"

export default function SideBar({ onClick }) {

    const [{ ins, quick, merge, heap }, setState] = useState({
        ins: true,
        quick: false,
        merge: false,
        heap: false
    })

    function handleClick(selected) {
        switch (selected) {
            case "Insertion Sort":
                setState({
                    ...{},
                    ins: true
                })
                break
            case "Quick Sort":
                setState({
                    ...{},
                    quick: true
                })
                break
            case "Merge Sort":
                setState({
                    ...{},
                    merge: true
                })
                break
            case "Heap Sort":
                setState({
                    ...{},
                    heap: true
                })
                break
            default:
                setState({
                    ...{},
                    ins: true
                })
                break
        }
        onClick(selected)
    }
    return (
        <div className="sidebar">
            <AlgoButtton
                title={"Insertion Sort"}
                selected={ins}
                handleclick={handleClick}
            />
            <AlgoButtton
                title={"Quick Sort"}
                selected={quick}
                handleclick={handleClick}
            />
            <AlgoButtton
                title={"Merge Sort"}
                selected={merge}
                handleclick={handleClick}
            />
            <AlgoButtton
                title={"Heap Sort"}
                selected={heap}
                handleclick={handleClick}
            />
        </div>
    )
}
