export default function VariableTypes() {
    //data type is implied, can be declared
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    //returns the type as a string
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return(
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = { numberVariable }<br/>
        floatingPointNumber = { floatingPointNumber }<br/>
        stringVariable = { stringVariable }<br/>
        booleanVariable = { booleanVariable + "" }<br/>
        isNumber = { isNumber }<br/>
        isString = { isString }<br/>
        isBoolean = { isBoolean }<hr/>
      </div>
    );
  }
  