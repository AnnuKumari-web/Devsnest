import { useState } from "react";
import Button from "./button";
import Menu from "./menu";

const UserInput = () => {
  const [listitems, setListItems] = useState(["abc", "mango"]);
  var [value, setValue] = useState("");
  const [items, setItems] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        onChange={handleOnChange}
        placeholder="Enter food item"
        type="text"
        value={value}
        name="item"
      />
      <input
        onChange={handleOnChange}
        placeholder="Enter calorie"
        type="number"
        value={value}
        name="calorie"
      />

      <Button
        setListItems={setListItems}
        listitems={listitems}
        value={value}
        setValue={setValue}
        setItems={setItems}
        items={items}
      />

      {listitems.map((item, index) => (
        <Menu
          key={index}
          item={item}
          listitems={listitems}
          setListItems={setListItems}
          index={index}
        />
      ))}
    </>
  );
};

export default UserInput;
