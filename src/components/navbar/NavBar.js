import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Diamond from "./Cryptocurrency.png";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const NavBar = (props) => {
  return (
    <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] h-16 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <img height={40} width={40} alt="logo" src={Diamond} />
        <h1 className="text-lg font-bold ml-4">Coincia</h1>
      </div>
      <div className="flex flex-row items-center gap-6">
        <SignedIn>
          <UserButton />
        </SignedIn>

        {props.themeStatus && (
          <FontAwesomeIcon
            onClick={props.onSetTheme}
            className="cursor-pointer"
            icon={faSun}
          />
        )}
        {!props.themeStatus && (
          <FontAwesomeIcon
            onClick={props.onSetTheme}
            className="cursor-pointer"
            icon={faMoon}
          />
        )}
      </div>
    </nav>
  );
};
export default NavBar;
