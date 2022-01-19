import { Provider } from "react-redux";
import Container from "./components/Container";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">Let's plan your saving goal</div>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
