import React, { useState } from "react";


export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAreaChange = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid area');
        }
    };
    return (
        <div>
            <h3>Add New Room</h3>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="Name"
                onChange={handleNameChange}>
                </input>
                <input type="text"
                placeholder="Area"
                onChange={handleAreaChange}>
                </input>
                <button type="submit">Add Room</button>
            </form>
        </div>
    )
}