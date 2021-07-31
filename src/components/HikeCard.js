export default function HikeCard({ hike, deleteHike }) {
    const { id, name, distance, difficulty, note } = hike

    function handleDelete() {
        fetch(`http://localhost:9393/hikes/${id}`, {
            method: "DELETE"
        })
        deleteHike(id)
    }
    return (
        <div className="card">
            <div className="content">
                <h3 className="header">{name}</h3>
                <p className="description"><strong>Distance:</strong> {distance} miles</p>
                {/* <p className="description"><strong>Difficulty:</strong> {difficulty}</p> */}
                <p className="description"><strong>Description:</strong> {note}</p>
            <div>
                <button className="ui purple button" onClick={handleDelete}>Delete Hike</button>
            </div>
                {/* <ul className="meta">
                    <li>Distance: {distance} miles</li>
                    <li>Difficulty: {difficulty}</li>
                    <li>Note: {note}</li>
                    <button className="ui bottom attached button" onClick={handleDelete}>Delete Hike</button>
                </ul> */}
            </div>
        </div>
    )
}