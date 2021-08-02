import React, { useState } from "react";

export default function AddHikeForm({ addHike, name }) {
    const [addHikeForm, setAddHikeForm] = useState({
        name: "", 
        distance: "",
        note: ""
    })

    const defaultForm = {
        name: "", 
        distance: "", 
        note: ""
    }

    function handleChange(e) {
        setAddHikeForm({
            ...addHikeForm, 
            [e.target.name]: e.target.value
        })
    }

    const newName = name.replaceAll('_', ' ')

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
                    note: addHikeForm.note,
                }, 
                park: {
                    name: newName
                }
            })
        })
        .then(res => res.json())
        .then((newHike) => addHike(newHike.hike))
        setAddHikeForm(defaultForm)
    }

    return (
        <div className="parent">
                <div className="child">
                <h4 className="add">Add Hike</h4>
                <form className="ui form searchbar" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="name" value={addHikeForm.name} placeholder="Enter name..." />
                    <input onChange={handleChange} type="text" name="distance" value={addHikeForm.distance} placeholder="Add distance..." />
                    <input onChange={handleChange} type="text" name="note" value={addHikeForm.note} placeholder="Add note..." />
                    <button className="ui olive button" type="submit">Add Hike</button>
                </form>
            </div>
        </div>
    )
}