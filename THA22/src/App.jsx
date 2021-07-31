import { useState, useEffect } from "react";
import "./styles.css";
import Template from "./components/Template";
import Meme from "./components/Meme";

export default function App() {
  const [templates, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.memes);
        setTemplate(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {}
      {meme === null ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}
