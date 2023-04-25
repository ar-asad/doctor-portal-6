import { Toaster } from 'react-hot-toast';
import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div data-theme="light" className='max-w-7xl mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
