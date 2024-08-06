import React, { useState } from "react";
function WorkingWithObjects() {
    //handling state of the assignment object
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    //creating a constant to abstract the URL
    const ASSIGNMENT_URL = "http://localhost:4000/Lab5/assignment"


    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
                <br />
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title}
            />
            <br />
            <a href="http://localhost:4000/Lab5/assignment">
                Get Assignment
            </a>
            <br />

            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            < br />
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score}
            />
            <br />
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Check completion
            </a>
            <br />
            <label>
                <input
                    type="checkbox"
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })}
                />
                Completed
            </label>

            <br />
        </div>
    );

}
export default WorkingWithObjects;