import React, { useState } from "react";
export default function EventObject() {
    //useState hook allows us to capture a variable that is going to change over time
  const [event, setEvent] = useState(null);

  const handleClick = (e: any) => {
    //target is a reference to the button (DOM element)
    e.target = e.target.outerHTML;
    //removing button, so we don't enter an infinate loop
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      {/* pre tag is block of text with pre defined style */}
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
  );}
