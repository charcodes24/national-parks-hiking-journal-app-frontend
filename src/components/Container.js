import Card from "./Card"

export default function Container({ parks }) {

    const displayParks = parks.map((park, i) => {
        return <Card
            key={i}
            park={park}
            />
    })
    
    return (
        <div>
            {displayParks}
        </div>
    )
}