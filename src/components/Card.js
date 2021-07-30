export default function Card({ park }) {
    const { id, name, image } = park

    return (
        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
        </div>
    )
}