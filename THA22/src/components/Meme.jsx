import { useState } from "react";
const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "elsa28122000",
    password: "@nnukmri.@k",
    boxes: [],
  });
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box,index) => (
      url +=`&boxes[${index}][text]=${box.text}`
  ));
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.success=== true?setMeme({...meme,url:data.data.url}):setMeme({...meme,url:meme.url});
  });
};
  return (
    <>
      <div className="meme">
        <img className="img" src={meme.url} alt="" />
        {[...Array(meme.box_count)].map((el, index) => (
          <input
            className="caption"
            type="text"
            placeholder={`Meme Caption ${index+1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
        <div  className="btn-class">
          <button className="btn" onClick={generateMeme}>Generate Meme</button>
          <button className="btn"
            onClick={() => {
              setMeme(null);
            }}
          >
            Choose Template
          </button>
        </div>
      </div>
    </>
  );
};

export default Meme;
