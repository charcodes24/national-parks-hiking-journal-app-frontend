import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FullCard({ parks }) {
    const { name } = useParams();

    const filteredPark = parks.filter((park) => park.name === name)
                        .map((park, index) => {
                            return (
                                <div key={index}>
                                    <h1>Hikes I've Done in: {park.name}</h1>
                                </div>
                            )
                        })
    return (
        <div>
            {filteredPark}
        </div>
    )
}