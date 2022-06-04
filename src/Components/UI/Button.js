import "./Button.css";

export default function Button(props) {
  return (
    <button className="button" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}
