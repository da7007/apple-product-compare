import "./App.css";

function Item(props: any) {
  return (
    <div className="Item">
      <img src={props.img}></img>
      <h3>{props.name}</h3>
      <p>CPU: {props.cpu}</p>
      <p>Memory: {props.memory}</p>
      <p>Storage: {props.storage}</p>
      <p>${props.price}</p>
    </div>
  );
}

export default Item;
