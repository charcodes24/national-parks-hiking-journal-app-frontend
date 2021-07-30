import Card from "./Card"

export default function Container({ parks, deletePark }) {

    const displayParks = parks.map((park, i) => {
        return <Card
            key={i}
            park={park}
            deletePark={deletePark}
            />
    })
    
    return (
        <div>
            {displayParks}
        </div>
    )
}