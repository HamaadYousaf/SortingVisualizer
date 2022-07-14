//CREATED BY: HAMAAD YOUSAF 2022-07-05

export default function Header({ length, speed, lengthChange, speedChange }) {
    return (
        <header>
            <h1>Visualizer</h1>
            <div className="sliders">
                <h2 className="adjust-text">Size: {length}</h2>
                <input className="size-slider" type="range" min="10" max="200" defaultValue={length} onChange={lengthChange}
                    style={{ background: `linear-gradient(90deg, rgb(80,80,80) ${(length / 2) - 1}%, rgb(255,255,255) ${(length / 2) - 1}%)` }}></input>
                <h2 className="adjust-text">Speed: {speed}ms</h2>
                <input className="speed-slider" type="range" min="1" max="100" defaultValue={speed} onChange={speedChange}
                    style={{ background: `linear-gradient(90deg, rgb(80,80,80) ${speed}%, rgb(255,255,255) ${speed / 2}%)` }}></input>
            </div>
        </header>
    )
}
