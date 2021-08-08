import Container from "./components/Container";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./components/Form";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
        <Container />
        <hr />
        <Form />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
