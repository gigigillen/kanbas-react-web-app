import { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  //use axios library to fetch
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  //populates when load
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  }
  //works with state (like useState()). allows you to implement logic that
  //will initialize when it first loads
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, [])

  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button> <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
    </div>
  );
}
