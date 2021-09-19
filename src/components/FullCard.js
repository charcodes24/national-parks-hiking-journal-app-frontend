import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';

import AddHikeForm from './AddHikeForm';
import HikeCard from './HikeCard';

export default function FullCard({ parks }) {
    const [loading, setLoading] = useState(true)
    const [hikes, setHikes] = useState([])
    const { name } = useParams();


    useEffect(() => {
        fetch(`http://localhost:9393/national_parks/hikes/${name}`)
        .then((res) => res.json())
        .then((data) => {
            setHikes(data.hikes)
            setLoading(false)
        });
    }, [name]);

    function addHike(newHike) {
        setHikes([...hikes, newHike])
    }

    function deleteHike(id) {
        let updatedHikes = hikes.filter((hike) => hike.id !== id)
        setHikes(updatedHikes)
    }

    const newName = name.replaceAll('_', ' ')
    const filteredPark = parks.filter((park) => park.name === newName)
                                .map((park, index) => {
                                    return (
                                        <div key={index}>
                                            <img className="ui medium centered rounded image" src={park.image} alt={park.name}/>
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

    if (loading) {
        return <h3 className="ui orange message">Page is loading...</h3>
    }
    return (
        <div>
            <div>
                {filteredPark}
                <AddHikeForm addHike={addHike} name={name}/>
            </div>
            <div className="ui raised centered cards">
                {displayHikes}
            </div>
        </div>
    )
}