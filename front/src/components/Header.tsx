import { AppBar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static">
      <div className="flex flex-row items-center justify-between py-2 px-3">
        <div className="flex flex-row gap-4 items-center justify-center">
          <span className="sm:text-2xl pr-5">Pet Family</span>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="volunteers">Волонтеры</NavLink>
          <NavLink to="pets">Животные</NavLink>
          <NavLink to="tic-tac">Крестики нолики</NavLink>
          <Button color="inherit">Login</Button>
        </div>
      </div>
    </AppBar>
  );
}
