import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/Routes.jsx";

import "./App.css";

const App = () => {

  return (
    <>
      <RouterProvider router={appRouter}>
      </RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '0.8rem',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            textAlign: 'center'
          },
        }}
      />
    </>
  );

}

export default App;
