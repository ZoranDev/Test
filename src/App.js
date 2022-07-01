import { ContextProvider } from "./context/Context";
import Form from "./components/Form";
import DisplayedUsers from "./components/DisplayedUsers";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Form />
        <DisplayedUsers />
      </div>
    </ContextProvider>
  );
}

export default App;
