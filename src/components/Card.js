import { Link } from 'react-router-dom';

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
            <Link to={`/park/${name}`}><button>Hikes</button></Link>
            <button onClick={handleDelete}>Delete Park</button>
        </div>
    )
}