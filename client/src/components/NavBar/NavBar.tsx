import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  return (
    <>
      <section className={style.NavBar}>
        <section className={style.navBarWS}>
          <img
            className={style.logoWS}
            src="/Images/WildSeries.webp"
            alt="logo du site WildSeries"
            onClick={handleClick}
            onKeyUp={handleKeyUp}
          />
          <h1 className={style.webTitle}>Wild Series</h1>
        </section>

        <section>
          <nav>
            <ul className={style.webLink}>
              <li>
                <NavLink to={"/"}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to={"/programs"}>Programme</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Catégories</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}

export default NavBar;
