import React, { useState } from "react"

export default function AddParkForm({ addPark }) {
    const [addParkForm, setAddParkForm] = useState({
        name: "", 
        image: ""
    })

    const defaultForm = {
        name: "", 
        image: ""
    }

    function handleChange(e) {
        if (e.target.name === 'name') {
            console.log(e.target.name)
            setAddParkForm({
                ...addParkForm, 
                [e.target.name]: e.target.value.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
            })
        } else {
        setAddParkForm({
            ...addParkForm, 
            [e.target.name]: e.target.value
        })
    }}

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9393/national_parks/', {
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
        .then(newPark => addPark(newPark.park))
        setAddParkForm(defaultForm)
    }

    return (
        <div>
            <form className="ui form searchbar" onSubmit={handleSubmit}> 
                <input className="ui input" onChange={handleChange} type="text" name="name" value={addParkForm.name} placeholder="Enter name..." />
                <input onChange={handleChange} type="text" name="image" value={addParkForm.image} placeholder="Add image..." />
                <button className="ui black button" type="submit">Add Park</button>
            </form>
        </div>
    )
}