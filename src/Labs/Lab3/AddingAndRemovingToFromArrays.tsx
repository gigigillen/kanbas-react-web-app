export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>]; //ARRAY CREATED
    numberArray1.push(6); // adding new items to the end of an array
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dogs</li>); //ADDED TO ARRAY
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1); // removign on element at position one (not index one)
    return (
      <div id="wd-adding-removing-from-arrays">
        <h4>Add/remove to/from arrays</h4>
        numberArray1 = {numberArray1} <br />
        stringArray1 = {stringArray1} <br />
        Todo list:
        {/* ARRAY DISPLAYS ALL ELEMENTS */}
        <ol>{todoArray}</ol>
        <hr />
      </div>
  );}
  