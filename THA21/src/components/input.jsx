import { useState } from "react";
import Button from "./button";
import Menu from "./menu";

const UserInput = () => {
  const [listitems, setListItems] = useState([]);
  var [value, setValue] = useState("");
  const [items, setItems] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnChangeCalorie = (e) => {
    setItems(e.target.value);
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
        onChange={handleOnChangeCalorie}
        placeholder="Enter calorie"
        type="number"
        value={items}
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
          listitems={listitems}
          setListItems={setListItems}
          index={index}
          value={value}
          setValue={setValue}
          setItems={setItems}
          items={items}
          item={item}
        />
      ))}
    </>
  );
};

export default UserInput;
