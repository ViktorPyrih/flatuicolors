import './App.css';
import pallets from './data/pallete.json';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import TransitionedHome from "./pages/transitioned/TransitionedHome";
import TransitionedPalettePage from "./pages/transitioned/TransitionedPalettePage";

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: (
            <TransitionedHome/>
        )
      },
      {
        path: "/palette/:id",
        element: (
            <TransitionedPalettePage/>
        ),
        loader: ({params}) => {
            const palletId = params.id;
            return pallets.filter(pallet => pallet.id === palletId)[0];
        }
      },
      {
          path: "/*",
          loader: () => {
              throw redirect("/");
          }
      }
  ]);
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
