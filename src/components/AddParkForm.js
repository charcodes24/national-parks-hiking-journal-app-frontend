import React, { useState } from "react"

export default function AddParkForm({ addPark }) {
    const [addParkForm, setAddParkForm] = useState({
        name: "", 
        image: ""
    })

    function handleChange(e) {
        setAddParkForm({
            ...addParkForm, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9393/national_parks', {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                name: addParkForm.name, 
                image: addParkForm.image
            })
        })
        .then(res => res.json())
        .then(newPark => addPark(newPark))
    }
    return (
        <div>
            <h4>Add National Park</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" value={addParkForm.name} placeholder="Enter name..." />
                <input onChange={handleChange} type="text" name="image" value={addParkForm.image} placeholder="Add image..." />
                <button type="submit">Add Park</button>
            </form>
        </div>
    )
}