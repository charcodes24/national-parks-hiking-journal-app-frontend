export default function HikeCard({ hike, deleteHike }) {
    const { id, name, distance, note } = hike

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
                <p className="description"><strong>Description:</strong> {note}</p>
            <div className="card">
                <button className="unique ui purple button" onClick={handleDelete}>Delete Hike</button>
            </div>
            </div>
        </div>
    )
}