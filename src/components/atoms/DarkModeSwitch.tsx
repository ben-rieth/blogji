import useDarkMode from "../../hooks/useDarkMode"
import { BsMoon, BsSun } from 'react-icons/bs';
import classNames from 'classnames';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const iconClass = classNames(
        "w-8", 
        "h-8",
        { "fill-slate-100": darkMode }
    ); 

    const handleIconClick = () => {
        setDarkMode(!darkMode);
    }

    return darkMode ? (
            <BsMoon onClick={handleIconClick} className={iconClass} data-testid="moon-icon"/> 
        ) : (
            <BsSun onClick={handleIconClick} className={iconClass} data-testid="sun-icon" />
    );
}

export default DarkModeSwitch;