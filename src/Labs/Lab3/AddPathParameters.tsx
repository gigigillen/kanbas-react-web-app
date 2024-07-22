import { useParams } from "react-router-dom";

// expecting data to be encoding in the URL
// a listener, of sorts
export default function AddPathParameters() {
    //converting the string to integers
    const { a, b } = useParams();
    return (
        <div id="wd-add">
            <h4>Add Path Parameters</h4>
            {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
        </div>
    );
}
