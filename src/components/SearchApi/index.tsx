import React, { SetStateAction, useState } from 'react';

const people = [
    "Jackson",
    "Billy",
    "Austin",
    "Mickael",
    "Simon",
    "Thomas"
];

export const SerachApi = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    const results = !searchTerm ? people : people.filter(person =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return (
        <>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
            <ul>
                {results.map(item => (
                    <p>{item}</p>
                ))}
            </ul>
        </>
    );
}
export default SerachApi;