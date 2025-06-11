import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <nav
            style={{
                backgroundColor: darkMode ? '#333' : '#eee',
                color: darkMode ? 'white' : 'black',
                padding: '1rem'
            }}
        >
            <h1>My App</h1>
            <button onClick={toggleTheme}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </nav>
    );
};

export default Navbar;
