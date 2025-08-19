import { AppBar, Button } from "@mui/material";

export function Header() {
  return (
    <AppBar position="static">
      <div className="flex flex-row items-center justify-between py-2 px-3">
        <div className="flex flex-row gap-4 items-center justify-center">
          <span className="sm:text-2xl pr-5">Pet Family</span>
          <span>Задачи</span>
          <span>Крестики нолики</span>
          <span>Занятия</span>
          <Button color="inherit">Login</Button>
        </div>
      </div>
    </AppBar>
  );
}