import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/signIn">SignIn</Link>
      <Link to="/signOut">SignOut</Link>
    </div>
  );
};
