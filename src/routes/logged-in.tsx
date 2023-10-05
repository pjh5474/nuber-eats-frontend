import { isLoggedInVar } from "../apollo";

export const LoggedIn = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };

  return (
    <div>
      <h1>Logged In</h1>
      <button onClick={onClick}>Click to Logout</button>
    </div>
  );
};
