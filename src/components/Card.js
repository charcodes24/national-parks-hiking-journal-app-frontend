import { Link } from 'react-router-dom';

export default function Card({ park, deletePark }) {
    const { id, name, image } = park

    //take name and remove whitespace
    const newName = name.replaceAll(' ', '_')

    function handleDelete() {
        fetch(`http://localhost:9393/national_parks/${id}`, {
            method: "DELETE"
        })
        deletePark(id)
    }

    return (
        <div className="column">
            <div className="ui fluid">
                <img className="ui medium circular image" src={image} alt={name} />
                <h4 className="park">{name}</h4>
                <div>
                    <Link to={`/park/${newName}`}><button className="ui violet button">Hikes</button></Link>
                    <button className="ui purple button" onClick={handleDelete}>Delete Park</button>
                </div>
            </div>
        </div>
    )
}