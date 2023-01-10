import useDarkMode from "../../hooks/useDarkMode"
import { BsMoon, BsSun } from 'react-icons/bs';
import classNames from 'classnames';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const iconClass = classNames(
        "w-5 xs:w-6 md:w-8", 
        "h-5 xs:h-6 md:h-8",
        { "fill-slate-100": darkMode }
    ); 

    const handleIconClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="hover:cursor-pointer">
            {darkMode ? (
                <BsMoon onClick={handleIconClick} className={iconClass} data-testid="moon-icon"/> 
            ) : (
                <BsSun onClick={handleIconClick} className={iconClass} data-testid="sun-icon" />
            )}
        </div>
    );
}

export default DarkModeSwitch;