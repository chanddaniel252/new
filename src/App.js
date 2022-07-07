
import { Provider } from 'react-redux';
import './App.css';
import { Drawer } from './Container/Drawer';
import store from './Container/Store/store';

function App() {



  return (
    <Provider store={store}>
      <div className='main'>
        <Drawer />
      </div>
    </Provider>
  );
}

export default App;
