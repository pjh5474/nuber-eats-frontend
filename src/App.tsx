import { useReactiveVar } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import { LoggedOut } from "./routes/logged-out";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Outlet /> : <LoggedOut />;
}

export default App;
