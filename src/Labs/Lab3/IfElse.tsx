

export default function IfElse() {
    let true1 = true, 
    false1 = false;
    return (
        <div id="wd-if-else">
            <h4>If Else</h4>
            {/* if true1 is true then true1 ptag is evaluated, else nothing */}
            {true1 && <p>true1</p>}
            {/* ? symbol is shorthand for if/else */}
            {/* what comes after : is what's rendered if the cond isn't met */}
            {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
        </div>
    )

}