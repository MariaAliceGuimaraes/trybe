import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './Form.js';
import RenderState from './RenderState';


function App() {
  return (
    <div>
      <React.StrictMode>
        <Provider store={store} >
          <Form />
          <RenderState />
        </Provider>
      </React.StrictMode>
    </div>
    
  );
}

export default App;
