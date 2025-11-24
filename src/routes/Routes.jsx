import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/Home';

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }
]);
