import "./styles.css";
import Button from "./button";

export default function App() {
  return (
    <div className="App">
      <h1>
        There are 4 counter component instances that each manage their own
        state.
      </h1>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}
