const Card = (props) => {
  return <div className="card">
    <img src={props.img} alt="Thumbnail" />
    <div className="title">{props.title || "Title"}</div>
    <div>You will get {props.calorie} cals.</div>
    <button>Add</button>
    </div>
}

export default Card;