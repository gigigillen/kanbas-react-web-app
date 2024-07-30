import React, { useState } from "react";


export default function BooleanStateVariables() {
    const [done, setDone] = useState(true);
    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            {/* if done is true Done, else Not Done */}
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                {/* toogle done boolean when checkbox is clicked */}
                <input type="checkbox" checked={done}
                    onChange={() => setDone(!done)} /> Done
            </label>
            {/* right side will only be rendered if left side is true */}
            {done && <div className="alert alert-success"> Yay! you are done</div>}
            <hr />
        </div>
    );
}
