export default function Card({ park, deletePark }) {
    const { id, name, image } = park

    function handleDelete() {
        fetch(`http://localhost:9393/national_parks/${id}`, {
            method: "DELETE"
        })
        deletePark(id)
    }

    return (
        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <button onClick={handleDelete}>Delete Park</button>
        </div>
    )
}