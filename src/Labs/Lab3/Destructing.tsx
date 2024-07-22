export default function Destructing() {
    const person = { name: "John", age: 25 }; //JSON object, {} on right side constructing the object
    const { name, age } = person; // {} on left side, destructing the object
    //same as doing this, just different syntax
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"]; //constrcut
    const [ first, second, third ] = numbers; //deconstruct
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        const &#123; name, age &#125; =
              &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}<hr />
      </div>
    );
   }
   