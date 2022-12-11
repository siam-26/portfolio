import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='w-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
