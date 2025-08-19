import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import Board from "../pages/TicTacToy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "volunteers",
        element: <div>Волонтеры</div>,
      },
      {
        path: "pets",
        element: <div>Животные</div>,
      },
      {
        path: "tic-tac",
        element: <Board />,
      },
    ],
  },
]);
