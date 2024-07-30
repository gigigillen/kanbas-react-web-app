export default function PassingFunctions({ theFunction }: { theFunction: () => void }) {
    return (
        <div>
            <h2>Passing Functions</h2>
            {/* sub-component */}
            {/* declaring the handler and pointing to the function that will be invoked */}
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the Function
            </button>
            <hr />
        </div>
    );
}
