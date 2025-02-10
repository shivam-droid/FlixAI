import { Provider } from "react-redux";
import Body from "./pages/home/Body.jsx";
import appStore from "./utils/appStore.js";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
