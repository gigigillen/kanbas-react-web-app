


export default function VariablesAndConstants() {
    //javscript synatc
    var functionScoped = 2; //don't use var again
    let blockScoped = 5; //meant to be changed
    const constant1 = functionScoped - blockScoped; //cannot be changed
    return (
        //html syntax
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            {/* curly brackets allow you to embed js in html */}
            functionScoped = {functionScoped}<br />
            blockScoped = {blockScoped}<br />
            constant1 = {constant1}
            <hr />
        </div>
    );
}
