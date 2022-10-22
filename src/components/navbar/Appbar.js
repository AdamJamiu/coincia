import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../src/Cryptocurrency.png"

const AppBar = (props) => {
   

        return (
            <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] h-16 px-8 flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-[50px] h-10" alt="logo" src={logo} />
                    <h1 className="text-lg font-bold ml-4">Coincia</h1>
                </div>
                <div>
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
    export default AppBar;
