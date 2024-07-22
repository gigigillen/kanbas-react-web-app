
// declares a whole bunch of functions, kinda like a util class?
// each can be individually imported
export function add(a: number, b: number): number {
    return a + b;
  }
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  export function divide(a: number, b: number): number {
    return a / b;
  }

  //object that has all the functions
  const Math = {
    add,
    subtract,
    multiply,
    divide,
  };
  //and then export said object
  // you can only have one default, and we decided this was the most important
  export default Math;
