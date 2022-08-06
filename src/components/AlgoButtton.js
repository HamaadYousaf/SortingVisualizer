export default function AlgoButtton({ title, selected, handleclick }) {
    const styles = {
        backgroundColor: !selected ? "#313131" : "#6D6D6D",
        borderBottom: !selected ? "2.5px solid #272727" : "none",
        boxShadow: !selected ? "0px 4px 8px rgba(0, 0, 0, 0.5)" : "none"
    }
    return (
        <button style={styles} className="option-button" onClick={() => handleclick(title)}>{title}</button>
    )
}
