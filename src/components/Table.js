//CREATED BY: HAMAAD YOUSAF 2022-07-05

export default function Table({ stats }) {

    const time = stats.split("|")

    return (
        <div className="table-container">
            <h1 className="comp-text">Complexity</h1>
            <table>
                <tbody>
                    <tr><th className="left">Best</th><th>{time[0]}</th></tr>
                    <tr><td className="left">Average</td><td>{time[1]}</td></tr>
                    <tr><td className="left">Worst</td><td>{time[2]}</td></tr>
                    <tr><td className="left">Space</td><td>{time[3]}</td></tr>
                </tbody>
            </table>
        </div>
    )
}
