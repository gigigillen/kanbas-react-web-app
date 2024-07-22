export default function ForLoops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];
    //for each element in the array, add an element from stringArray1 to stringArray2 (make it uppercase)
    for (let i = 0; i < stringArray1.length; i++) {
      const string1 = stringArray1[i];
      stringArray2.push(string1.toUpperCase());
    }
    return (
      <div id="wd-for-loops">
        <h4>For Loops</h4>
        {/* function call */}
        stringArray2 = {stringArray2} <hr />
      </div>
  );}
  