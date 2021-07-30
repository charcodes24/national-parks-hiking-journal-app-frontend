export default function HikeCard({ hike }) {
    const { id, name, distance, difficulty, note } = hike

    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li>{distance} miles</li>
                <li>{difficulty}</li>
                <li>{note}</li>
            </ul>
        </div>
    )
}