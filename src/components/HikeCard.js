export default function HikeCard({ hike, deleteHike }) {
    const { id, name, distance, difficulty, note } = hike

    function handleDelete() {
        fetch(`http://localhost:9393/hikes/${id}`, {
            method: "DELETE"
        })
        deleteHike(id)
    }
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li>{distance} miles</li>
                <li>{difficulty}</li>
                <li>{note}</li>
                <button onClick={handleDelete}>Delete Hike</button>
            </ul>
        </div>
    )
}