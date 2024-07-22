export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li>Buy milk</li>, <li>Feed the pets</li>]; //html elements
    let variableArray1 = [ functionScoped, blockScoped, constant1,
                           numberArray1, stringArray1 ]; //array within an array, mixing and matching
    return (
      <div id="wd-simple-arrays">
        <h4>Simple Arrays</h4>
        {/* just implementing the content, no brackets */}
        numberArray1 = {numberArray1}     <br />
        stringArray1 = {stringArray1}     <br />
        {/* jumbled concatination of array elements */}
        variableArray1 = {variableArray1} <br />
        Todo list:
        {/* using an array to make a list, the array is composed of html elements*/}
        <ol>{htmlArray1}</ol>
        <hr />
      </div>
    );
  }
  