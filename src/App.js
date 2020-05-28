import React from 'react';
import Navbar from './components/layout/Navbar'
import Controls from './components/layout/Controls'
import Results from './components/results/Results'
import { Provider } from 'react-redux'
import store from './Store'

//set up the main app and put all the stuff in the provider so that it's accessible by redux
import './App.css';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <Controls />
          <Results />
        </div>
    </Provider>
  );
}

export default App;
