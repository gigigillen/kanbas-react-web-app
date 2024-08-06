import { useState } from "react"

export default function ModulePractice() {
    //module state var
    const [module, setModule] = useState({
        id: "1",
        name: "Learning HTML",
        description: "Learning the basics of html",
        course: "CS1000"
    })

    const MODULE_URL = "http://localhost:4000/Lab5/module"


    return (
        <div>
            <h4>Module Practice</h4>
            <a href="http://localhost:4000/lab5/module">
                Get Module
            </a>
            <br />

            <a href="http://localhost:4000/lab5/module/name">
                Get Module Name
            </a>
            < br />

            <a href={`${MODULE_URL}/${module.name}`}>
                Update module name
            </a>
            <br />
            <input type="text"
                onChange={(e) =>
                    setModule({
                        ...module,
                        name: e.target.value
                    })}
                value={module.name} />
            <br />

            <a href={`${MODULE_URL}/update-description/${module.description}`}>
                Update module description
            </a>
            <br />
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />
        </div>

    )
}