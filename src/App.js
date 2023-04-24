import logo from './logo.svg';
import './App.css';
import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div data-theme="light" className='max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;