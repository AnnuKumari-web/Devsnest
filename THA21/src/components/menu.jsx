 import React, { useState } from "react";

const Menu = ({ item, listitems, setListItems, index, setValue, value }) => {
  const [isEditMode,setIsEditMode] = useState(false);
    
    const handleOnEdit =()=>{};

    const [editData,setEditData] = useState({item});
  return (
    <div className="box">
      {
        isEditMode ? <input value={editData}/> :  <h5>{item}</h5>
      }
     
      <div>You have consumed {value} calories</div>
      {
        isEditMode?<button>Save</button> : <button
        className="option-btn"
        onClick={() => {
          setIsEditMode{true}
        }}
      >
        Edit
      </button>
      }
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
