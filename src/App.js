import './App.css';
import SelectButton from './common/Buttons/RadioButton';
import ServicesCheckBox from './component/Service/CheckBox';
import PopUpView from './component/Modal/PopUP';
import { useState } from 'react';
import { InfoContextProvider } from './context/InfoContext';
import Page from './Pages/Page';

const App = () => {
  
  return (
    <InfoContextProvider>
      <Page></Page>
    </InfoContextProvider>
  );
}

export default App;
