import React, { useState } from "react";
export default function ArrayStateVariable() {
    //initalizing the array
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    //adding a random element to the end of the array
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    //deleting an element based on the index
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}
                            id="wd-delete-element-click">
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
