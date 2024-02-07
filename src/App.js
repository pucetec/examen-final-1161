import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PisoForm from "./components/PisoForm";
import ViewModal from "./components/ViewModal";
import { AppProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <PisoForm />
    </div>
  );
}

export default function AppWithContext() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
