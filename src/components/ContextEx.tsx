import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ContextEx = () => {
    const themeData = useContext(ThemeContext)

    return (
        <div>
            <p>El valor de ThemeContext is {themeData.theme}</p>
            <button onClick={themeData.handleCallback}>Cambiar theme a dark</button>
        </div>
    );
};

export default ContextEx;