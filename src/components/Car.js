import React, { useState } from 'react'

export default function Car() {
    const [car, setCar] = useState([
        { name: "Mercedes", color: "blue", year: "2018" },
    ]);
    const [newYear, setNewYear] = useState('');
    function updateYear() {
        setCar(car.map((e) => ({ ...e, year: newYear })));
    }

    return (
        <>
            {car.map((entry) => (
                <p>Show information of Car: {entry.name} - {entry.color} - {entry.year}</p>
            ))}
            Update Year of Car: <input type='number' value={newYear} onChange={(e) => setNewYear(e.target.value)} />
            <input type='button' value='Update Year' onClick={updateYear} />
        </>
    )
}
