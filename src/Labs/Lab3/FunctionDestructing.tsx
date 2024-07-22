const add = (a: number, b: number) => a + b;
//{a, b} is being used as a destruct operator, and then passing the elements thorugh the parameters
const subtract = ({ a, b }: { a: number; b: number }) => a - b;

export default function FunctionDestructing() {
    const sum = add(1, 2);
    const difference = subtract({ a: 4, b: 2 }); //creating and passing an object
    return (
      <div id="wd-function-destructing">
        <h2>Function Destructing</h2>
        const add = (a, b) =&gt; a + b;<br />
        const sum = add(1, 2);<br />
        const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
        const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
        sum = {sum}<br />
        difference = {difference} <hr />
      </div>
   );}
   