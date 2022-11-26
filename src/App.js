import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const tellJoke = async () => {
    const url = `https://joke.deno.dev/`;
    await (await fetch(url)).json().then((result) => {
      setData(result);
    });
  };

  window.onload = () => {
    tellJoke();
  };

  return (
    <div className="App">
      <div className="joke">{data.setup}</div>
      <div className="punchline">{data.punchline}</div>
    </div>
  );
}

export default App;
