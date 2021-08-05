import React, { useState } from "react";

const Menu = ({
  item,
  items,
  listitems,
  setListItems,
  index,
  setValue,
  value
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(value);
  const handleOnEdit = () => {};

  const handleOnDataChange = (e) => {
    setEditData(e.target.value);
  };

  const handleOnSave = () => {
    // setListItems([...listitems,editData]);
    const arr = listitems.map((listitem, i) => {
      if (i === index) {
        return;
        [...listitem, editData];
      } else {
        return listitem;
      }
    });

    setListItems(arr);

    // console.log(editData);
    // setListItems(newListitems);
    console.log(value);
    setIsEditMode(false);
  };

  return (
    <div className="box">
      {isEditMode ? (
        <input value={editData} onChange={handleOnDataChange} />
      ) : (
        <h5>{editData}</h5>
      )}

      <div>You have consumed {items} calories</div>
      {isEditMode ? (
        <button className="option-btn" onClick={handleOnSave}>
          Save
        </button>
      ) : (
        <button
          className="option-btn"
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          Edit
        </button>
      )}
      <button
        className="option-btn"
        onClick={() => {
          const newListitems = listitems.filter((el, i) => i !== index);
          setListItems(newListitems);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Menu;
