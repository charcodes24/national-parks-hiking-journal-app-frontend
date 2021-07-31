import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AddHikeForm from './AddHikeForm';
import HikeCard from './HikeCard';

export default function FullCard({ parks }) {
    const [hikes, setHikes] = useState([])
    const { name } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9393/national_parks/hikes/${name}`)
        .then(res => res.json())
        .then(data => setHikes(data.hikes))
    }, [name]);

    function addHike(newHike) {
        setHikes((mostUpdatedHikes) => [...mostUpdatedHikes, newHike])
    }

    function deleteHike(id) {
        let updatedHikes = hikes.filter((hike) => hike.id !== id)
        setHikes(updatedHikes)
    }

    const filteredPark = parks.filter((park) => park.name === name)
                                .map((park, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={park.image} alt={park.name}/>
                                            <h1>Hikes I've Done in: {park.name}</h1>
                                        </div>
                                    )
                                })

    const displayHikes = hikes.map((hike, i) => {
        return <HikeCard
                key={i}
                hike={hike}
                deleteHike={deleteHike}
                />
    })

    return (
        <div>
            {filteredPark}
            <AddHikeForm addHike={addHike} name={name}/>
            {displayHikes}
        </div>
    )
}