const Button = ({ setListItems, setValue, value, items, listitems }) => {
  // const AddItems = (e) => {
  //   console.log("m")
  //   // setListItems([...listitems, value]);
  //   // setValue("");
  // };
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setListItems([...listitems, value]);
          // setValue("");
        }}
      >
        Add Items
      </button>
    </>
  );
};

export default Button;
