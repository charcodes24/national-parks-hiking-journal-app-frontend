import React, { useState } from "react";

export default function AddHikeForm({ addHike, name }) {
    const [display, setDisplay] = useState(false)
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
        if (e.target.name === 'name') {
            setAddHikeForm({
                ...addHikeForm, 
                [e.target.name]: e.target.value.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
            })
        } else {
        setAddHikeForm({
            ...addHikeForm, 
            [e.target.name]: e.target.value
        })
    }}

    const newName = name.replaceAll('_', ' ')

    function handleSubmit(e) {
        e.preventDefault();
        if (addHikeForm.name.length === 0 || addHikeForm.note.length === 0) {
            setDisplay(!display)
        } else {
            //route for fetch request 
            fetch('http://localhost:9393/hikes/', {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            //converts object you're sending into a string
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
            {display ? <div className="ui violet message">Please enter a hike name & description!</div> : null}
        </div>
    )
}