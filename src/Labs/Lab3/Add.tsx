
//a function you pass an object through {a, b}
export default function Add({ a, b }: { a: number; b: number }) {
    return (
      <div id="wd-add">
        <h4>Add</h4>
        {/* destruct the object */}
        a = {a}         <br />
        b = {b}         <br />
        {/* add them */}
        a + b = {a + b} <hr />
      </div>
    );
  }
  