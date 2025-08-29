import NavHead from "./components/Header";
import { CssBaseline } from "@mui/material";
import CardList from "./components/CardList";

export default function App() {
  return (
    <div>
      <CssBaseline />
      <NavHead />
      <CardList />
    </div>
  );
}
