export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    const todos = ["Buy milk", "Feed the pets"];
    const squares = numberArray1.map(square); // square each element in the array
    const cubes = numberArray1.map((a) => a * a * a); // cube each element in the array, lambda functions (throwaway funcs)
    
    
    return (
      <div id="wd-map-function">
        <h4>Map Function</h4>
        squares = {squares} <br />
        cubes = {cubes} <br />
        Todos:
        {/* instead of calling a list with html elements, we can convert them using the map function */}
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol> <hr/>
      </div>
    );
  }
  