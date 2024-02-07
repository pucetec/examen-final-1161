import './App.css';
import Form from './components/Form/Form';
import MatModal from './components/MatModal/MatModal';
import { FormContextProvider } from './context/FormContext/FormContext';

function App() {
  return (
    <FormContextProvider>
      <div className="App">
        <h1>Formulario de propiedad</h1>
        <Form />
        <MatModal/>
      </div>
    </FormContextProvider>
  );
}

export default App;
