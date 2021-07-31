import React, { useState } from "react";

export default function AddHikeForm({ addHike, name }) {
    const [addHikeForm, setAddHikeForm] = useState({
        name: "", 
        distance: 0, 
        difficulty: "",
        note: ""
    })

    function handleChange(e) {
        setAddHikeForm({
            ...addHikeForm, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9393/add_hikes/', {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                hike: {
                    name: addHikeForm.name, 
                    distance: addHikeForm.distance, 
                    difficulty: addHikeForm.difficulty,
                    note: addHikeForm.note,
                }, 
                park: {
                    name: name
                }
            })
        })
        .then(res => res.json())
        .then(newHike => addHike(newHike))
    }

    return (
        <div>
            <h4>Add Hike</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" value={addHikeForm.name} placeholder="Enter name..." />
                <input onChange={handleChange} type="text" name="distance" value={addHikeForm.distance} placeholder="Add distance..." />
                <input onChange={handleChange} type="text" name="difficulty" value={addHikeForm.difficulty} placeholder="Add difficulty..." />
                <br/>
                <textarea onChange={handleChange} type="text" name="note" value={addHikeForm.note} placeholder="Add note..." />
                <button type="submit">Add Park</button>
            </form>
        </div>
    )
}